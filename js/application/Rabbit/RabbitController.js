'use strict';

class RabbitController {
    constructor () {
        this.model = Rabbit;
        this.view = new RabbitView(this.model);
    }

    initialize () {
        this.view.addPicture();
    }
}