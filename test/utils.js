var Utils = require('../src/utils');

describe('uid test', function() {
  it('should return string', function() {
    var uid = Utils.uuid();

    expect(typeof uid).to.be('string');
  });

  it('should return unique id', function() {
    var prevId = '';
    for (var i = 0; i < 1000; i++) {
      var uid = Utils.uuid();

      expect(uid).not.to.eql(prevId);
      prevId = uid;
    }
  });
});
