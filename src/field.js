const storage = {};

function show() {
    return storage;
}

function add(instance) {
    const name = instance.constructor.name;
    if (!storage[name]) storage[name] = new Set();

    storage[name].add(instance);

    return () => {
        storage[name].delete(instance);
    }
}

function remove(instance) {
    const name = instance.constructor.name;

    if (typeof storage[name] === 'undefined') throw new Error('No such creature');

    storage[name].delete(instance);
}

function get(name) {
    if (typeof storage[name] === 'undefined') throw new Error('No such creature');

    return storage[name];
}

function reset() {
    storage = {};
}

function turn() {
    Object.keys(storage).forEach(key => {
        storage[key].forEach(item => item.turn());
    });
}

window.field = storage;

export default {
    show,
    get,
    add,
    remove,
    reset,
    turn,
}
