import { uuid } from './utils.js';
import Field from './field.js';
import emitter from './emitter.js';

class Creature {
    lifeCicle = 0;
    alive = true;
    lifespan = 0;
    childNumber = 0;
    reproductionFrequency = 0;

    constructor() {
        this.id = uuid();
        Field.add(this.constructor.name, this.id, this);
        emitter.on('cicle:turn', this.turn);
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
        this.alive = false;
        console.log('die');

        emitter.removeListener('cicle:turn', this.turn);

        Field.remove(this.constructor.name, this.id);
    }

    reproduce() {
        console.log('reproduce');

        for (var i = 0; i < this.childNumber; i++) {
          new this.constructor();
        }
    }
}

export default Creature;
//# sourceMappingURL=maps/creature.js.map