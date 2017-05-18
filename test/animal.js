var Animal = require('../src/animal');
var Plant = require('../src/plant');
var Creature = require('../src/creature');
var Field = require('../src/field');

describe('Animal testing', function () {
  var animal;
  var keys = Object.keys;

  beforeEach(function() {
    animal = new Animal();
  });

  afterEach(function() {
    Field.reset();
  });

  it('animal is instance of Animal', function () {
    expect(animal instanceof Animal).to.be(true);
  });

  it('animal should eat', function () {
    new Plant();
    new Plant();
    new Plant();
    new Plant();

    animal.prefersFood = 'Plant';
    animal.needFood = 1;
    animal.eatsFrequency = 2;
    animal.lifespan = 5;

    animal.turn();
    animal.turn();
    animal.turn();
    animal.turn();

    expect(keys(Field.show()['Plant']).length).to.be(2);
  });

  it('animal reproduces', function () {
    new Plant();
    new Plant();
    new Plant();

    animal.prefersFood = 'Plant';
    animal.needFood = 1;
    animal.eatsFrequency = 1;
    animal.lifespan = 4;
    animal.reproductionFrequency = 1;
    animal.childNumber = 1;

    animal.turn();
    animal.turn();
    animal.turn();

    expect(keys(Field.show()['Animal']).length).to.be(4);
  });

  it('animal die from starving', function () {
    new Plant();
    new Plant();
    new Plant();

    animal.prefersFood = 'Plant';
    animal.needFood = 1;
    animal.eatsFrequency = 1;
    animal.lifespan = 99;

    animal.turn();
    animal.turn();
    animal.turn();
    expect(animal.alive).to.be(true);

    animal.turn();

    expect(keys(Field.show()['Animal']).length).to.be(0);
    expect(animal.alive).to.be(false);
  });

  it('animal stop reproduce on starving', function () {
    new Plant();
    new Plant();
    new Plant();

    animal.prefersFood = 'Plant';
    animal.needFood = 1;
    animal.eatsFrequency = 1;
    animal.reproductionFrequency = 1;
    animal.childNumber = 1;
    animal.lifespan = 99;

    animal.turn();
    animal.turn();
    animal.turn();
    animal.turn();

    expect(keys(Field.show()['Animal']).length).to.be(3);
  });
});
