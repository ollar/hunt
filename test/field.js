var Field = require('../src/field');
var _ = require('lodash');

describe('Field testing', function () {
  var keys = Object.keys;
  var a = {a: 1};
  var b = {b: 1};
  var c = {c: 1};

  afterEach(function() {
    Field.reset();
  });

  it('show returns object', function () {
    expect(Field.show()).to.be.an(Object);
  });

  it('add instance', function() {
    Field.add('TEST', '1', a);

    expect(keys(Field.show()['TEST']).length).to.be(1);
    expect(keys(Field.show())).to.contain('TEST');
    expect(keys(Field.show()['TEST'])).to.contain('1');
  });

  it('remove instance', function() {
    Field.add('TEST', '1', a);
    Field.add('TEST', '2', b);
    Field.add('TEST', '3', c);

    Field.remove('TEST', '1');

    expect(keys(Field.show()['TEST']).length).to.be(2);
    expect(keys(Field.show())).to.contain('TEST');
    expect(keys(Field.show()['TEST'])).not.to.contain('1');
    expect(keys(Field.show()['TEST'])).to.contain('2');
    expect(keys(Field.show()['TEST'])).to.contain('3');

    expect(Field.remove).withArgs('TEST__', '1').to.throwException();
  });

  it('get instance', function() {
    Field.add('TEST', '1', a);
    Field.add('TEST', '2', b);
    Field.add('TEST', '3', c);

    expect(Field.get('TEST')).to.be(c);
    expect(Field.get).withArgs('TEST__').to.throwException();
  });

  it('reset Field', function () {
    Field.add('TEST', '1', a);
    Field.add('TEST', '2', b);
    Field.add('TEST', '3', c);

    Field.reset();

    expect(keys(Field.show()).length).to.be(0);
  });

});
