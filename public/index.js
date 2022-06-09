import { keybindings } from './js/app.js';
import { app } from './js/app.js';
import { resizeWindow } from './js/app.js';

app.onInit = function() {

    //Initialize the window size
    resizeWindow();

    this.nodes.push({
        id : 'ball',
        x  : 100,
        y  : 0,
        width  : 100,
        height : 100,
        color  : 'red',
        direction : 0
    });

    this.nodes.push({
        id : 'paddleOne',
        x  : 50,
        y  : 0,
        width  : 150,
        height : 150,
        color  : 'black'
    });

    this.nodes.push({
        id : 'paddleTwo',
        x  : 50,
        y  : 0,
        width  : 150,
        height : 150,
        color  : 'black'
    });

    document.addEventListener("keydown", keybindings);
    window.addEventListener('resizeWindow', resizeWindow);
};

app.onUpdate = function(time) {



    if(Math.cos(this.timestamp / 100) > 0){
        this.getNode('ball').direction = -1;
    } else {
        this.getNode('ball').direction = 1;
    }

    this.getNode('ball').x+=this.getNode('ball').direction;
};