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

function changeOthersColors(thirdBall){
    const elBalls = document.querySelectorAll('.ball1, .ball2');
    for(var i = 0; i < elBalls.length; i++) {
        onBallClick(elBalls[i])
    }
}
function reduceDiameterOfOthers(forthBall){
    const elBalls = document.querySelectorAll('.ball1, .ball2');
    for(var i = 0; i < elBalls.length; i++) {
            const currentWidth = parseInt(getComputedStyle(elBalls[i]).width);
            const currentHeight = parseInt(getComputedStyle(elBalls[i]).height);

            var newWidth = currentWidth - getRandomInt(20, 60);
            var newHeight = currentHeight - getRandomInt(20, 60);

            if(newWidth < 50 || newHeight < 50){
                newWidth = 50;
                newHeight = 50;
            }

            elBalls[i].style.width = newWidth + 'px';
            elBalls[i].style.height = newHeight + 'px';
            elBalls[i].querySelector('span').innerText = `${newWidth+newHeight}`;
        } 
}

function changePageColor(){
    document.querySelector('body').style.backgroundColor = getRandomColor();
}




