import { app } from './app.js';
import { getNodes } from './getNodes.js';

const increaseRange = 5;
const minRange = -2;
const maxRange = 2;

export function initBall() {
    let [ball, paddleOne, paddleTwo, scoreOne, scoreTwo, halfCourt] = getNodes();
    let ballSpeed = (Math.random() > .5) ? 20 : -20;
    let ballDirX = ballSpeed/1.1;
    let ballDirY = Math.random() * ballSpeed;
    let outOfRangeCheck = ballDirX > minRange && ballDirX < maxRange;
    let midWidth = app.width/2 - ball.width/2;
    let midHeight = app.height/2;

    ball.x = midWidth;
    ball.y = midHeight - ball.height/2;
    ball.speed = ballSpeed;
    ball.directionX = ballDirX;
    ball.directionY = ballDirY;
}