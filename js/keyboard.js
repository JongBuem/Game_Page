'use strict';
const pepole = document.querySelector('.pepole');
const block = document.querySelector('.block');
const block_2 = document.querySelector('.block_2');

function keyboardJump(){
  if(pepole.classList !== 'jump'){   // 두번 클릭시
    pepole.classList.add('jump');
  }
  setTimeout(() =>  pepole.classList.remove('jump'),700); 
}

function keyboardSliding(){
  if(pepole.classList !== 'sliding'){   // 두번 클릭시
    pepole.classList.add('sliding');
  }
  setTimeout(() =>  pepole.classList.remove('sliding'),700); 
}

function keyboardSpacekey() {
  if (window.event.keyCode == 38) {
    keyboardJump();
  } 
}

function keyboardDownkey() {
  if (window.event.keyCode == 40) {
    keyboardSliding();
  } 
}

function init(){
  window.addEventListener("keydown" ,keyboardSpacekey);
  window.addEventListener("keydown" ,keyboardDownkey);
}
init();


