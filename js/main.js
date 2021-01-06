'use strict';
const pepole = document.querySelector('.pepole');
const block = document.querySelector('.block');
const block_2 = document.querySelector('.block_2');


function jump(){
  if(pepole.classList !== 'jump'){   // 두번 클릭시
    pepole.classList.add('jump');
  }
  setTimeout(() =>  pepole.classList.remove('jump'),700); 
}

function sliding(){
  if(pepole.classList !== 'sliding'){   // 두번 클릭시
    pepole.classList.add('sliding');
  }
  setTimeout(() =>  pepole.classList.remove('sliding'),700); 
}

function spacekey() {
  if (window.event.keyCode == 38) {
    jump();
  } 
 }

 function downkey() {
  if (window.event.keyCode == 40) {
    sliding();
  } 
 }


function init(){
  window.addEventListener("keydown" ,spacekey);
  window.addEventListener("keydown" ,downkey);
}
init();


