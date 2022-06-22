import { getNodes } from './getNodes.js';

export function hitPowerup () {
    let [ball, paddleOne, paddleTwo, scoreOne, scoreTwo, halfCourt, powerup] = getNodes();
    return (ball.rightSide > powerup.leftSide) && (ball.topSide < powerup.bottomSide) && (ball.leftSide < powerup.rightSide) && (ball.bottomSide > powerup.topSide)
}