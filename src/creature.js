var uuid = require('./utils').uuid;
var Events = require('backbone-events-standalone');

function Creature() {
  this.id = uuid();

  this.lifeCicle = 0;
  this.alive = true;
  this.lifespan = 0;
  this.childNumber = 0;
  this.reproductionFrequency = 0;

  this.turn = this.turn.bind(this);

  console.log(this.constructor.name);

  this.listenTo(window.events, 'cicle:turn', this.turn);
}

Events.mixin(Creature.prototype);

Creature.prototype.constructor = Creature;

Creature.prototype.turn = function() {
  if (!this.alive) return;
  this.lifeCicle += 1;

  if (this.lifeCicle === this.lifespan) this.die();
  if (this.lifeCicle % this.reproductionFrequency === 0) this.reproduce();
}

Creature.prototype.die = function() {
  this.alive = false;
  this.stopListening();
}

Creature.prototype.reproduce = function() {
  for (var i = 0; i < this.childNumber; i++) {
    new this.constructor();
  }
}

module.exports = Creature;
