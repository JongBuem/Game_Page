'use strict'; 
const clockTitle = document.querySelector('.colock');
let seconds = 0;
let minutes = 0;

function getTime() {
    if(seconds <59){
        seconds =seconds + 1;
    } else if(seconds == 59){
         seconds = 0;
        minutes = minutes+1;
    }
    clockTitle.innerText = `${minutes < 10 ? `0${minutes}` : minutes} : ${
        seconds < 10 ? `0${seconds}` : seconds}`;
}


function init(){
    getTime();
    setInterval(getTime,1000);
}

init();