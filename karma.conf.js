/* eslint-env node */
'use strict';

var middleware = require('./test/middleware');
var selfSigned = require('openssl-self-signed-certificate');

module.exports = function(config) {
  config.set({
    files: [
      'test/**/*.test.js'
    ],

    protocol: 'https',

    httpsServerOptions: {
      key: selfSigned.key,
      cert: selfSigned.cert
    },

    browsers: ['PhantomJS_custom'],

    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          },
        },
        flags: ['--web-security=false', '--ignore-ssl-errors=true'],
        debug: true
      }
    },

    frameworks: ['browserify', 'mocha'],

    reporters: ['spec', 'coverage'],

    preprocessors: {
      'test/**/*.js': 'browserify'
    },

    client: {
      mocha: {
        grep: process.env.GREP,
        reporter: 'html',
        timeout: 10000
      }
    },

    browserify: {
      debug: true,
      transform: [
        [
          'browserify-istanbul',
          {
            instrumenterConfig: {
              embedSource: true
            }
          }
        ]
      ]
    },

    coverageReporter: {
      reporters: [
        { type: 'text' },
        { type: 'html' },
        { type: 'json' }
      ]
    },

    middleware: [ 'custom' ],

    plugins: [
      'karma-*',
      { 'middleware:custom': [ 'factory', middleware ] }
    ]
  });
};
