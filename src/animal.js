var Creature = require('./creature');
var Field = require('./field');

function Animal() {
  Creature.apply(this, arguments);

  this.prefersFood = '';
  this.needFood = 0;
  this.eatsFrequency = 0;
}

Animal.prototype = Object.create(Creature.prototype);
Animal.prototype.constructor = Animal;

Animal.prototype.turn = function() {
  Creature.prototype.turn.apply(this, arguments);

  if (this.lifeCicle % this.eatsFrequency === 0) {
    for (var i = 0; i < this.needFood; i++) {
      var instance = Field.get(this.prefersFood);
      this.eats(instance);
    }
  }
}

Animal.prototype.eats = function(instance) {
  if (!instance) {
    console.log('dead from starve');
    return this.die();
  }

  return instance.die();
}

Animal.prototype.reproduce = function() {
  var isStarving = false;
  var food = Field.show()[this.prefersFood];

  if (Object.keys(food).length === 0) {
    isStarving = true;
  }

  if (!isStarving) {
    Creature.prototype.reproduce.apply(this, arguments);
  }
}

module.exports = Animal;
