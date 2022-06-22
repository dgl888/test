import { app } from './app.js'
import { getNodes } from './getNodes.js';

export function updatePowerup () {
    let [ball, paddleOne, paddleTwo, scoreOne, scoreTwo, halfCourt, powerup] = getNodes();

    if((powerup.active == false)) {
        powerup.x = app.width/3;
        powerup.y = app.height/3;
        powerup.width = 10;
        powerup.height = app.height/4;

        powerup.topSide = powerup.y;
        powerup.bottomSide = powerup.height + powerup.y;
        powerup.leftSide = powerup.x;
        powerup.rightSide = powerup.width + powerup.x;
    } else if (powerup.active == true) {
        powerup.x = 10000;
        powerup.y = 10000;
        powerup.width = 0;
        powerup.height = 0;
        powerup.active = false;

        powerup.topSide = undefined;
        powerup.bottomSide = undefined;
        powerup.leftSide = undefined;
        powerup.rightSide = undefined;
    }

}