import { playSound } from './playSound.js';
import { getNodes } from './getNodes.js';

export function collisionCheck (paddle) {
    let [ball, paddleOne, paddleTwo, scoreOne, scoreTwo, halfCourt] = getNodes();

    ball.topSide = ball.y - ball.r;
    ball.bottomSide = ball.y;
    ball.leftSide = ball.x - ball.r;
    ball.rightSide = ball.x + ball.width;

    paddle.topSide = paddle.y;
    paddle.bottomSide = paddle.y + paddle.height;
    paddle.leftSide = paddle.x;
    paddle.rightSide = paddle.x + paddle.width;

    return (ball.rightSide > paddle.leftSide) && (ball.topSide < paddle.bottomSide) && (ball.leftSide < paddle.rightSide) && (ball.bottomSide > paddle.topSide);
}