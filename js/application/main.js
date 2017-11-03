'use strict';

console.log('works');

window.addEventListener('load', function () {
    var TextureCache = PIXI.utils.TextureCache,
        Container = PIXI.Container,
        autoDetectRenderer = PIXI.autoDetectRenderer,
        loader = PIXI.loader,
        resources = PIXI.loader.resources,
        Sprite = PIXI.Sprite;

    var stage = new Container(),
        renderer = autoDetectRenderer(600, 600);

    document.body.appendChild(renderer.view);

    loader
        .add([
            "./images/rabbit.png",
            "./images/cactus.png",
            "./images/carrot.png",
            "./images/grass.png",
            "./images/treasureHunter.json"
        ])
        .load(setup);

    var rabbit,
        cactus,
        carrot,
        grass;

    function setup () {
        rabbit = new Sprite(resources["./images/rabbit.png"].texture);
        cactus = new Sprite(resources["./images/cactus.png"].texture);
        carrot = new Sprite(resources["./images/carrot.png"].texture);
        carrot.x = 92;
        carrot.y = 97;
        grass = new Sprite(resources["./images/grass.png"].texture);

        stage.addChild(grass);
        stage.addChild(rabbit);
        stage.addChild(carrot);


        renderer.render(stage);

        gameLoop();
    }

    function gameLoop() {
        //Loop this function at 60 frames per second
        requestAnimationFrame(gameLoop);

        //Move the cat 1 pixel to the right each frame
        rabbit.x += 1;

        //Render the stage to see the animation
        renderer.render(stage);
    }
}, false);
