module.exports=function(settings) {
var __t, __p = '';
__p += '!function(){rudderanalytics=window.rudderanalytics=[];for(var a=["load","page","track","identify","alias","group","ready","reset","getAnonymousId","setAnonymousId"],n=0;n<a.length;n++){var t=a[n];rudderanalytics[t]=function(a){return function(){rudderanalytics.push([a].concat(Array.prototype.slice.call(arguments)))}}(t)}\n' +
((__t = ( settings.load )) == null ? '' : __t) +
'\n' +
((__t = ( settings.page )) == null ? '' : __t) +
'}();';
return __p
}