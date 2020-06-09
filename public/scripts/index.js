import {html, render} from '/scripts/libs/lit-html.js';

import emitter from './emitter.js';
import Field from './field.js';
import Grass from './grass.js';


// var Rabbit = require('./src/rabbit');
// var Fox = require('./src/fox');


// window._t = setInterval(function() {
//   Events.trigger('cicle:turn');
// }, 1000);

const makeTurn = () => emitter.emit('cicle:turn');

const appTemplate = (name) => html`
  <button @click=${makeTurn}>Turn</button>

  <div id="field">

  </div>
`;

render(appTemplate('World'), document.getElementById('app'));

// new Plant();
// new Rabbit();
// new Fox();
//# sourceMappingURL=maps/index.js.map
