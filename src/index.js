import emitter from './emitter.js';
import Field from './field.js';
import Plant from './plant.js';

// var Rabbit = require('./src/rabbit');
// var Fox = require('./src/fox');

var $turnButton = document.getElementById('makeTurn');
var $chart = document.getElementById('chart');


// window._t = setInterval(function() {
//   Events.trigger('cicle:turn');
// }, 1000);

emitter.on('cicle:turn', function() {
  var field = Field.show();

  var plants = field['Plant'];
  // var rabbits = field['Rabbit'];
  // var foxes = field['Fox'];

  $chart.innerHTML = 'Plants: ' + Object.keys(plants).length + '<br>';
  // $chart.innerHTML += 'Rabbits: ' + Object.keys(rabbits).length + '<br>';
  // $chart.innerHTML += 'Foxs: ' + Object.keys(foxes).length + '<br>';
});


$turnButton.addEventListener('click', function() {
  emitter.emit('cicle:turn');
});

new Plant();
// new Rabbit();
// new Fox();
