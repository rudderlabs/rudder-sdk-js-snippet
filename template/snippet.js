(function(){
    rudderanalytics = window.rudderanalytics = [];

    var methods = [
        'load',
        'page',
        'track',
        'identify',
        'alias',
        'group',
        'ready',
        'reset',
        'getAnonymousId',
        'setAnonymousId',
    ];

    for (var i = 0; i < methods.length; i++) {
        var method = methods[i];
        rudderanalytics[method] = (function (methodName) {
            return function () {
                rudderanalytics.push([methodName]);
            };
        })(method);
    }

// Define a method to load Analytics.js from our CDN,
// and that will be sure to only ever load it once.
// rudderanalytics.load = function(options){
// // Create an async script element based on your key.
// var script = document.createElement('script');
// script.type = 'text/javascript';
// script.async = true;
// script.src = 'https://cdn.rudderlabs.com/v1/rudder-analytics.min.js';

// // Insert our script next to the first script element.
// var first = document.getElementsByTagName('script')[0];
// first.parentNode.insertBefore(script, first);
// analytics._loadOptions = options;
//   };

  // Load Analytics.js with your key, which will automatically
  // load the tools you've enabled for your account. Boosh!
  '<%= settings.load %>'

  // Make the first page call to load the integrations. If
  // you'd like to manually name or tag the page, edit or
  // move this call however you'd like.
  '<%= settings.page %>'
})();
