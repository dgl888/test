import { app } from './app.js';

const paddleDisplacement = 50;

export let keybindings = function (e) {

    //Player one commands are 'w' to increase height, and 's' to decrease height.
    if(e.keycode === 87 || e.which == 87) {
        app.getNode('paddleOne').y += -paddleDisplacement;
    }
    else if(e.keycode === 83 || e.which == 83) {
        app.getNode('paddleOne').y += paddleDisplacement;
    }
    //Player two commands are up arrow to increase height, and down arrow to decrease height.
    else if(e.keycode === 38 || e.which == 38) {
        app.getNode('paddleTwo').y += -paddleDisplacement;
    }
    else if(e.keycode === 40 || e.which == 40) {
        app.getNode('paddleTwo').y += paddleDisplacement;
    }
    //Commands for pausing (esc) and resetting (space) the game
    else if(e.keycode === 27 || e.which == 27) {
        // app.pause();
    }
    else if(e.keycode === 32 || e.which == 32) {
        // app.reset();
    }
}