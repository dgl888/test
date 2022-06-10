import { keybindings } from './js/app.js';
import { app } from './js/app.js';
import { resizeWindow } from './js/app.js';

app.onInit = function() {

    //Variables
    const paddleWidth = 40;
    const paddleHeight = 200;
    const paddleY = app.height/2 + paddleHeight/2;
    const ballWidth = 50;
    const ballHeight = 50;
    const ballRadius = 20;



    //Initialize the window size
    resizeWindow();

    this.nodes.push({
        id : 'ball',
        x : canvas.width/2 + ballWidth/2,
        y : canvas.height/2 + ballHeight/2,
        width  : ballWidth,
        height : ballHeight,
        color  : 'blue',
        r: ballRadius,
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
    let ball = this.getNode('ball');
    let paddle1 = this.getNode('paddleOne');
    let paddle2 = this.getNode('paddleTwo');

    //Check if paddle1 is in bounds.
    if(paddle1.y < 0 ) paddle1.y = 0;
    if(paddle1.y >= this.height - paddle1.height) paddle1.y = this.height - paddle1.height;

    //Check if paddle2 is in bounds.
    if(paddle2.y < 0) paddle2.y = 0;
    if(paddle2.y >= this.height - paddle2.height) paddle2.y = this.height - paddle2.height



};