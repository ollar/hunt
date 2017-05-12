const uuid = require('./utils').uuid;

function Creature() {
  this.id = uuid();
}

Creature.prototype.constructor = Creature;

module.exports = Creature;
