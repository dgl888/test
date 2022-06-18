import { app } from './app.js';
import { getNodes } from './getNodes.js';

const ballSpeed = 20;
const increaseRange = 5;
const minRange = -2;
const maxRange = 2;

export function initBall(app) {
    let [ball, paddleOne, paddleTwo, scoreOne, scoreTwo, halfCourt] = getNodes();
    let ballDirX = Math.random() * ballSpeed;
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