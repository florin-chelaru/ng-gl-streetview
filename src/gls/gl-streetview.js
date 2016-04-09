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
  $element.append('<div>Hello</div>');
};
