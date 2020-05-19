'use strict';

var assert = require('assert');
var snippet = require('..');

describe('snippet', function() {
  describe('#max', function() {
    it('should be a template function', function() {
      assert.strictEqual(typeof snippet.max, 'function');
    });

    it('should return a string', function() {
      assert.strictEqual(typeof snippet.max(), 'string');
    });

    // it('should set the host', function() {
    //   assertContains(
    //     snippet.max({ host: 'example.com/v1/rudder-analytics.min.js' }),
    //     'example.com/analytics.js/v1');
    // });

    it('should set the data plane uri', function() {
      assertContains(
        snippet.max({ dataPlaneUri: 'example.com' }),
        'rudderanalytics.load("YOUR_WRITE_KEY", "example.com")');
    });

    it('should set the write key', function() {
      assertContains(
        snippet.max({ writeKey: 'key' }),
        'rudderanalytics.load("key", "DATA_PLANE_URI")');
    });

    it('should not include page if explicitly omitted', function() {
      assertDoesNotContain(
        snippet.max({ page: false }),
        'rudderanalytics.page()');
    });

    it('should not include load if explicitly omitted', function() {
      assertDoesNotContain(
        snippet.max({ load: false }),
        'rudderanalytics.load('
      );
    });

    it('should include page by default', function() {
      assertContains(
        snippet.max({}),
        'rudderanalytics.page()');
    });

    it('should omit page.category if not provided', function() {
      assertContains(
        snippet.max({ page: { name: 'Signup' } }),
        'analytics.page("Signup");');
    });

    it('should set the full page options', function() {
      var page = {
        category: 'Docs',
        name: 'Integrations',
        properties: {
          foo: 'bar'
        }
      };
      assertContains(
        snippet.max({ page: page }),
        'analytics.page("Docs", "Integrations", {"foo":"bar"});');
    });
  });

  describe('#min', function() {
    it('should be a template function', function() {
      assert.strictEqual(typeof snippet.min, 'function');
    });

    it('should return a string', function() {
      assert.strictEqual(typeof snippet.min(), 'string');
    });

    // it('should set the host', function() {
    //   assertContains(
    //     snippet.max({ host: 'example.com/v1/rudder-analytics.min.js' }),
    //     'example.com/analytics.js/v1');
    // });

    it('should set the data plane uri', function() {
      assertContains(
        snippet.max({ dataPlaneUri: 'example.com' }),
        'rudderanalytics.load("YOUR_WRITE_KEY", "example.com")');
    });
  
    it('should set the write key', function() {
      assertContains(
        snippet.max({ writeKey: 'key' }),
        'rudderanalytics.load("key", "DATA_PLANE_URI")');
    });

    it('should be shorter than max', function() {
      var max = snippet.max().length;
      var min = snippet.min().length;
      assert(min < max);
    });

    it('should separate out the page and load calls', function() {
      var min = snippet.min();
      assert.strictEqual(min.split('\n').length, 3);
    });
  });
});

function assertContains(string, substring) {
  if (string.indexOf(substring) === -1) {
    throw new Error('[' + string + '] does not contain [' + substring + ']');
  }
}

function assertDoesNotContain(string, substring) {
  if (string.indexOf(substring) !== -1) {
    throw new Error('[' + string + '] contains [' + substring + ']');
  }
}
