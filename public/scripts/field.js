const storage = {};

function show() {
    return storage;
}

function add(name, key, instance) {
    if (!storage[name]) storage[name] = {};

    storage[name][key] = instance;
}

function remove(name, key) {
    if (typeof storage[name] === 'undefined') throw new Error('No such creature');

    storage[name][key] = null;
}

function get(name) {
    if (typeof storage[name] === 'undefined') throw new Error('No such creature');

    var key = Object.keys(storage[name]).pop();

    return storage[name][key];
}

function reset() {
    storage = {};
}

export default {
    show,
    get,
    add,
    remove,
    reset,
}
//# sourceMappingURL=maps/field.js.map
