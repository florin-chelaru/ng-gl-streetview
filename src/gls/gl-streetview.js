/**
 * Created by Florin Chelaru ( florin [dot] chelaru [at] gmail [dot] com )
 * Date: 4/8/2016
 * Time: 9:21 PM
 */

goog.provide('gls.GlStreetview');

goog.require('ngu.Directive');

/**
 * @param {angular.Scope} $scope
 * @constructor
 * @extends {ngu.Directive}
 */
gls.GlStreetview = function ($scope) {
  ngu.Directive.apply(this, arguments);
};

goog.inherits(gls.GlStreetview, ngu.Directive);

/**
 * @param {angular.Scope} $scope
 * @param {jQuery} $element
 * @param {angular.Attributes} $attrs
 * @override
 */
gls.GlStreetview.prototype.link = function ($scope, $element, $attrs) {
  if (!gls.StreetviewControl) {
    $element.append('<div>WebGL not supported</div>');
    return;
  }
  var ctrl = new gls.StreetviewControl({
    'element': $element[0],
    'width': 1024,
    'height': 512,
    'quality': 3,
    'location': {'lat':42.337692, 'lng':-71.144215},
    'texturePlaceholderUrl': $attrs['glsPlaceholder'],
    'markerModel': $scope['marker']
  });
  ctrl.run();
  ctrl.addMarker({lat: 42.338464, lng:-71.144399});
};

gls.GlStreetview['options'] = {
  'scope': {
    'marker': '=glsMarker'
  }
};
