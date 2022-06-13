import {app} from './app.js'
import { getNodes } from './getNodes.js';

const heightMargin = 40;
const widthMargin = 20;

export function resizeWindow(e) {
    let heigth = window.innerHeight;
    let width = window.innerWidth;
    let canvas = document.getElementById('canvas');
    let [ball, paddleOne, paddleTwo, scoreOne, scoreTwo] = getNodes();


    canvas.width = width - widthMargin;
    canvas.height = heigth - heightMargin;
    app.width = width - widthMargin;
    app.height = heigth - heightMargin;

    paddleTwo.x = app.width - paddleTwo.width;
    ball.x = app.width/2 - ball.width/2;
}