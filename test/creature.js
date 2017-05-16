var Creature = require('../src/creature');
var Field = require('../src/field');

describe('Creature testing', function () {
  var creature;
  var field;

  beforeEach(function() {
    creature = new Creature();
  });

  afterEach(function() {
    Field.reset();
  });

  it('creates Creature instance', function () {
    var creature = new Creature();

    expect(creature).to.be.a(Creature);
  });

  it('creature turn will increase age', function () {
    creature.turn();
    expect(creature.lifeCicle).to.be(1);
  });

  it('dead creature turn wont do anything', function () {
    creature.alive = false;
    creature.turn();
    expect(creature.lifeCicle).to.be(0);
  });

  it('creature die() will die', function () {
    creature.die();
    expect(creature.alive).to.be(false);
  });

  it('creature die in the end', function () {
    creature.lifespan = 2;
    creature.turn();
    creature.turn();
    expect(creature.lifeCicle).to.be(2);
    expect(creature.alive).to.be(false);
  });

  it('creature reproduce itself', function () {
    var keys = Object.keys;
    creature.lifespan = 3;
    creature.reproductionFrequency = 1;
    creature.childNumber = 1;
    creature.turn();
    creature.turn();

    expect(keys(Field.show()['Creature']).length).to.be(3);
  });

  it('creature reproduce itself 2', function () {
    var keys = Object.keys;

    creature.lifespan = 2;
    creature.reproductionFrequency = 1;
    creature.childNumber = 1;

    creature.turn();
    creature.turn();
    expect(keys(Field.show()['Creature']).length).to.be(2);
  });
});
