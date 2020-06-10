import { uuid } from './utils.js';
import Field from './field.js';
import emitter from './emitter.js';

class Creature {
    lifeCicle = 0;
    alive = false;
    lifespan = 0;
    childNumber = 0;
    reproductionFrequency = 0;

    get name() {
        return this.constructor.name;
    }

    constructor() {
        this.id = uuid();

        console.log(`${this.name} constructor`);

        this.init();
    }

    _handleMessage = e => {
        if (e.data === 'circle:turn') return this.turn();
    }

    init() {
        this.removeBody = Field.add(this);
        window.addEventListener('message', this._handleMessage, {passive : true})
        this.alive = true;
    }

    turn = () => {
        if (!this.alive) return;
        this.lifeCicle += 1;

        if (this.lifeCicle === this.lifespan)
            return this.die();

        if (this.lifeCicle % this.reproductionFrequency === 0)
            this.reproduce();
    }

    die() {
        console.log(`${this.name} dies`);

        this.alive = false;

        window.removeListener('message', this._handleMessage)

        this.removeBody();
    }

    reproduce() {
        console.log(`${this.name} reproduces`);

        for (var i = 0; i < this.childNumber; i++) {
          new this.constructor();
        }
    }
}

export default Creature;