const minStart = -10;
const maxStart = 10;
const ballSpeed = 20;
const increaseRange = 5;
const minRange = -2;
const maxRange = 2;

export function initBall(app) {
    const midWidth = app.width/2;
    const midHeight = app.height/2;
    const ball = app.getNode("ball");
    let ballDirX = Math.random() * (maxStart - minStart) + minStart;
    let ballDirY = Math.random() * (maxStart - minStart) + minStart;
    let outOfRangeCheck = ballDirX > minRange && ballDirX < maxRange;

    ball.x = midWidth;
    ball.y = midHeight - ball.height/2;
    ball.speed = ballSpeed;
    ball.directionX = outOfRangeCheck ? ballDirX + increaseRange : ballDirX;
    ball.directionY = ballDirY;
}