var Creature = require('../src/creature');

describe('Creature testing', function () {
  it('creates Creature instance', function () {
    var creature = new Creature();

    expect(creature).to.be.a(Creature);
  });
});
