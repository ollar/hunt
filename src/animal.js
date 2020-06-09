import Creature from './creature.js';

class Animal extends Creature {
    prefersFood = '';
    needFood = 0;
    eatsFrequency = 0;

    eat() {
        console.log('Aminal eats');
    }
}

export default Animal;