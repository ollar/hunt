var Animal = require('../src/animal');
var Fox = require('../src/fox');
var Creature = require('../src/creature');
var Field = require('../src/field');

describe('Fox testing', function () {
  var fox;
  var keys = Object.keys;

  beforeEach(function() {
    fox = new Fox();
  });

  afterEach(function() {
    Field.reset();
  });

  it('fox is instance of Fox', function () {
    expect(fox instanceof Fox).to.be(true);
  });
});
