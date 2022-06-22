import { app } from './app.js'
import { getNodes } from './getNodes.js';
import { initBall } from './initBall.js';

export function updateScore() {
    let [ball, paddleOne, paddleTwo, scoreOne, scoreTwo, halfCourt, powerup] = getNodes();

    if((ball.x + ball.width) > app.width) {
        scoreOne.score += 1;
        console.log('Player 1 Score: ' + scoreOne.score);
        initBall();
    } else if((ball.x) < 0) {
        scoreTwo.score += 1;
        console.log('Player 2 Score: ' + scoreTwo.score);
        initBall();
    }
}