'use strict';   
const rank = document.querySelector('.rank');
const array =[];

function rankText(array) {
    const arrayText = array.join("\n");
    rank.innerText=arrayText;
}

function rankArray(){
    for(let i=0; i<localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        array[i] = `${key}: ${value}`;
    }
    rankText(array);
}

function init(){
    rankArray();
}
init(); 