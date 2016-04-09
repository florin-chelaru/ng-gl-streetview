/**
 * Created by Florin Chelaru ( florin [dot] chelaru [at] gmail [dot] com )
 * Date: 4/8/2016
 * Time: 9:35 PM
 */

goog.provide('gls.StreetviewControl');

/**
 * @param {{element: HTMLElement, width: number, height: number, quality: number, location: {lat:number, lng:number}, texturePlaceholderUrl: string,
 * markerModel: {url:string, scale:{x:number,y:number,z:number}, rotation:{x:number,y:number,z:number}}
 * }} [options]
 * @constructor
 */
gls.StreetviewControl = function(options) {

  //region constants

  /**
   * @const {number}
   * @private
   */
  this._near = 0.1;

  /**
   * @const {number}
   * @private
   */
  this._far = 1000;

  /**
   * @const {number}
   * @private
   */
  this._fov = 60;

  /**
   * Used to map distances in meters to distances within the GL projection sphere.
   * @const {number}
   * @private
   */
  this._distanceToRadius = 1;

  /**
   * @const {number}
   * @private
   */
  this._projRadius = 500;

  //endregion

  /**
   * @type {{element: HTMLElement, width: number, height: number, quality: number, location: {lat: number, lng: number}, texturePlaceholderUrl: string, markerModel: {url: string, scale: {x: number, y: number, z: number}, rotation: {x: number, y: number, z: number}}}}
   * @private
   */
  this._options = options;

  //region WebGL

  /**
   * @type {number}
   * @private
   */
  this._currHeading = 0;

  /**
   * @type {number}
   * @private
   */
  this._centerHeading = 0;

  /**
   * @type {THREE.Euler}
   * @private
   */
  this._headingVector = new THREE.Euler();

  /**
   * @type {THREE.WebGLRenderer}
   * @private
   */
  this._renderer = null;

  /**
   * @type {THREE.CSS3DRenderer}
   * @private
   */
  this._cssRenderer = null;

  /**
   * @type {THREE.Scene}
   * @private
   */
  this._scene = null;

  /**
   * @type {THREE.Scene}
   * @private
   */
  this._cssScene = null;

  /**
   * @type {THREE.Camera}
   * @private
   */
  this._camera = null;

  /**
   * @type {THREE.VRControls}
   * @private
   */
  this._vrControls = null;

  /**
   * @type {THREE.Mesh}
   * @private
   */
  this._projSphere = null;

  /**
   * @type {THREE.Mesh}
   * @private
   */
  this._progBarContainer = null;

  /**
   * @type {THREE.Mesh}
   * @private
   */
  this._progBar = null;

  /**
   * @type {Array.<THREE.Mesh>}
   * @private
   */
  this._markers = [];

  //endregion

  //region Panorama

  /**
   * @type {GSVPANO.PanoLoader}
   * @private
   */
  this._panoLoader = null;

  /**
   * @type {GSVPANO.PanoDepthLoader}
   * @private
   */
  this._panoDepthLoader = null;

  //endregion
};

//region helpers

/**
 * @param {number} angle
 * @returns {number}
 */
gls.StreetviewControl.angleRangeDeg = function(angle) {
  return gls.StreetviewControl.angleRange(angle, 360);
};

/**
 * @param {number} angle
 * @returns {number}
 */
gls.StreetviewControl.angleRangeRad = function(angle) {
  return gls.StreetviewControl.angleRange(angle, 2 * Math.PI);
};

/**
 * @param {number} angle
 * @param {number} max If rad, then 2PI. Otherwise, 360.
 * @returns {number}
 */
gls.StreetviewControl.angleRange = function(angle, max) {
  var times;
  if (angle < 0) {
    times = Math.ceil(-angle / max);
    angle += times * max;
  }
  return angle % max;
};

/**
 * @param {number} a
 * @param {number} b
 * @param {number} max If rad, then 2PI. Otherwise, 360.
 * @returns {number}
 */
gls.StreetviewControl.deltaAngle = function(a, b, max) {
  return Math.min(max - (Math.abs(a - b) % max), Math.abs(a - b) % max);
};

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
gls.StreetviewControl.deltaAngleDeg = function(a, b) {
  return gls.StreetviewControl.deltaAngle(a, b, 360);
};

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
gls.StreetviewControl.deltaAngleRad = function(a, b) {
  return gls.StreetviewControl.deltaAngle(a, b, 2 * Math.PI);
};

//endregion

//region properties

/**
 * @type {number}
 * @name gls.StreetviewControl#width
 */
gls.StreetviewControl.prototype.width;

/**
 * @type {number}
 * @name gls.StreetviewControl#height
 */
gls.StreetviewControl.prototype.height;

Object.defineProperties(gls.StreetviewControl.prototype, {
  'width': {
    get: /** @type {function (this:gls.StreetviewControl)} */ (function () {
      return this._options['width'];
    }),
    set: /** @type {function (this:gls.StreetviewControl)} */ (function (value) {
      this._options['width'] = value;
    })
  },
  'height': {
    get: /** @type {function (this:gls.StreetviewControl)} */ (function () {
      return this._options['height'];
    }),
    set: /** @type {function (this:gls.StreetviewControl)} */ (function (value) {
      this._options['height'] = value;
    })
  }
});

//endregion

gls.StreetviewControl.prototype.initWebGL = function() {
  var width = this['width'], height = this['height'];
  var placeholder = this._options['texturePlaceholderUrl'];

  /** @type {HTMLElement} */
  var element = this._options['element'];

  // create scenes
  this._scene = new THREE.Scene();
  this._cssScene = new THREE.Scene();

  // Create camera
  this._camera = new THREE.PerspectiveCamera(this._fov, width/height, this._near, this._far);
  this._camera.target = new THREE.Vector3(1, 0, 0);

  this._vrControls  = new THREE.VRControls(this._camera);

  this._scene.add(this._camera);

  // Add projection sphere
  this._projSphere = new THREE.Mesh(new THREE.SphereGeometry(this._projRadius, 512, 256, 0, Math.PI * 2, 0, Math.PI), new THREE.MeshBasicMaterial({ 'map': new THREE.TextureLoader().load(placeholder), 'side': THREE.DoubleSide}) );
  this._projSphere.geometry.dynamic = true;
  this._scene.add(this._projSphere);

  // Add Progress Bar
  this._progBarContainer = new THREE.Mesh(new THREE.BoxGeometry(1.2,0.2,0.1), new THREE.MeshBasicMaterial({'color': 0xaaaaaa}));
  this._progBarContainer.translateZ(-3);
  this._camera.add(this._progBarContainer);

  this._progBar = new THREE.Mesh(new THREE.BoxGeometry(1.0,0.1,0.1), new THREE.MeshBasicMaterial({'color': 0x0000ff}));
  this._progBar.translateZ(0.2);
  this._progBarContainer.add(this._progBar);

  // Create render
  this._renderer = new THREE.WebGLRenderer({'alpha':true});
  this._renderer.setSize(width, height);
  this._renderer.autoClearColor = false;
  this._renderer.domElement.style.zIndex = 1;

  // Overlap a CSS renderer over the GL renderer
  this._cssRenderer = new THREE.CSS3DRenderer();
  this._cssRenderer.setSize(width, height);
  this._cssRenderer.domElement.style.position = 'absolute';
  this._cssRenderer.domElement.style.top = 0;

  element.appendChild(this._renderer.domElement);
  element.appendChild(this._cssRenderer.domElement);

  // Lights
  var dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(100, 100, 50);
  this._scene.add(dirLight);
  this._scene.add(new THREE.AmbientLight(0x444444));
};

gls.StreetviewControl.prototype.initPano = function() {
  var self = this;
  this._panoLoader = new GSVPANO.PanoLoader();
  this._panoDepthLoader = new GSVPANO.PanoDepthLoader();
  this._panoLoader.setZoom(this._options['quality']);

  this._panoLoader.onProgress = function( progress ) {
    if (progress > 0) {
      self._progBar.visible = true;
      self._progBar.scale = new THREE.Vector3(progress/100.0,1,1);
    }
  };
  this._panoLoader.onPanoramaData = function(result) {
    self._progBarContainer.visible = true;
    self._progBar.visible = false;
  };

  this._panoLoader.onNoPanoramaData = function( status ) {
    //alert('no data!');
  };

  this._panoLoader.onPanoramaLoad = function() {
    var a = THREE.Math.degToRad(90 - self._panoLoader.heading);
    self._projSphere.quaternion.setFromEuler(new THREE.Euler(0, a, 0, 'YZX'));

    self._projSphere.material.wirewframe = false;
    self._projSphere.material.map.needsUpdate = true;
    self._projSphere.material.map = new THREE.Texture( this.canvas );
    self._projSphere.material.map.needsUpdate = true;

    self._progBarContainer.visible = false;
    self._progBar.visible = false;
  };
};

gls.StreetviewControl.prototype.loop = function() {
  window.requestAnimationFrame(gls.StreetviewControl.prototype.loop.bind(this));

  // Compute heading
  this._headingVector.setFromQuaternion(this._camera.quaternion, 'YZX');
  this._currHeading = gls.StreetviewControl.angleRangeDeg(THREE.Math.radToDeg(-this._headingVector.y));

  this._vrControls.update();

  // render
  this._renderer.render(this._scene, this._camera);
  this._cssRenderer.render(this._cssScene, this._camera);
};

gls.StreetviewControl.prototype.addMarker = function(there) {
  var here = this._options['location'];

  /*var dist = u.Geolocation.distanceBetween(here, there);*/

  var dlat = u.Geolocation.distanceBetween(here, {'lat':here['lat'] + 1, 'lng': here['lng']});
  var dlng = u.Geolocation.distanceBetween(here, {'lat':here['lat'], 'lng': here['lng'] + 1});

  var z = - this._distanceToRadius * dlat * (there['lat'] - here['lat']);
  var x = this._distanceToRadius * dlng * (there['lng'] - here['lng']);

  var self = this;

  /**
   * @type {{url: string, scale: {x: number, y: number, z: number}, rotation: {x: number, y: number, z: number}}}
   */
  var markerModel = this._options['markerModel'];

  var addMarker = function(geometry) {
    geometry.computeVertexNormals();
    geometry.mergeVertices();

    var marker = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ 'color': 0xe51c23, 'opacity': 1, 'alphaTest': 0, 'side': THREE.FrontSide}));

    marker.position.x = x;
    marker.position.y = 0;
    marker.position.z = z;
    marker.scale.x = markerModel['scale']['x'];
    marker.scale.y = markerModel['scale']['y'];
    marker.scale.z = markerModel['scale']['z'];

    marker.rotation.x = markerModel['rotation']['x'];
    marker.rotation.y = markerModel['rotation']['y'];
    marker.rotation.z = markerModel['rotation']['z'];
    self._scene.add(marker);
    self._markers.push(marker);
  };

  var markerUrl = markerModel['url'];
  var loader;
  if (markerUrl.lastIndexOf('.stl') == markerUrl.length - 4) {
    loader = new THREE.STLLoader();
  } else {
    loader = new THREE.JSONLoader();
  }

  loader.load(markerUrl, addMarker);
};

gls.StreetviewControl.prototype.run = function() {
  this.initWebGL();
  this.initPano();

  // Load default location
  this._panoLoader.load(new google.maps.LatLng(this._options['location']['lat'], this._options['location']['lng']));

  this.loop();
};
