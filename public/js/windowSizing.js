import {app} from './app.js'
import { getNodes } from './getNodes.js';

//I added a margin so that the screen wouldn't have a vertical scroll.
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

    //Move the second paddle to the proper location.
    paddleTwo.x = app.width - paddleTwo.width;
    ball.x = app.width/2 - ball.width/2;
}