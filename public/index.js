import { keybindings } from './js/app'

app.onInit = function(){
    this.nodes.push({
        id : 'ball',
        x  : 100,
        y  : 0,
        width  : 100,
        height : 100,
        color  : 'red',
        direction : 0
    });

    this.nodes.push({
        id : 'paddleOne',
        x  : 50,
        y  : 0,
        width  : 150,
        height : 150,
        color  : 'black'
    });

    this.nodes.push({
        id : 'paddleTwo',
        x  : 50,
        y  : 0,
        width  : 150,
        height : 150,
        color  : 'black'
    });

    document.addEventListener("keydown", keybindings);
};

app.onUpdate = function(time){
    this.getNode('paddleOne').y++;

    if(Math.cos(this.timestamp / 100) > 0){
        this.getNode('ball').direction = -1;
    }else{
        this.getNode('ball').direction = 1;
    }

    this.getNode('ball').x+=this.getNode('ball').direction;
};