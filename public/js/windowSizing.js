import {app} from './app.js'

export function resizeWindow(e) {
    let heigth = window.innerHeight;
    let width = window.innerWidth;

    canvas.width = width
    canvas.height = heigth
    app.width = width
    app.height = heigth
}