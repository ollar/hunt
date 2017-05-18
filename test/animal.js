var Animal = require('../src/animal');
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
});
