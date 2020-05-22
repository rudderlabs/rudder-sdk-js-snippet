'use strict';

/**
 * Module Dependencies.
 */

var map = require('@ndhoule/map');
var maxTemplate = require('../dist/max.template');
var minTemplate = require('../dist/min.template');

/**
 * Has convenience alias
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Return the maxified templating function.
 *
 * @param {Object} options (optional)
 * @return {String} rendered
 */

exports.max = function(options) {
  var settings = defaults(options);
  settings.load = renderLoad(settings);
  settings.page = renderPage(settings.page);
  return maxTemplate(settings);
};

/**
 * Return the minified templating function.
 *
 * @param {Object} options
 * @return {String} min
 */

exports.min = function(options) {
  var settings = defaults(options);
  settings.load = renderLoad(settings);
  settings.page = renderPage(settings.page);
  return minTemplate(settings);
};

/**
 * Back an options object with the snippet defaults.
 *
 * @param {Object} options (optional)
 * @return {Object}
 */

function defaults(options) {
  options || (options = {});
  options.writeKey || (options.writeKey = 'YOUR_WRITE_KEY');
  options.dataPlaneUri || (options.dataPlaneUri = 'DATA_PLANE_URI');
  options.host || (options.host = 'https://cdn.rudderlabs.com/v1/rudder-analytics.min.js');
  if (!has.call(options, 'page')) options.page = true;
  if (!has.call(options, 'load')) options.load = true;
  if (!has.call(options, 'useAutoTracking')) options.useAutoTracking = false;
  if (!has.call(options, 'valTrackingList')) options.valTrackingList = false;
  if (!has.call(options, 'configUrl')) options.configUrl = false;
  return options;
}

/**
 * Handlebars helper which will render the window.analytics.page call.
 *
 * By default just render the empty call, adding whatever arguments are
 * passed in explicitly.
 *
 * @param {Object|Boolean} page options (name, category, properties)
 * @return {String}
 */

function renderPage(page) {
  if (!page) return '';

  var args = [];

  if (page.category) args.push(page.category);
  if (page.name) args.push(page.name);
  if (page.properties) args.push(page.properties);

  // eslint-disable-next-line no-restricted-globals
  var res = 'rudderanalytics.page('+map(JSON.stringify, args).join(', ')+');';

  return res;
}

function renderLoad(settings) {
  if (!settings.load) return '';

  var args = {};

  if (settings.useAutoTracking) args.useAutoTracking = settings.useAutoTracking;
  if (settings.valTrackingList && settings.valTrackingList.length > 0) {
    args.valTrackingList = settings.valTrackingList;
  }
  if (settings.configUrl) args.configUrl = settings.configUrl;
  return (
	'rudderanalytics.load("' + settings.writeKey + '", "'
    // eslint-disable-next-line no-restricted-globals
	+ settings.dataPlaneUri + '", ' + JSON.stringify(args) + ');'
  );
}
