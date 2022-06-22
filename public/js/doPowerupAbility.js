import { app } from './app.js'
import { getNodes } from './getNodes.js';

export function doPowerupAbility(abilityType, paddle) {
    let [ball, paddleOne, paddleTwo, scoreOne, scoreTwo, halfCourt, powerup] = getNodes();

    if(abilityType == 'IncreasePaddleSize'){
        paddle.height = paddle.height * 2;
    }
}