var Animal = require('./animal');

function Rabbit() {
  Animal.apply(this, arguments);

  this.prefersFood = 'Plant';
  this.needFood = 1;
  this.eatsFrequency = 1;

  this.lifespan = 5;
  this.childNumber = 3;
  this.reproductionFrequency = 1;
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

module.exports = Rabbit;
