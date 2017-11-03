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
            "./imagies/rabbit.png",
            "./imagies/cactus.png",
            "./imagies/carrot.png",
            "./imagies/grass.png",
            "./imagies/treasureHunter.json"
        ])
        .load(setup);

    var rabbit,
        cactus,
        carrot,
        grass;

    function setup () {
        rabbit = new Sprite(resources["./imagies/rabbit.png"].texture);
        cactus = new Sprite(resources["./imagies/cactus.png"].texture);
        carrot = new Sprite(resources["./imagies/carrot.png"].texture);
        carrot.x = 92;
        carrot.y = 37;
        grass = new Sprite(resources["./imagies/grass.png"].texture);

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
