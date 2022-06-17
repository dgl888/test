import { app } from './app.js'
import { getNodes } from './getNodes.js';

const heightMargin = 12;
const widthMargin = 10;

export function resizeWindow() {
    let height = window.innerHeight;
    let width = window.innerWidth;
    let canvas = document.getElementById('canvas');
    let [ball, paddleOne, paddleTwo, scoreOne, scoreTwo, halfCourt] = getNodes();


    canvas.width = width - widthMargin;
    canvas.height = height - heightMargin;
    app.width = width - widthMargin;
    app.height = height - heightMargin;

    paddleTwo.x = app.width - paddleTwo.width;
    ball.x = app.width/2 - ball.width/2;
    halfCourt.x = app.width/2;
    halfCourt.height = app.height;
}