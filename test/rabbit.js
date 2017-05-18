var Animal = require('../src/animal');
var Rabbit = require('../src/rabbit');
var Creature = require('../src/creature');
var Field = require('../src/field');

describe('Rabbit testing', function () {
  var rabbit;
  var keys = Object.keys;

  beforeEach(function() {
    rabbit = new Rabbit();
  });

  afterEach(function() {
    Field.reset();
  });

  it('rabbit is instance of Rabbit', function () {
    expect(rabbit instanceof Rabbit).to.be(true);
  });
});
