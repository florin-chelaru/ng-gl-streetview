/**
 * Created by Florin Chelaru ( florin [dot] chelaru [at] gmail [dot] com )
 * Date: 4/9/2016
 * Time: 12:02 PM
 */

var GSVPANO = {};

/**
 * @param [parameters]
 * @constructor
 */
GSVPANO.PanoLoader = function (parameters) {};

GSVPANO.PanoLoader.prototype.setProgress = function (p) {};
GSVPANO.PanoLoader.prototype.throwError = function (message) {};
GSVPANO.PanoLoader.prototype.adaptTextureToZoom = function () {};
GSVPANO.PanoLoader.prototype.composeFromTile = function (x, y, texture) {};
GSVPANO.PanoLoader.prototype.composePanorama = function (cache) {};
GSVPANO.PanoLoader.prototype.loadCB = function (result, status, location, cache) {};
GSVPANO.PanoLoader.prototype.load = function (location, cache) {};
GSVPANO.PanoLoader.prototype.setZoom = function( z ) {};
GSVPANO.PanoLoader.prototype.onProgress = function(progress) {};
GSVPANO.PanoLoader.prototype.onPanoramaData = function(data) {};
GSVPANO.PanoLoader.prototype.onNoPanoramaData = function(status) {};
GSVPANO.PanoLoader.prototype.onNoPanoramaLoad = function() {};
GSVPANO.PanoLoader.prototype.heading = 0;


/**
 * @param [parameters]
 * @constructor
 */
GSVPANO.PanoDepthLoader = function (parameters) {};
GSVPANO.PanoDepthLoader.prototype.load = function(panoId) {};
GSVPANO.PanoDepthLoader.prototype.decode = function(rawDepthMap) {};
GSVPANO.PanoDepthLoader.prototype.parseHeader = function(depthMap) {};
GSVPANO.PanoDepthLoader.prototype.parsePlanes = function(header, depthMap) {};
GSVPANO.PanoDepthLoader.prototype.computeDepthMap = function(header, indices, planes) {};
GSVPANO.PanoDepthLoader.prototype.parse = function(depthMap) {};
GSVPANO.PanoDepthLoader.prototype.createEmptyDepthMap = function() {};
