import { app } from './app.js';
import { getNodes } from './getNodes.js';

const paddleDisplacement = 50;

export let keybindings = function (e) {
    let [ball, paddleOne, paddleTwo, scoreOne, scoreTwo] = getNodes();

    //Player one commands are 'w' to increase height, and 's' to decrease height.
    if(e.keycode === 87 || e.which == 87) {
        paddleOne.y += -paddleDisplacement;
    }
    else if(e.keycode === 83 || e.which == 83) {
        paddleOne.y += paddleDisplacement;
    }
    //Player two commands are up arrow to increase height, and down arrow to decrease height.
    else if(e.keycode === 38 || e.which == 38) {
        paddleTwo.y += -paddleDisplacement;
    }
    else if(e.keycode === 40 || e.which == 40) {
        paddleTwo.y += paddleDisplacement;
    }
    //Commands for pausing (space) and resetting (esc) the game
    else if(e.keycode === 27 || e.which == 27) {
        app.reset();
    }
    else if(e.keycode === 32 || e.which == 32) {
        app.pause();
    }
}