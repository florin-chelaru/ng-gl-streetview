var u = {};

/**
 * @param {string} message
 * @param {Error} [innerException]
 * @constructor
 * @extends Error
 */
u.Exception = function(message, innerException) {};

/**
 * @param {string} message
 * @param {Error} [innerException]
 * @constructor
 * @extends u.Exception
 */
u.UnimplementedException = function(message, innerException) {};

u.array = {};

/**
 * @param {Arguments|Array} args
 * @returns {Array}
 */
u.array.fromArguments = function(args) {};

/**
 * Creates an array of length n filled with value
 * @param {number} n
 * @param {*} value
 * @returns {Array}
 */
u.array.fill = function(n, value) {};

/**
 * Generates an array of consecutive numbers starting from start, or 0 if it's not defined
 * @param {number} n
 * @param {number} [start]
 * @returns {Array.<number>}
 */
u.array.range = function(n, start) {};

/**
 * Returns a new array where all elements are unique
 * Complexity is suboptimal: O(n^2); for strings and numbers,
 * it can be done faster, using a map
 * @param {Array} arr
 * @param {function(*,*): boolean} [equals]
 * @returns {Array}
 */
u.array.unique = function(arr, equals) {};

/**
 * @param {Array.<string|number>} arr
 * @returns {Array.<string|number>}
 */
u.array.uniqueFast = function(arr) {};

/**
 * @param {Array} arr
 * @param {function(*): (string|number)} key
 * @returns {Array}
 */
u.array.uniqueKey = function(arr, key) {};

/**
 * @param {Array} arr
 * @param {function(*, number):boolean} predicate
 * @param {*} [thisArg]
 * @returns {number}
 */
u.array.indexOf = function(arr, predicate, thisArg) {};

/**
 * @param {number} lat
 * @param {number} lng
 * @param {number} [accuracy=0] The accuracy level of the latitude and longitude coordinates. It is specified in units and
 *   must be supported by all implementations. The value of the accuracy attribute must be a non-negative real number.
 * @param {u.Geolocation.Unit} [unit]
 * @param {number} [zoom] Google Maps zoom level
 * @param {number} [range] Radius in units around center; not to be confused with accuracy!
 * @param {number} [alt] In units. The height of the position, specified in units above the [WGS84] ellipsoid. If the
 *   implementation cannot provide altitude information, the value of this attribute must be null.
 * @param {number} [altAccuracy] In units. If the implementation cannot provide altitude information, the value of this
 *   attribute must be null. Otherwise, the value of the altitudeAccuracy attribute must be a non-negative real number.
 * @param {number} [heading] The direction of travel of the hosting device and is specified in degrees,
 *   where 0� ? heading < 360�, counting clockwise relative to the true north. If the implementation cannot provide
 *   heading information, the value of this attribute must be null. If the hosting device is stationary (i.e. the value
 *   of the speed attribute is 0), then the value of the heading attribute must be NaN.
 * @param {number} [speed] Denotes the magnitude of the horizontal component of the hosting device's current velocity
 *   and is specified in units per second. If the implementation cannot provide speed information, the value of this
 *   attribute must be null. Otherwise, the value of the speed attribute must be a non-negative real number.
 * @constructor
 */
u.Geolocation = function (lat, lng, accuracy, unit, zoom, range, alt, altAccuracy, heading, speed) {};

/**
 * @param {u.Geolocation} [other]
 * @returns {boolean}
 */
u.Geolocation.prototype.equals = function(other) {};

/**
 * @returns {u.Geolocation}
 */
u.Geolocation.prototype.copy = function() {};

/**
 * @license MIT License http://www.movable-type.co.uk/scripts/latlong.html
 */
/**
 * Returns the distance from ‘this’ point to destination point (using haversine formula).
 *
 * @param   {u.Geolocation|{lat: number, lng: number}} point - Latitude/longitude of destination point.
 * @param   {number} [radius=6371e3] - (Mean) radius of earth (defaults to radius in metres).
 * @returns {number} Distance between this point and destination point, in same units as radius (meters by default).
 *
 * @example
 *     var p1 = new LatLon(52.205, 0.119);
 *     var p2 = new LatLon(48.857, 2.351);
 *     var d = p1.distanceTo(p2); // 404.3 km
 */
u.Geolocation.prototype.distanceTo = function(point, radius) {};

/**
 * FIXME: Untested
 * Returns the destination point from ‘this’ point having travelled the given distance on the
 * given initial bearing (bearing normally varies around path followed).
 *
 * @param   {number} distance - Distance travelled, in same units as earth radius (default: metres).
 * @param   {number} bearing - Initial bearing in degrees from north.
 * @param   {number} [radius=6371e3] - (Mean) radius of earth (defaults to radius in metres).
 * @returns {u.Geolocation} Destination point.
 *
 * @example
 *     var p1 = new LatLon(51.4778, -0.0015);
 *     var p2 = p1.destinationPoint(7794, 300.7); // 51.5135°N, 000.0983°W
 */
u.Geolocation.prototype.destinationPoint = function(distance, bearing, radius) {};

/**
 * FIXME: Untested
 * @param {number} dist
 * @param {u.Geolocation.Unit} [unit]
 * @returns {{sw: u.Geolocation, ne:u.Geolocation}}
 */
u.Geolocation.prototype.boundingBox = function(dist, unit) {};

/**
 * @license MIT License http://www.movable-type.co.uk/scripts/latlong.html
 */
/**
 * Computes the distance between the two given locations (using haversine formula) in meters.
 * @param {{lat: number, lng: number}} l1
 * @param {{lat: number, lng: number}} l2
 * @returns {number}
 */
u.Geolocation.distanceBetween = function(l1, l2) {};

/**
 * FIXME: Untested
 * Earth radius at a given lat, according to the WGS-84 ellipsoid figure
 * @param {number} lat The lat of the coordinate.
 * @param {u.Geolocation.Unit} [unit]
 */
u.Geolocation.getEarthRadiusWGS84 = function(lat, unit) {};

/**
 * FIXME: Untested
 * @param {u.Geolocation} location
 * @param {u.Geolocation.Unit} unit
 * @returns {u.Geolocation}
 */
u.Geolocation.convert = function(location, unit) {};

/**
 * FIXME: Untested
 * @param {number} units
 * @param {u.Geolocation.Unit} fromUnit
 * @param {u.Geolocation.Unit} toUnit
 * @returns {number}
 */
u.Geolocation.convertUnits = function(units, fromUnit, toUnit) {};

/**
 * FIXME: Untested
 * @param {number} pixels
 * @param {number} lat
 * @param {number} zoom
 * @param {u.Geolocation.Unit} [unit]
 * @returns {number}
 */
u.Geolocation.googleMapPixels2Distance = function(pixels, lat, zoom, unit) {};

/**
 * FIXME: Untested
 * @param {number} meters
 * @param {number} pixels
 * @param {number} lat
 * @returns {number}
 */
u.Geolocation.googleMapMetersPixels2Zoom = function(meters, pixels, lat) {};

/** @const {number} */
u.Geolocation.M2KM = 0.001;

/** @const {number} */
u.Geolocation.KM2M = 1000.0;

/** @const {number} */
u.Geolocation.M2MI = 0.000621371192237334;

/** @const {number} */
u.Geolocation.MI2M = 1609.3439999999999;

/** @const {number} */
u.Geolocation.M2FT = 3.28084;

/** @const {number} */
u.Geolocation.FT2M = 0.3048;

/** @const {number} */
u.Geolocation.KM2MI = u.Geolocation.KM2M * u.Geolocation.M2MI;

/** @const {number} */
u.Geolocation.MI2KM = u.Geolocation.MI2M * u.Geolocation.M2KM;

/** @const {number} */
u.Geolocation.KM2FT = u.Geolocation.KM2M * u.Geolocation.M2FT;

/** @const {number} */
u.Geolocation.FT2KM = u.Geolocation.FT2M * u.Geolocation.M2KM;

/** @const {number} */
u.Geolocation.MI2FT = 5280;

/** @const {number} */
u.Geolocation.FT2MI = 0.000189394;

/**
 * @const {Object.<u.Geolocation.Unit, Object.<u.Geolocation.Unit, number>>}
 */
u.Geolocation.CONVERSION_TABLE = {
  '2': {
    '2': 1,
    '1': u.Geolocation.M2KM,
    '0': u.Geolocation.M2MI,
    '3': u.Geolocation.M2FT
  },
  '1': {
    '2': u.Geolocation.KM2M,
    '1': 1,
    '0': u.Geolocation.KM2MI,
    '3': u.Geolocation.KM2FT
  },
  '0': {
    '2': u.Geolocation.MI2M,
    '1': u.Geolocation.MI2KM,
    '0': 1,
    '3': u.Geolocation.MI2FT
  },
  '3': {
    '2': u.Geolocation.FT2M,
    '1': u.Geolocation.FT2KM,
    '0': u.Geolocation.FT2MI,
    '3': 1
  }
};

/**
 * @const {Object.<u.Geolocation.UnitName, Object.<u.Geolocation.UnitName, number>>}
 */
u.Geolocation.CONVERSION_TABLE_S = {
  'm': {
    'm': 1,
    'km': u.Geolocation.M2KM,
    'mi': u.Geolocation.M2MI,
    'ft': u.Geolocation.M2FT
  },
  'km': {
    'm': u.Geolocation.KM2M,
    'km': 1,
    'mi': u.Geolocation.KM2MI,
    'ft': u.Geolocation.KM2FT
  },
  'mi': {
    'm': u.Geolocation.MI2M,
    'km': u.Geolocation.MI2KM,
    'mi': 1,
    'ft': u.Geolocation.MI2FT
  },
  'ft': {
    'm': u.Geolocation.FT2M,
    'km': u.Geolocation.FT2KM,
    'mi': u.Geolocation.FT2MI,
    'ft': 1
  }
};

/**
 * @enum {number}
 */
u.Geolocation.Unit = {
  'MI': 0,
  'KM': 1,
  'M': 2,
  'FT': 3
};

/**
 * @enum {string}
 */
u.Geolocation.UnitName = {
  '0': 'mi',
  '1': 'km',
  '2': 'm',
  '3': 'ft'
};

/**
 * @enum {string}
 */
u.Geolocation.UnitLongNameSg = {
  '0': 'mile',
  '1': 'kilometer',
  '2': 'meter',
  '3': 'foot'
};

/**
 * @enum {string}
 */
u.Geolocation.UnitLongNamePl = {
  '0': 'miles',
  '1': 'kilometers',
  '2': 'meters',
  '3': 'feet'
};


u.math = {};

/**
 * @param {number} x
 * @param {number} precision
 * @returns {number}
 */
u.math.floorPrecision = function(x, precision) {};

/**
 * Lightweight linear scale function for use outside the DOM (as opposed to d3.scale.linear
 * @param {Array.<number>} domain An array with exactly two arguments: lower and upper bound of the range
 * @param {Array.<number>} range An array with exactly two arguments: lower and upper bound of the range
 * @returns {function(number): number}
 */
u.math.scaleLinear = function(domain, range) {};

/**
 * @param {number} deg
 * @returns {number}
 */
u.math.deg2rad = function(deg) {};

/**
 * @param {number} rad
 * @returns {number}
 */
u.math.rad2deg = function(rad) {};

/**
 * @param {string} message
 * @param {Error} [innerException]
 * @constructor
 * @extends u.Exception
 */
u.AbstractMethodException = function(message, innerException) {};

u.string = {};

/**
 * @param {string} text
 * @returns {string}
 */
u.string.capitalizeFirstLetter = function (text) {};

/**
 * @param {function(T)} callback
 * @param {Object} [thisArg]
 * @constructor
 * @template T
 */
u.EventListener = function(callback, thisArg) {};

/**
 * @param {T} [args]
 */
u.EventListener.prototype.fire = function(args) {};

/**
 * @type {number}
 * @name u.EventListener#id
 */
u.EventListener.prototype.id;

/**
 * @param {{synchronous: (boolean|undefined), timeout: (function(Function, number, ...)|undefined)}} [options]
 * @constructor
 * @template T
 */
u.Event = function(options) {};

/**
 * @type {function(Function, number, ...)}
 */
u.Event.TIMEOUT;

/**
 * @type {boolean}
 * @name u.Event#synchronous
 */
u.Event.prototype.synchronous;

/**
 * @type {boolean}
 * @name u.Event#firing
 */
u.Event.prototype.firing;

/**
 * Gets the number of listeners register for the event
 * @type {number}
 * @name u.Event#count
 */
u.Event.prototype.count;

/**
 * @param {u.EventListener.<T>|function(T)} listener
 * @param {Object} [thisArg]
 * @returns {u.EventListener.<T>}
 */
u.Event.prototype.addListener = function(listener, thisArg) {};

/**
 * @param {u.EventListener.<T>} listener
 */
u.Event.prototype.removeListener = function(listener) {};

/**
 * @param {T} [args]
 */
u.Event.prototype.fire = function(args) {};

u.reflection = {};

/**
 * @param {string} message
 * @param {Error} [innerException]
 * @constructor
 * @extends u.Exception
 */
u.reflection.ReflectionException = function(message, innerException) {};

/**
 * Evaluates the given string into a constructor for a type
 * @param {string} typeName
 * @param {Object} [context]
 * @returns {function(new: T)}
 * @template T
 */
u.reflection.evaluateFullyQualifiedTypeName = function(typeName, context) {};

/**
 * Applies the given constructor to the given parameters and creates
 * a new instance of the class it defines
 * @param {function(new: T)} ctor
 * @param {Array|Arguments} params
 * @returns {T}
 * @template T
 */
u.reflection.applyConstructor = function(ctor, params) {};

/**
 * Wraps given type around the given object, so the object's prototype matches the one of the type
 * @param {Object} o
 * @param {function(new: T)} type
 * @returns {T}
 * @template T
 */
u.reflection.wrap = function(o, type) {};

u.async = {};

/**
 * @param {Array.<function(): Promise>} jobs
 * @param {boolean} [inOrder] If true, the jobs are executed in order, otherwise, in parallel
 * @returns {Promise}
 */
u.async.all = function(jobs, inOrder) {};

/**
 * @param {number} n
 * @param {function(number, (number|undefined)): Promise} iteration
 * @param {boolean} [inOrder]
 * @returns {Promise}
 */
u.async.for = function(n, iteration, inOrder) {};

/**
 * @param {function(number): Promise} iteration
 * @returns {Promise}
 */
u.async.do = function(iteration) {};

/**
 * @param {Array.<T>} items
 * @param {function(T, number): Promise} iteration
 * @param {boolean} [inOrder]
 * @returns {Promise}
 * @template T
 */
u.async.each = function(items, iteration, inOrder) {};

/**
 * @constructor
 * @template T
 */
u.async.Deferred = function() {};

/**
 * @param {T} [value]
 */
u.async.Deferred.prototype.resolve = function(value) {};

/**
 * @param {*} [reason]
 */
u.async.Deferred.prototype.reject = function(reason) {};

/**
 * @param {function((T|undefined))} [onFulfilled]
 * @param {function(*)} [onRejected]
 * @returns {Promise}
 */
u.async.Deferred.prototype.then = function(onFulfilled, onRejected) {};

/**
 * @param {function(*)} onRejected
 * @returns {Promise}
 */
u.async.Deferred.prototype.catch = function(onRejected) {};

u.log = {};

/**
 * @param {...} args
 */
u.log.info = function(args) {};

/**
 * @param {...} args
 */
u.log.warn = function(args) {};

/**
 * @param {...} args
 */
u.log.error = function(args) {};

/**
 * @param {Array|Object.<number|string, *>} obj
 * @param {function((number|string), *)|Function} callback
 * @returns {Array|Object}
 */
u.each = function(obj, callback) {};

/**
 * @param {Array.<T>|Object.<number|string, T>} obj
 * @param {function(T, (number|string|undefined)): V} callback
 * @param {Object} [thisArg]
 * @returns {Array.<V>}
 * @template T, V
 */
u.map = function(obj, callback, thisArg) {};

/**
 * Makes a shallow copy of the given object or array
 * @param {Object|Array} obj
 * @returns {Object|Array}
 */
u.copy = function(obj) {};

/**
 * @param {Array.<T>} arr
 * @param {function(T): {key: (string|number), value: *}} callback
 * @returns {Object.<(string|number), *>}
 * @template T
 */
u.mapToObject = function(arr, callback) {};

/**
 * Extends the properties of dst with those of the other arguments of the function;
 * values corresponding to common keys are overriden.
 * @param {Object} dst
 * @param {...Object} src
 * @returns {Object}
 */
u.extend = function(dst, src) {};

/**
 * @param {number} size
 * @returns {string}
 */
u.generatePseudoGUID = function(size) {};

/**
 * Lightweight version of ajax GET request with minimal error handling
 * @param {string} uri
 * @returns {Promise}
 */
u.httpGet = function(uri) {};

/**
 * @param {{uri: (string|undefined), content: (string|undefined)}} opts
 * @returns {Promise} Promise.<Object.<string, string>>
 */
u.parseLessConsts = function(opts) {};

/**
 * Forces browser to reflow element that was previously hidden (display: none), so that transitions like
 * fade or transform can be applied to it
 * @param {HTMLElement} element
 * @returns {number}
 */
u.reflowForTransition = function(element) {};

/**
 * @license Ryan ryan@mazondo.com (MIT License)
 * @param {string} email
 * @param {{size: (string|number|undefined), rating: (string|undefined), secure: (string|boolean|undefined), backup: (string|undefined)}} options
 * @returns {string}
 */
u.gravatar = function(email, options) {};

/**
 * For more details, see: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
 * @param {string} hex
 * @returns {{r:number, g:number, b:number}}
 */
u.hex2rgb = function(hex) {};

/**
 * For more details, see: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {string}
 */
u.rgb2hex = function(r, g, b) {};

/**
 * @param {string} hex
 * @param {number} [alpha]
 * @returns {string}
 */
u.hex2rgba = function(hex, alpha) {};


/**
 * Copyright (c) 2009-2016, Alexis Sellier <self@cloudhead.net>
 * See for details: https://github.com/less/less.js
 * @param {string} hex
 * @returns {{h: number, s: number, l: number}}
 */
u.hex2hsl = function(hex) {};

/**
 * Copyright (c) 2009-2016, Alexis Sellier <self@cloudhead.net>
 * See for details: https://github.com/less/less.js
 * @param {{h:number, s:number, l:number}} hsl
 * @returns {{r: number, g: number, b: number}}
 */
u.hsl2rgb = function(hsl) {};

/**
 * @param {{h:number, s:number, l:number}} hsl
 * @returns {string}
 */
u.hsl2hex = function(hsl) {};

/**
 * Copyright (c) 2009-2016, Alexis Sellier <self@cloudhead.net>
 * See for details: https://github.com/less/less.js
 * @param {string} hex
 * @param {number} pc Percent
 * @returns {string}
 */
u.lighten = function (hex, pc) {};

/**
 * Copyright (c) 2009-2016, Alexis Sellier <self@cloudhead.net>
 * See for details: https://github.com/less/less.js
 * @param {string} hex
 * @param {number} pc Percent
 * @returns {string}
 */
u.darken = function (hex, pc) {};



/**
 * @param {number} milliseconds Must be positive
 * @constructor
 */
u.TimeSpan = function(milliseconds) {};

/**
 * @returns {number}
 */
u.TimeSpan.prototype.days = function() {};

/**
 * @returns {number}
 */
u.TimeSpan.prototype.hours = function() {};

/**
 * @returns {number}
 */
u.TimeSpan.prototype.minutes = function() {};

/**
 * @returns {number}
 */
u.TimeSpan.prototype.seconds = function() {};

/**
 * @returns {number}
 */
u.TimeSpan.prototype.milliseconds = function() {};

/**
 * @returns {number}
 */
u.TimeSpan.prototype.totalDays = function() {};

/**
 * @returns {number}
 */
u.TimeSpan.prototype.totalHours = function() {};

/**
 * @returns {number}
 */
u.TimeSpan.prototype.totalMinutes = function() {};

/**
 * @returns {number}
 */
u.TimeSpan.prototype.totalSeconds = function() {};

/**
 * @returns {number}
 */
u.TimeSpan.prototype.totalMilliseconds = function() {};

/**
 * @override
 * @returns {string}
 */
u.TimeSpan.prototype.toString = function() {};

/**
 * @param {number} x Offset
 * @param {number} y Offset
 * @param {number} w Width
 * @param {number} h Height
 * @param {number} minQuadrantRatio
 * @param {number} maxQuadrantCapacity
 * @constructor
 */
u.QuadTree = function(x, y, w, h, minQuadrantRatio, maxQuadrantCapacity) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {*} [value]
 */
u.QuadTree.prototype.insert = function(x, y, w, h, value) {};

/**
 * @param {number} x
 * @param {number} y
 * @returns {Array.<{x: number, y: number, w: number, h: number, value: *}>}
 */
u.QuadTree.prototype.collisions = function(x, y) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @returns {Array.<{x: number, y: number, w: number, h: number, value: *}>}
 */
u.QuadTree.prototype.overlaps = function(x, y, w, h) {};

/**
 * @returns {Array.<{x: number, y: number, w: number, h: number, items: Array}>}
 */
u.QuadTree.prototype.leaves = function() {};

/**
 * @returns {Array}
 */
u.QuadTree.prototype.values = function() {};

/**
 * @returns {Array.<{x: number, y: number, w: number, h: number, value: *}>}
 */
u.QuadTree.prototype.items = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} size
 * @param {u.QuadTree.Node} [parent]
 * @constructor
 */
u.QuadTree.Node = function(x, y, size, parent) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {*} [value]
 * @constructor
 */
u.QuadTree.Item = function(x, y, w, h, value) {};

u.fast = {};

/**
 * @param {Array} arr
 * @param {function(*, (number|undefined)): *|Function} callback
 * @returns {!Array}
 */
u.fast.map = function(arr, callback) {};

/**
 * @param {Array.<Array>} arrays
 * @returns {!Array}
 */
u.fast.concat = function(arrays) {};

/**
 * @param {Array} arr
 * @param {function(*, (number|undefined)): boolean|Function} predicate
 * @returns {!Array}
 */
u.fast.filter = function(arr, predicate) {};

/**
 * @param {Array} arr
 * @param {function((*|undefined)=, (number|undefined)=, (Array|undefined)=)|Function} callback
 * @param {*} [thisArg]
 */
u.fast.forEach = function(arr, callback, thisArg) {};
