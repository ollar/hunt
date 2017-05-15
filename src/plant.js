const Creature = require('./creature');

function Plant() {
  Creature.apply(this, arguments);

  this.lifespan = 3;
}

Plant.prototype = Object.create(Creature.prototype);
Plant.prototype.constructor = Plant;

module.exports = Plant;
