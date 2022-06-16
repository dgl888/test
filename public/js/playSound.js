const bounceSound = new Audio('./soundEffects/bounceSound.mp3');
const scrollOneSound = new Audio('./soundEffects/paddleOneMove.mp3');
const scrollTwoSound = new Audio('./soundEffects/paddleTwoMove.mp3');

export function playSound(type) {
    switch (type) {
        case "bounce":
            bounceSound.play();
            break;
        case "scrollOne":
            scrollOneSound.play();
            break;
        case "scrollTwo":
            scrollTwoSound.play();
            break;
    }
}