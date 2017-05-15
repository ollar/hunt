var Events = require('backbone-events-standalone');
var Field = require('./src/field');
var Plant = require('./src/plant');
var Rabbit = require('./src/rabbit');
var Fox = require('./src/fox');

var turnButton = document.getElementById('makeTurn');
var chart = document.getElementById('chart');

// window._t = setInterval(function() {
//   Events.trigger('cicle:turn');
// }, 1000);

Events.on('cicle:turn', function() {
  var field = Field.show();
  console.log(field);

  var plants = field['Plant'];
  var rabbits = field['Rabbit'];
  var foxes = field['Fox'];

  chart.innerHTML = 'Plants: ' + Object.keys(plants).length + '<br>';
  chart.innerHTML += 'Rabbits: ' + Object.keys(rabbits).length + '<br>';
  chart.innerHTML += 'Foxs: ' + Object.keys(foxes).length + '<br>';
});


turnButton.addEventListener('click', function() {
  Events.trigger('cicle:turn');
});

new Plant();
new Rabbit();
new Fox();
