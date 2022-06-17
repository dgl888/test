import { app } from './app.js'
import { getNodes } from './getNodes.js';

export function keepPaddlesWithinCanvas(){
    let [ball, paddleOne, paddleTwo, scoreOne, scoreTwo, halfCourt] = getNodes();

    if(paddleOne.y < 0 ) paddleOne.y = 0;
    if(paddleOne.y >= app.height - paddleOne.height) paddleOne.y = app.height - paddleOne.height;

    if(paddleTwo.y < 0) paddleTwo.y = 0;
    if(paddleTwo.y >= app.height - paddleTwo.height) paddleTwo.y = app.height - paddleTwo.height;
}