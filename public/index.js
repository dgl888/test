import { app } from './js/app.js';
import { keybindings } from './js/app.js';
import { resizeWindow } from './js/app.js';
import { collisionCheck } from './js/collision.js';
import { initBall } from "./js/initBall.js";


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
    initBall(this);


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

    //Determine the side the ball is on. True is left, False is right.
    let whichSide = ball.x < (this.width / 2);
    let paddle = whichSide ? paddle1 : paddle2;

    //Check if paddle1 is in bounds.
    if(paddle1.y < 0 ) paddle1.y = 0;
    if(paddle1.y >= this.height - paddle1.height) paddle1.y = this.height - paddle1.height;

    //Check if paddle2 is in bounds.
    if(paddle2.y < 0) paddle2.y = 0;
    if(paddle2.y >= this.height - paddle2.height) paddle2.y = this.height - paddle2.height;

    //Begin movement of ball
    ball.x += ball.directionX;
    ball.y += ball.directionY;

    //Check to see if the ball and paddle collide. If they do, create an angle for the ball to rebound from.
    if(collisionCheck(ball, paddle)) {
        let collissionPoint = (ball.y - (paddle.y + paddle.height/2)) / (paddle.height/2);
        let angle = collissionPoint * (Math.PI/4);
        let direction = (ball.x < this.width/2 ) ? 1 : -1;

        ball.directionX = direction * ball.speed * Math.cos(angle);
        ball.directionY = direction * ball.speed * Math.sin(angle);
        //ball.speed += 1;
    }

};