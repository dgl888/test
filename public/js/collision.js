export function collisionCheck (ball, paddle) {

   //Ball hitbox calculations
    ball.topSide = ball.y - ball.r;
    ball.bottomSide = ball.y + ball.r;
    ball.leftSide = ball.x - ball.r;
    ball.rightSide = ball.x + ball.r;

    //Paddle hitbox calculations
    paddle.topSide = paddle.y;
    paddle.bottomSide = paddle.y + paddle.height;
    paddle.leftSide = paddle.x;
    paddle.rightSide = paddle.x + paddle.width;

    return (ball.rightSide > paddle.leftSide) && (ball.topSide < paddle.bottomSide) && (ball.leftSide < paddle.rightSide) && (ball.bottomSide > paddle.topSide);
}