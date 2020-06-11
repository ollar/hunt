import { uuid } from './utils.js';
import Field from './field.js';

import runloop from './runloop.js';

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

        // console.log(`${this.name} constructor`);

        this.init();
    }

    init() {
        this.removeBody = Field.add(this);
        this.alive = true;
    }

    turn() {
        if (!this.alive) return;
        runloop.deferOnce('grow', () => {
            this.lifeCicle += 1;
        });

        if (this.lifeCicle === this.lifespan)
            return runloop.deferOnce('die', this.die)
            // return this.die();

        if (this.lifeCicle % this.reproductionFrequency === 0)
            runloop.deferOnce('reproduce', this.reproduce);
            // this.reproduce();
    }

    die = () => {
        // console.log(`${this.name} dies`);
        this.alive = false;
        this.removeBody();
    }

    reproduce = () => {
        // console.log(`${this.name} reproduces`);

        for (var i = 0; i < this.childNumber; i++) {
          new this.constructor();
        }
    }
}

export default Creature;