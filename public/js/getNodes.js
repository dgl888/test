import { app } from './app.js';

export function getNodes() {
    const ball = app.getNode('ball');
    const paddleOne = app.getNode("paddleOne");
    const paddleTwo = app.getNode("paddleTwo");
    const scoreOne = app.getNode("scoreOne");
    const scoreTwo = app.getNode("scoreTwo");
    const halfCourt = app.getNode("halfCourt");

    return [ball, paddleOne, paddleTwo, scoreOne, scoreTwo, halfCourt];
}