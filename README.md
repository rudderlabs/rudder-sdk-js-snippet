# What is RudderStack?

[RudderStack](https://rudderstack.com/) is a **customer data pipeline** tool for collecting, routing and processing data from your websites, apps, cloud tools, and data warehouse.

More information on RudderStack can be found [here](https://github.com/rudderlabs/rudder-server).

## About this repository

The resources in this repository allow you to render the `rudder-analytics.js` snippet dynamically, as an alternative to the preferred and recommended method, i.e. the [RudderStack JavaScript SDK quickstart guide](https://github.com/rudderlabs/rudder-sdk-js#how-to-use-the-rudderstack-javascript-sdk). 

Note that when using this in-browser, the global `rudderanalytics` object will not be defined until the snippet is rendered and executed. This package is supported on IE8+, Chrome, Firefox, Safari 9, Microsoft Edge, Node.js 0.10+

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

## Contact Us

If you come across any issues while configuring or using this repository, please feel free to start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel. We will be happy to help you.
