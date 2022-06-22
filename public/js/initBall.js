import { app } from './app.js';
import { getNodes } from './getNodes.js';

const increaseRange = 5;
const minRange = -2;
const maxRange = 2;

export function initBall() {
    let [ball, paddleOne, paddleTwo, scoreOne, scoreTwo, halfCourt, powerup] = getNodes();
    let modifier1 = (Math.random() > .5) ? 1 : -1;
    let modifier2 = (Math.random() > .5) ? 1 : -1;
    let ballSpeed = 20;
    let ballDirX = (ballSpeed/2) * modifier1;
    let ballDirY = Math.random() * ballSpeed * modifier2;
    let outOfRangeCheck = ballDirX > minRange && ballDirX < maxRange;
    let midWidth = app.width/2 - ball.width/2;
    let midHeight = app.height/2;

    ball.x = midWidth;
    ball.y = midHeight - ball.height/2;
    ball.speed = ballSpeed;
    ball.directionX = ballDirX;
    ball.directionY = ballDirY;
}