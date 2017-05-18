var Plant = require('../src/plant');
var Creature = require('../src/creature');
var Field = require('../src/field');

describe('Plant testing', function () {
  var plant;
  var keys = Object.keys;

  beforeEach(function() {
    plant = new Plant();
  });

  afterEach(function() {
    Field.reset();
  });

  it('plant is instance of Plant', function () {
    expect(plant instanceof Plant).to.be(true);
  });

  it('plant is instance of Creature', function () {
    expect(plant instanceof Creature).to.be(true);
  });

  it('plant live for two years', function () {
    plant.turn();
    expect(plant.alive).to.be(true);

    plant.turn();
    expect(plant.alive).to.be(false);
  });

  it('plant reproduces itself', function () {
    plant.turn();

    expect(keys(Field.show()['Plant']).length).to.be(4);
  });
});
