'use strict';
const pepoleOver = document.querySelector('.pepole');
const blockOver = document.querySelector('.block');
const block_2Over = document.querySelector('.block_2');


const blockOverBom = setInterval(()=>{
  const pepoleTop = parseInt(window.getComputedStyle(pepoleOver).getPropertyValue("top"));
  const blockLeft = parseInt(window.getComputedStyle(blockOver).getPropertyValue("left"));   
  if(blockLeft<70 && pepoleTop>=150 ){
    gameOver();
  }  
},10);

const block_2OverBom = setInterval(()=>{
  const pepoleTop = parseInt(window.getComputedStyle(pepoleOver).getPropertyValue("top"));
  const blockLeft = parseInt(window.getComputedStyle(block_2Over).getPropertyValue("left"));
  if(blockLeft<70 && pepoleTop<=150){
    gameOver();
  } else if(blockLeft<70 &&  pepoleTop > 150 && pepoleTop < 80){
    gameOver();
  } 
},10);


function gameOver(){
  blockOver.style.animation = 'none';
  blockOver.style.display ='none';
  block_2Over.style.animation = 'none';
  block_2Over.style.display ='none';
  gameOverAlert();
  history.go(0);
}

function gameOverAlert() {
  let name;
  const person = prompt(`clock : ${clock.innerText}\nPlease enter your name :`, "User");
  if (person == null || person == ""  ? name = "User"  : name = person); 
  gameSave(clock.innerText,name);
}

function gameNewSave(clock,NAME){
  localStorage.setItem(NAME,clock);
}

function gameupdate(clock,NAME){
  const save = localStorage.getItem(NAME);
  if(save < clock){
    localStorage.setItem(NAME,clock);
  }
}

function gameSave(clock,NAME){
  const save = localStorage.getItem(NAME);
  if(save === null ? gameNewSave(clock,NAME)  : gameupdate(clock,NAME));
}





