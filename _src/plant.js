const Creature = require('./creature');
var Field = require('./field');

function Plant() {
  Creature.apply(this, arguments);

  this.lifespan = 2;
  this.reproductionFrequency = 1;
  this.childNumber = 10;
}

Plant.prototype = Object.create(Creature.prototype);
Plant.prototype.constructor = Plant;

module.exports = Plant;
