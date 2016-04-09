/**
 * Created by Florin Chelaru ( florin [dot] chelaru [at] gmail [dot] com )
 * Date: 4/8/2016
 * Time: 9:35 PM
 */

goog.provide('gls.StreetviewControl');

/**
 * @param {{width: number, height: number, quality: number, location: {lat:number, lng:number}, texturePlaceholderUrl: string}} [options]
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

  //endregion

  /**
   * @type {{width: number, height: number, quality: number, location: {lat: number, lng: number}}}
   * @private
   */
  this._options = options;

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
  this._controls = null;

  /**
   * @type {THREE.Mesh}
   * @private
   */
  this._projSphere = null;
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

gls.StreetviewControl.prototype.initWebGL = function() {
  var width = this['width'], height = this['height'];
  var placeholder = this._options['texturePlaceholderUrl'];

  // create scenes
  this._scene = new THREE.Scene();
  this._cssScene = new THREE.Scene();

  // Create camera
  this._camera = new THREE.PerspectiveCamera(this._fov, width/height, this._near, this._far);
  this._camera.target = new THREE.Vector3(1, 0, 0);

  this._controls  = new THREE.VRControls(this._camera);

  this._scene.add(this._camera);

  // Add projection sphere
  this._projSphere = new THREE.Mesh(new THREE.SphereGeometry(500, 512, 256, 0, Math.PI * 2, 0, Math.PI), new THREE.MeshBasicMaterial({ 'map': THREE.ImageUtils.loadTexture(placeholder), 'side': THREE.DoubleSide}) );
  this._projSphere.geometry.dynamic = true;
  this._scene.add(this._projSphere);


  // TODO: AICI
  // Add Progress Bar
  progBarContainer = new THREE.Mesh( new THREE.BoxGeometry(1.2,0.2,0.1), new THREE.MeshBasicMaterial({color: 0xaaaaaa}));
  progBarContainer.translateZ(-3);
  this._camera.add( progBarContainer );

  progBar = new THREE.Mesh( new THREE.BoxGeometry(1.0,0.1,0.1), new THREE.MeshBasicMaterial({color: 0x0000ff}));
  progBar.translateZ(0.2);
  progBarContainer.add(progBar);

  // Create render
  try {
    renderer = new THREE.WebGLRenderer({alpha:true});
    /*renderer.setClearColor(0xECF8FF);
     renderer.setPixelRatio(window.devicePixelRatio);
     renderer.setSize(window.innerWidth, window.innerHeight);
     renderer.domElement.style.position = 'absolute';
     renderer.domElement.style.zIndex = 1;
     renderer.domElement.style.top = 0;*/

    cssRenderer = new THREE.CSS3DRenderer();
    cssRenderer.setSize(window.innerWidth, window.innerHeight);
    cssRenderer.domElement.style.position = 'absolute';
    renderer.domElement.style.zIndex = 1;
    cssRenderer.domElement.style.top = 0;
  }
  catch(e){
    alert('This application needs WebGL enabled!');
    return false;
  }

  renderer.autoClearColor = false;
  renderer.setSize( WIDTH, HEIGHT );

  // effect = new THREE.VREffect( renderer );
  // effect.setSize(WIDTH, HEIGHT );

  //vrmgr = new WebVRManager(effect);

  var viewer = $('#viewer');
  viewer.append(renderer.domElement);
  viewer.append(cssRenderer.domElement);

  /*var light = new THREE.PointLight( 0xff0000, 1, 100 );
   light.position.set( 50, 50, 50 );
   this._scene.add( light );*/

  var ambientLight = new THREE.AmbientLight( 0x444444 );
  this._scene.add( ambientLight );

  /*var lights = [];
   lights[0] = new THREE.PointLight( 0xffffff, 0.5, 0 );
   lights[1] = new THREE.PointLight( 0xffffff, 0.5, 0 );
   lights[2] = new THREE.PointLight( 0xffffff, 0.5, 0 );

   lights[0].position.set( 0, 200, 0 );
   lights[1].position.set( 100, 200, 100 );
   lights[2].position.set( -100, -200, -100 );

   this._scene.add( lights[0] );
   this._scene.add( lights[1] );
   this._scene.add( lights[2] );*/

  var dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(100, 100, 50);
  this._scene.add(dirLight);


  var l = DEFAULT_LOCATION;
  //var l1 = {lat: 42.338187, lng:-71.144345};
  var l1 = {lat: 42.338464, lng:-71.144399};
  //var d = Math.sqrt(Math.pow(l1.lat - l.lat, 2) + Math.pow(l1.lng - l.lng, 2));

  var g = new Geolocation(l.lat, l.lng, 0);
  var g1 = new Geolocation(l1.lat, l1.lng, 0);
  var d = g.distanceTo(g1);

  var dlat = g.distanceTo(new Geolocation(g.lat+1, g.lng));
  var dlng = g.distanceTo(new Geolocation(g.lat, g.lng+1));

  var dist2Rad = 1;
  console.log(d * dist2Rad);
  var z = - dist2Rad * dlat * (g1.lat - g.lat);
  var x = dist2Rad * dlng * (g1.lng - g.lng);


  /*var object = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff, opacity: 0.5 } ) );
   object.position.x = x;
   object.position.y = 0;
   object.position.z = z;
   object.scale.x = 1;
   object.scale.y = 1;
   object.scale.z = 1;
   object.rotation.x = Math.random() * 2 * Math.PI;
   object.rotation.y = Math.random() * 2 * Math.PI;
   object.rotation.z = Math.random() * 2 * Math.PI;
   this._scene.add( object );
   objects.push( object );*/

  //var loader = new THREE.JSONLoader();
  var loader = new THREE.STLLoader();

  var self = this;
  var createMesh = function( geometry )
  {
    geometry.computeVertexNormals();
    geometry.mergeVertices();
    //var zmesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial() );
    //var zmesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff, opacity: 0.5 } ) );
    //var zmesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0xff0000, opacity: 0.9, specular: 0x009900, shininess: 0, shading: THREE.FlatShading } ) );
    var zmesh = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: 0xe51c23, opacity: 1, alphaTest: 0, side: THREE.FrontSide} ) );

    //zmesh.position.set( x, 0, z );
    zmesh.position.x = x;
    zmesh.position.y = 0;
    zmesh.position.z = z;
    zmesh.scale.x = 0.05;
    zmesh.scale.y = 0.05;
    zmesh.scale.z = 0.05;

    zmesh.rotation.x = Math.PI / 2;
    // zmesh.scale.set( 3, 3, 3 );
    //zmesh.overdraw = true;
    self._scene.add( zmesh );
    objects.push(zmesh);
  };

  //loader.load( "js/stickfigure2.js", createMesh );
  loader.load( "js/Raindrop.stl", createMesh.bind(this) );

  /*var material = new THREE.MeshBasicMaterial({ wireframe: true, color: 0xff0000 });
   //var material = new THREE.MeshLambertMaterial( { color: 0xe51c23, opacity: 1, alphaTest: 0, side: THREE.FrontSide} )
   var geometry = new THREE.PlaneGeometry(50, 50, 50, 50);
   var planeMesh= new THREE.Mesh( geometry, material );

   planeMesh.position.x = x;
   planeMesh.position.y = 0;
   planeMesh.position.z = z;
   planeMesh.scale.x = 1;
   planeMesh.scale.y = 1;
   planeMesh.scale.z = 1;

   planeMesh.rotation.x = Math.PI / 3;
   planeMesh.rotation.y = Math.PI / 3;
   planeMesh.rotation.z = Math.PI / 3;*/

// add it to the WebGL scene
  /*this._scene.add(planeMesh);
   objects.push(planeMesh);*/

  /*var element = document.createElement( 'img' );
   element.src = 'isocreator_scr2.jpg';
   // create the object3d for this element
   var cssObject = new THREE.CSS3DObject( element );
   cssObject.scale.x = 0.1;
   cssObject.scale.y = 0.1;
   cssObject.scale.z = 0.1;
   cssObject.position.x = x;
   cssObject.position.y = 20;
   cssObject.position.z = z;
   // add it to the css scene
   this._cssScene.add(cssObject);*/
  /*objects.push(cssObject);*/

  /*var html = [
   '<div style="width:' + 1280 + 'px; height:' + 1024 + 'px;">',
   '<iframe src="' + 'https://www.twinfog.com' + '" width="' + 1280 + '" height="' + 1024 + '">',
   '</iframe>',
   '</div>'
   ].join('\n');
   var div = document.createElement('div');
   $(div).html(html);
   var cssObject = new THREE.CSS3DObject(div);
   cssObject.position.x = 0;
   cssObject.position.y = 0;
   cssObject.position.z = -200;
   /!*cssObject.rotation.x = Math.PI / 3;
   cssObject.rotation.y = Math.PI / 3;
   cssObject.rotation.z = Math.PI / 3;*!/
   cssObject.scale.x = 0.1;
   cssObject.scale.y = 0.1;
   cssObject.scale.z = 0.1;
   this._cssScene.add(cssObject);*/

  /*var rendererCSS	= new THREE.CSS3DRenderer();
   rendererCSS.setSize( window.innerWidth, window.innerHeight );
   rendererCSS.domElement.style.position	= 'absolute';
   rendererCSS.domElement.style.top	= 0;
   rendererCSS.domElement.style.margin	= 0;
   rendererCSS.domElement.style.padding	= 0;
   document.body.appendChild( rendererCSS.domElement );*/

  //THREE.WindowResize.bind(rendererCSS, world.this._camera().get(0));

  /*for ( var i = 0; i < 10; i ++ ) {

   var object = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff, opacity: 0.5 } ) );
   object.position.x = Math.random() * 800 - 400;
   object.position.y = Math.random() * 800 - 400;
   object.position.z = Math.random() * 800 - 400;

   object.scale.x = Math.random() * 2 + 1;
   object.scale.y = Math.random() * 2 + 1;
   object.scale.z = Math.random() * 2 + 1;

   object.rotation.x = Math.random() * 2 * Math.PI;
   object.rotation.y = Math.random() * 2 * Math.PI;
   object.rotation.z = Math.random() * 2 * Math.PI;

   this._scene.add( object );

   objects.push( object );

   }*/
}
