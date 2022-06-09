import { app } from './app.js';

export let keybindings = function (e) {

    // Player one commands are 'w' to increase height, and 's' to decrease height.
    if(e.keycode === 87 || e.which == 87) {
        app.getNode('paddleOne').y += -50
    }
    else if(e.keycode === 83 || e.which == 83) {
        app.getNode('paddleOne').y += 50
    }

}