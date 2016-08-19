/**
 * Created by Zach Donnelly on 8/18/2016.
 */

//let _canvas = new WeakMap();
let _graphics = Symbol('graphics');
let _title = Symbol('title');
let _width = Symbol('width');
let _height = Symbol('height');

export default class Display {

    constructor(title, width, height) {
        this[_title] = title;
        this[_width] = width;
        this[_height] = height;
        this.createDisplay();
    }

    createDisplay() {
        document.title = this[_title];
        var body = document.body;
        body.innerHTML = "<canvas id='canvas' width='"+this[_width]+"' height='"+this[_height]+"'></canvas>";
        this[_graphics] = document.getElementById('canvas').getContext('2d');
    }

    get height() {
        return this[_height];
    }

    get width() {
        return this[_width];
    }

    get title() {
        return this[_title];
    }

    get graphics() {
        return this[_graphics];
    }
}