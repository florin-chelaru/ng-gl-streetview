/**
 * Created by Florin Chelaru ( florin [dot] chelaru [at] gmail [dot] com )
 * Date: 4/8/2016
 * Time: 9:19 PM
 */

goog.provide('gls');

goog.require('ngu');

goog.require('gls.GlStreetview');

gls.main = angular.module('gls', ['ngu']);

gls.main.directive('glStreetview', [function() {
  return ngu.Directive.createNew('glStreetview', /** @type {function(new: ngu.Directive)} */ (gls.GlStreetview), arguments, {restrict: 'A'});
}]);
