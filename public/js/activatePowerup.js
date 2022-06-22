import { app } from './app.js'
import { getNodes } from './getNodes.js';
import { updatePowerup } from './updatePowerup.js';

export function activatePowerup () {
    let [ball, paddleOne, paddleTwo, scoreOne, scoreTwo, halfCourt, powerup] = getNodes();

    if((powerup.visible == false)) {
        updatePowerup();
        powerup.visible = true;
    }
}