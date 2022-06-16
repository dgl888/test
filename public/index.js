import { app } from './js/app.js';
import { keybindings } from './js/app.js';
import { resizeWindow } from './js/app.js';
import { collisionCheck } from './js/collision.js';
import { initBall } from './js/initBall.js';
import { getNodes } from './js/getNodes.js';
import { playSound } from './js/playSound.js';

app.onInit = function() {
    const paddleWidth = 40;
    const paddleHeight = 200;
    const paddleY = app.height/2 + paddleHeight/2;
    const ballWidth = 50;
    const ballHeight = 50;
    const ballRadius = 20;

    resizeWindow();

    this.nodes.push({
        id : 'ball',
        x : canvas.width/2 + ballWidth/2,
        y : canvas.height/2 + ballHeight/2,
        width  : ballWidth,
        height : ballHeight,
        color  : 'red',
        r: ballRadius,
        previousDirX: 0,
        previousDirY: 0
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
    let [ball, paddleOne, paddleTwo, scoreOne, scoreTwo] = getNodes();

    let whichSide = ball.x < (this.width / 2);
    let paddle = whichSide ? paddleOne : paddleTwo;

    if(paddleOne.y < 0 ) paddleOne.y = 0;
    if(paddleOne.y >= this.height - paddleOne.height) paddleOne.y = this.height - paddleOne.height;

    if(paddleTwo.y < 0) paddleTwo.y = 0;
    if(paddleTwo.y >= this.height - paddleTwo.height) paddleTwo.y = this.height - paddleTwo.height;

    ball.x += ball.directionX;
    ball.y += ball.directionY;

    if(collisionCheck(ball, paddle)) {
        let collisionPoint = (ball.y - (paddle.y + paddle.height/2)) / (paddle.height/2);
        let angle = collisionPoint * (Math.PI/4);
        let direction = (ball.x < this.width/2 ) ? 1 : -1;

        playSound("bounce");

        ball.directionX = direction * ball.speed * Math.cos(angle);
        ball.directionY = direction * ball.speed * Math.sin(angle);
    }

    if(ball.y - ball.r <= 0 || ball.y + ball.r >= this.height) {
        ball.directionY = -ball.directionY;
    }

    if((ball.x + ball.r) > this.width) {
        scoreOne.score += 1;
        console.log('Player 1 Score: ' + scoreOne.score);
        initBall(this);
    } else if((ball.x - ball.r) < 0) {
        scoreTwo.score += 1;
        console.log('Player 2 Score: ' + scoreTwo.score);
        initBall(this);
    }
};

app.reset = function() {
    let [ball, paddleOne, paddleTwo, scoreOne, scoreTwo] = getNodes();

    ball.x = canvas.width/2;
    ball.y = canvas.height/2;

    paddleOne.y = paddleTwo.y = (canvas.height/2) - (canvas.height * 0.2)/2;
    scoreOne.score = 0;
    scoreTwo.score = 0;

    initBall(this);
    app.pause();
};

app.pause = function() {
    let [ball, paddleOne, paddleTwo, scoreOne, scoreTwo] = getNodes();

    if (ball.speed == 0) {
        ball.directionX = ball.previousDirX;
        ball.directionY = ball.previousDirY;
        ball.speed = 5;
    } else if (ball.speed != 0) {
        ball.previousDirX = ball.directionX;
        ball.previousDirY = ball.directionY;
        ball.speed = 0;
        ball.directionY = 0;
        ball.directionX = 0;
    }
};