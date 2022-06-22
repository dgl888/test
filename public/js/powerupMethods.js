import { app } from './app.js'
import { getNodes } from './getNodes.js';

export function doPowerupAbility(abilityType, paddle) {
    let [ball, paddleOne, paddleTwo, scoreOne, scoreTwo, halfCourt, powerup] = getNodes();

    if(abilityType == 'IncreasePaddleSize'){
        paddle.height = paddle.height * 2;
    }
}

export function updatePowerup () {
    let [ball, paddleOne, paddleTwo, scoreOne, scoreTwo, halfCourt, powerup] = getNodes();

    if((powerup.visible == false)) {
        powerup.x = ((Math.random() - 0.5) * app.width/1.5) + app.width/2;
        powerup.y = ((Math.random() - 0.5) * app.height/2) + app.height/2;
        powerup.width = 10;
        powerup.height = app.height/5;
        powerup.timeActive = 0;

        powerup.topSide = powerup.y;
        powerup.bottomSide = powerup.height + powerup.y;
        powerup.leftSide = powerup.x;
        powerup.rightSide = powerup.width + powerup.x;
    } else if (powerup.visible == true) {
        powerup.x = 10000;
        powerup.y = 10000;
        powerup.width = 0;
        powerup.height = 0;
        powerup.active = true;

        powerup.topSide = undefined;
        powerup.bottomSide = undefined;
        powerup.leftSide = undefined;
        powerup.rightSide = undefined;
    }
}

export function activatePowerup () {
    let [ball, paddleOne, paddleTwo, scoreOne, scoreTwo, halfCourt, powerup] = getNodes();

    if((powerup.visible == false)) {
        updatePowerup();
        powerup.visible = true;
    }
}

export function hitPowerup () {
    let [ball, paddleOne, paddleTwo, scoreOne, scoreTwo, halfCourt, powerup] = getNodes();
    return (ball.rightSide > powerup.leftSide) && (ball.topSide < powerup.bottomSide) && (ball.leftSide < powerup.rightSide) && (ball.bottomSide > powerup.topSide)
}