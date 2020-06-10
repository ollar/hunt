import {html, render} from '/scripts/libs/lit-html.js';

import emitter from './emitter.js';
import Field from './field.js';
import Grass from './grass.js';

let worldTurn = 0;

// var Rabbit = require('./src/rabbit');
// var Fox = require('./src/fox');


// window._t = setInterval(function() {
//   Events.trigger('cicle:turn');
// }, 1000);

const makeTurn = () => {
  // emitter.emit('cicle:turn');
  window.postMessage('circle:turn');

  worldTurn += 1;

  return renderApp();
}

const appTemplate = ({grass=[]}) => html`
  <button @click=${makeTurn}>Turn</button>

  <p>world turn: ${worldTurn}</p>

  Grass: ${grass.size}
  <div id="field">
    ${renderItems(grass)}
  </div>
`;

const renderItems = (set) => {
  const items = [];

  set.forEach(_i => items.push(_i));

  return items.map(item => html`<div class="item ${item.name}">${item.lifeCicle}</div>`);
}

const renderApp = () => {
  const grass = Field.get('Grass');
  render(appTemplate({grass}), document.getElementById('app'));
}

new Grass();
// new Rabbit();
// new Fox();

renderApp();