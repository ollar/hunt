var Events = require('backbone-events-standalone');
var Plant = require('./src/plant');

window._t = setInterval(function() {
  Events.trigger('cicle:turn');
}, 1000);

var cr = new Plant();
console.log(cr);
