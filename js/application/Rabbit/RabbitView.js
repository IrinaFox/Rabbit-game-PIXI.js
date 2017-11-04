'use strict';

class RabbitView {
    constructor (Model) {
        const picture = "./images/rabbit.png";

        this.rabbit = new Model(picture);
    }

    addPicture () {
        loader
            .add('rabbit', this.rabbit.picture)
            .on('progress', function () {
                sprites.rabbit = new Sprite(resources.rabbit.texture);
            });
    }
}