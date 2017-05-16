var Field = (function() {
  var storage = {};

  function show() {
    return storage;
  }

  function add(name, key, instance) {
    if (!storage[name]) storage[name] = {};

    storage[name][key] = instance;
  }

  function remove(name, key) {
    if (typeof storage[name] === 'undefined') throw new Error('No such creature');

    delete storage[name][key];
  }

  function get(name) {
    if (typeof storage[name] === 'undefined') throw new Error('No such creature');

    var key = Object.keys(storage[name]).pop();

    return storage[name][key];
  }

  function reset() {
    storage = {};
  }

  return {
    show: show,
    get: get,
    add: add,
    remove: remove,
    reset: reset,
  };
})();

module.exports = Field;
