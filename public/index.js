import { keybindings } from './js/app.js';
import { app } from './js/app.js';
import { resizeWindow } from './js/app.js';

app.onInit = function() {

    //Variables
    const paddleWidth = 50;
    const paddleHeight = 200;
    const paddleY = app.height/2 - paddleHeight/2;

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
        x  : 0,
        y  : paddleY,
        width  : paddleWidth,
        height : paddleHeight,
        color  : 'black'
    });

    this.nodes.push({
        id : 'paddleTwo',
        x  : app.width - paddleWidth,
        y  : paddleY,
        width  : paddleWidth,
        height : paddleHeight,
        color  : 'black'
    });

    document.addEventListener("keydown", keybindings);
    window.addEventListener("resize", resizeWindow);
};

app.onUpdate = function(time) {



    if(Math.cos(this.timestamp / 100) > 0){
        this.getNode('ball').direction = -1;
    } else {
        this.getNode('ball').direction = 1;
    }

    this.getNode('ball').x+=this.getNode('ball').direction;
};