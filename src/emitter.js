import EventEmitter from '/scripts/libs/events.js';

const emitter = new EventEmitter();

emitter.setMaxListeners(999999999);

window.emitter = emitter;

export default emitter;