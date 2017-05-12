var Events = require('backbone-events-standalone');
var Plant = require('./src/plant');
// var Plant = require('./src/creature');

window.events = Events;

window._t = setInterval(function() {
  window.events.trigger('cicle:turn');
}, 1000);


var cr = new Plant();
console.log(cr);
