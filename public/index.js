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
        color  : 'red',
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

    this.nodes.push({
        id : 'scoreOne',
        score : 0
    });

    this.nodes.push({
        id : 'scoreTwo',
        score : 0
    });

    document.addEventListener("keydown", keybindings);
    window.addEventListener("resize", resizeWindow);
};

app.onUpdate = function(time) {
    let ball = this.getNode('ball');
    let paddle1 = this.getNode('paddleOne');
    let paddle2 = this.getNode('paddleTwo');
    let score1 = this.getNode("scoreOne");
    let score2 = this.getNode("scoreTwo");

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
    }

    //Inverse y direction if ball hits top or bottom border.
    if(ball.y - ball.r <= 0 || ball.y + ball.r >= this.height) {
        ball.directionY = -ball.directionY;
    }

    //Check if ball has reached the enemy team's goal. If so, add points and reset ball position.
    if((ball.x + ball.r) > this.width) {
        score1.score += 1;
        console.log('Player 1 Score: ' + score1.score);
        initBall(this);
    } else if((ball.x - ball.r) < 0) {
        score2.score += 1;
        console.log('Player 2 Score: ' + score2.score);
        initBall(this);
    }
};

app.pause = function() {
    if(this.idStop) {
        cancelAnimationFrame(this.idStop);
        this.idStop = null;
    } else {
        this.idStop = window.requestAnimationFrame(this.render.bind(this));
    }
};

app.reset = function() {
    cancelAnimationFrame(this.idStop);
    window.requestAnimationFrame(this.render.bind(this));
    this.onInit();
};