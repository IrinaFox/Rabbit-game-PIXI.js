'use strict';

class Rabbit {
    constructor(picture) {
        this.picture = picture;
        this.carrots = 0;
        this.position = undefined;
    }

    dead () {

    }

    eat (food) {
        food === 'cactus': this.dead() ? this.carrots++;
    }
}
