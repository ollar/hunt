import {html, render} from '/scripts/libs/lit-html.js';

import Field from './field.js';
import Grass from './grass.js';
import Rabbit from './rabbit.js';
import Fox from './fox.js';
import runloop from './runloop.js';

let worldTurn = 0;

// window._t = setInterval(function() {
//   Events.trigger('cicle:turn');
// }, 1000);

const makeTurn = () => {
  runloop.run(() => {
    worldTurn += 1;
    Field.turn();
  });
  renderApp();
}

const appTemplate = ({grass=[], rabbit=[], fox=[]}) => html`
  <button @click=${makeTurn}>Turn</button>

  <p>world turn: ${worldTurn}</p>

  <div>Grass: ${grass.size}</div>
  <div>Rabbits: ${rabbit.size}</div>
  <div>Foxes: ${fox.size}</div>

  <div id="field">
    ${renderItems(grass)}
    ${renderItems(rabbit)}
    ${renderItems(fox)}
  </div>
`;

const renderItems = (set) => {
  const items = [];

  set.forEach(_i => items.push(_i));

  return items.map(item => html`<div class="item ${item.name}">${item.lifeCicle}</div>`);
}

const renderApp = () => {
  console.log('render');

  const grass = Field.get('Grass');
  const rabbit = Field.get('Rabbit');
  const fox = Field.get('Fox');

  render(appTemplate({grass, rabbit, fox}), document.getElementById('app'));
}

for (let index = 0; index < 50; index++) {
  new Grass();
}

for (let index = 0; index < 10; index++) {
  new Rabbit();
}

for (let index = 0; index < 2; index++) {
  new Fox();
}

renderApp();