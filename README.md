# snippet

  Render the rudder-analytics.js snippet.

  The recommended way to use rudder-analytics.js is to follow the [RudderStack JavaScript SDK quickstart guide](https://github.com/rudderlabs/rudder-sdk-js#how-to-use-the-rudderstack-javascript-sdk). If you absolutely need to generate a snippet dynamically, this is an alternate solution. Note that when using this in-browser, the global `rudderanalytics` object will not be defined until the snippet is rendered and executed.

  This package is supported on IE8+, Chrome, Firefox, Safari 9, Microsoft Edge, Node.js 0.10+

  For IE7 support, install a global `JSON` polyfill on the page prior to loading this package.

## Example

```js
// var snippet = require('@segment/snippet');

var contents = snippet.max({
  writeKey: '1Yt0USbr7HhL1KWTpEq4Y73NCNz', // "YOUR_WRITE_KEY"
  dataPlaneUri: 'https://hosted.rudderlabs.com', // "DATA_PLANE_URI"
});
```

## API

### snippet.max(options)

  Returns the maxified version of the rudder-analytics.js snippet given a set of `options`:

  * `host`: the domain name where the analytics.js script is hosted.
  * `writeKey`: the `writeKey` from RudderStack Control Plane.
  * `page`: the options to pass to `rudderanalytics.page`. if `page` is `false`, then the `page()` call will be omitted.
  * `load`: if set to `false` the `load()` call will be omitted. This is useful for if you want dynamically control the load process on the client-side for things like GDPR.


### snippet.min(options)

  Returns the minified version of the snippet.

## TODO 
- [ ] Add simple example
- [ ] Update `test/render.test.js`
- [ ] Update `test/snippet.test.js`
- [ ] README add useAutoTrack & configUrl
- [ ] README update opts description
- [ ] CI Build for dist
- [ ] Proper package manager set up
