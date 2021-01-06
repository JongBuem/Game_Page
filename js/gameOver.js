'use strict';
const pepoleOver = document.querySelector('.pepole');
const blockOver = document.querySelector('.block');
const block_2Over = document.querySelector('.block_2');
const rankText = document.querySelector('.rank');
const form = document.querySelector('.form');
const nameInput = form.querySelector('input');
let NAME = "clock";


const blockOverBom = setInterval(()=>{
  const pepoleTop = parseInt(window.getComputedStyle(pepoleOver).getPropertyValue("top"));
  const blockLeft = parseInt(window.getComputedStyle(blockOver).getPropertyValue("left"));   
  if(blockLeft<70 && blockLeft>40 && pepoleTop==150 ){
    gameOver(blockOver);
  }  
},10);

const block_2OverBom = setInterval(()=>{
  const pepoleTop = parseInt(window.getComputedStyle(pepoleOver).getPropertyValue("top"));
  const blockLeft = parseInt(window.getComputedStyle(block_2Over).getPropertyValue("left"));
  if(blockLeft<70 && blockLeft>40 && pepoleTop==150 ){
    gameOver(block_2Over);
  } else if(blockLeft<70 && blockLeft>40 && pepoleTop>150 && pepoleTop < 80){
    gameOver(block_2Over);
  } 
},10);

function gameOver(block){
    block.style.animation = 'none';
    block.style.display ='none';
    alert(clockTitle.innerText);
    gameSave(clockTitle.innerText);
    history.go(0);
}

function save(clock){
    localStorage.setItem(NAME,clock);
    rankText.innerHTML=clock;
}

function update(clock){
    const savefile = localStorage.getItem(NAME,clock);
    if(savefile < clock){
        localStorage.setItem(NAME,clock);
        rankText.innerHTML=clock;
    }
    else{
        rankText.innerHTML=savefile;
    }
}

function gameSave(clock){
   const savefile = localStorage.getItem(NAME);
   if(savefile === null){
       save(clock);
   } else {
       update(clock);
   }
}

function inputt(event){
    event.preventDefault(); 
    const naem = nameInput.value;
    nameInput.value = "";  
    return naem;
}                                       // 함수호출(1)

function init(){                                               // 함수호출(1)
    nameInput.addEventListener('submit', inputt);                     // 두번째 입력창에서 양식이 제출되면 함수호출(2)
}
init();