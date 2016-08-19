/**
 * Created by Zach Donnelly on 8/18/2016.
 */

import Game from './Game';

export default class Launcher {
    constructor(title, width, height) {
        var game = new Game(title, width, height);
        game.start();
    }
}