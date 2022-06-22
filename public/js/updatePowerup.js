import { app } from './app.js'
import { getNodes } from './getNodes.js';

export function updatePowerup () {
    let [ball, paddleOne, paddleTwo, scoreOne, scoreTwo, halfCourt, powerup] = getNodes();

    if((powerup.active == false)) {
            powerup.x = app.width/3;
            powerup.y = app.height/3;
            powerup.width = 10;
            powerup.height = app.height/4;
    } else if (powerup.active == true) {
        powerup.x = 10000;
        powerup.y = 10000;
        powerup.width = 0;
        powerup.height = 0;
    }

}