import Creature from './creature.js';
import runloop from './runloop.js';
import Field from './field.js';

class Animal extends Creature {
    prefersFood = '';
    needFood = 0;
    eatsFrequency = 0;

    turn() {
        super.turn();

        if (this.lifeCicle % this.eatsFrequency === 0) {
            runloop.deferOnce('eat', () => {
                if (!this.alive) return;
                for (var i = 0; i < this.needFood; i++) {
                    let instancesSet = Field.get(this.prefersFood);
                    if (!instancesSet || instancesSet.size === 0) return this.eat();

                    let instance = new Array(...instancesSet).pop();

                    this.eat(instance);
                }
            })
        }
    }

    eat(instance) {
        if (!instance) {
            console.log(`${this.name} dead from starve`);
            return this.die();
        }

        console.log(`${this.name} eats ${instance.name}`);

        return instance.die();
    }
}

export default Animal;