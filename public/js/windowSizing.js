import {app} from './app.js'

//I added a margin so that the screen wouldn't have a vertical scroll.
const heightMargin = 40;

export function resizeWindow(e) {
    let heigth = window.innerHeight;
    let width = window.innerWidth;
    let canvas = document.getElementById('canvas');

    canvas.width = width;
    canvas.height = heigth - heightMargin;
    app.width = width;
    app.height = heigth - heightMargin;
}