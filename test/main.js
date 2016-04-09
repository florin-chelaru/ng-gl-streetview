/**
 * Created by Florin Chelaru ( florin [dot] chelaru [at] gmail [dot] com )
 * Date: 4/9/2016
 * Time: 9:51 AM
 */

goog.provide('gls.test');

goog.require('ngu');
goog.require('gls');

u.log.VERBOSE = 'info';

gls.test = angular.module('ng-gl-streetview-test', ['gls']);

function downloadGlStreetview() {
  return new Promise(function(resolve, reject) {
    var scripts;

    if (Modernizr.webgl) {
      scripts = [
        'bower_components/threejs/build/three.js',
        'bower_components/oculus-streetview/js/GSVPano_o.js',
        'bower_components/GSVPanoDepth/src/GSVPanoDepth.js',

        // For 3d marker; TODO: Also try an SVG marker and get rid of this library
        'bower_components/threejs/examples/js/loaders/STLLoader.js',

        // For loading html elements on the scene
        'bower_components/threejs/examples/js/renderers/CSS3DRenderer.js',

        // For updating the scene based on mouse, keyboard and device orientation
        'bower_components/threejs/examples/js/controls/VRControls.js',

        // Even though it's called a polyfill, this does all the work! TODO: But whenever available, we should use the actual VR manager.
        'bower_components/webvr-polyfill/build/webvr-polyfill.js',

        'src/gls/streetview-control.js'
      ];
    } else {
      scripts = [
        //'test/script-nowebgl.js'
      ];
    }

    scripts.map(function(src) { return '../' + src; }).forEach(function(src, i) {
      var script = document.createElement('script');
      script.src = src;
      script.async = false; // this is so they execute in order

      if (i == scripts.length - 1) {
        script.onload = resolve;
      }

      document.head.appendChild(script);
    });

    if (!scripts.length) {
      resolve();
    }
  });
}

gls.test.run(['$rootScope', function($rootScope) {
  downloadGlStreetview().then(function() {
    $rootScope['glStreetviewLoaded'] = true;
    if (!$rootScope.$$phase) {
      $rootScope.$apply();
    }
  });
}]);

gls.test.controller('myController', ['$scope', function($scope) {
  $scope.marker = {
    'url': 'raindrop.stl',
    'rotation': {
      'x': Math.PI / 2,
      'y': 0,
      'z': 0
    },
    'scale': {
      'x': 0.05,
      'y': 0.05,
      'z': 0.05
    }
  };
}]);
