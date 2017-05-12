const Creature = require('./creature');

function Plant() {
  Creature.apply(this, arguments);
}

Plant.prototype = Object.create(Creature);
Plant.prototype.constructor = Plant;

module.exports = Plant;
