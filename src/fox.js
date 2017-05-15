var Animal = require('./animal');

function Fox() {
  Animal.apply(this, arguments);

  this.prefersFood = 'Rabbit';
  this.needFood = 2;
  this.eatsFrequency = 1;

  this.lifespan = 10;
  this.childNumber = 3;
  this.reproductionFrequency = 3;
}

Fox.prototype = Object.create(Animal.prototype);
Fox.prototype.constructor = Fox;

module.exports = Fox;
