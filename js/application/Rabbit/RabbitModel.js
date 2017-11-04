'use strict';

class Rabbit {
    constructor (picture) {
        this.picture = picture;
        this.carrots = 0;
        this.position = undefined;
    }

    die () {
        return true;
    }

    eat (food) {
        food === 'cactus' ? this.die() : this.carrots++;
    }
}
