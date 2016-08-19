/**
 * Created by Zach Donnelly on 8/18/2016.
 */

import Display from './display/Display';

let _title = Symbol('title');
let _width = Symbol('width');
let _height = Symbol('height');
let _graphics = Symbol('graphics');

const fps = 30;
var running = false;
var _this;

function tick(dt) {

}

function render() {
    _this[_graphics].clearRect(0, 0, _this[_width], _this[_height]);
    _this[_graphics].fillRect(20, 20, 200, 50);
}

export default class Game {

    constructor(title, width, height) {
        _this = this;
        this[_title] = title;
        this[_width] = width;
        this[_height] = height;
    }

    init() {
        var display = new Display(this[_title], this[_width], this[_height]);
        this[_graphics] = display.graphics;
    }

    run() {
        var timePerTick = 1000/fps;
        var delta = 0;
        var now;
        var lastTime = Date.now();
        var timer = 0;
        var ticks = 0;
        this.init();
        function loop() {
            if(running) {
                now = Date.now();
                delta = now - lastTime;
                timer += delta;
                lastTime = now;
            }
            if(timer >= timePerTick) {
                var dt = timer/1000;
                tick(dt);
                render();
                timer = 0;
            }
            window.requestAnimationFrame(loop);
        }
        loop();
    }

    start() {
        if(running) {
            return;
        }
        running = true;
        this.run();
    }
}