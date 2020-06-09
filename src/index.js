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
  emitter.emit('cicle:turn');
  worldTurn += 1;

  const items = new Array(worldTurn).fill('0')

  render(appTemplate({items}), document.getElementById('app'));
}

const appTemplate = ({items=[]}) => html`
  <button @click=${makeTurn}>Turn</button>

  <p>world turn: ${worldTurn}</p>
  <div id="field">
    ${items.map(element => html`<div class="item"></div>`)}
  </div>
`;

render(appTemplate({}), document.getElementById('app'));

// new Plant();
// new Rabbit();
// new Fox();
