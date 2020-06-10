import Creature from './creature.js';

class Grass extends Creature {
    lifespan = 2;
    reproductionFrequency = 1;
    childNumber = 2;
}

export default Grass;