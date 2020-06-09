import { uuid } from './utils.js';
import Field from './field.js';
import emitter from './emitter.js';

class Creature {
    lifeCicle = 0;
    alive = false;
    lifespan = 0;
    childNumber = 0;
    reproductionFrequency = 0;

    constructor() {
        this.id = uuid();

        console.log('creature makes some preparations');


        // Field.add(this.constructor.name, this.id, this);
        // emitter.on('cicle:turn', this.turn);
    }

    turn = () => {
        // if (!this.alive) return;
        // this.lifeCicle += 1;

        // if (this.lifeCicle === this.lifespan)
        //     return this.die();

        // if (this.lifeCicle % this.reproductionFrequency === 0)
        //     this.reproduce();
    }

    die() {
        console.log('creature dies');

        // this.alive = false;
        // console.log('die');

        // emitter.removeListener('cicle:turn', this.turn);

        // Field.remove(this.constructor.name, this.id);
    }

    reproduce() {
        console.log('creature reproduces');

        // for (var i = 0; i < this.childNumber; i++) {
        //   new this.constructor();
        // }
    }
}

export default Creature;