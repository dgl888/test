import { app } from './app.js'
import { getNodes } from './getNodes.js';

export function resetNodes() {
    let [ball, paddleOne, paddleTwo, scoreOne, scoreTwo, halfCourt, powerup] = getNodes();

    paddleOne.height = 200;
    paddleTwo.height = 200;
}