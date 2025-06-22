'use strict'

function onBallClick(elBall){
    const currentWidth = parseInt(getComputedStyle(elBall).width);
    const currentHeight = parseInt(getComputedStyle(elBall).height);


    var newWidth = currentWidth + getRandomInt(20, 60);
    var newHeight = currentHeight + getRandomInt(20, 60);

    if(newWidth+newHeight > 400){
        newWidth = 50
        newHeight = 50
    }


    elBall.style.width = newWidth + 'px';
    elBall.style.height = newHeight + 'px';

    elBall.querySelector('span').innerText = `${newWidth+newHeight}`;
    elBall.style.backgroundColor = getRandomColor();

}

