'use strict';
const pepole = document.querySelector('.pepole');
const block = document.querySelector('.block');
const block_2 = document.querySelector('.block_2');
const Up = document.querySelector('.fa-caret-square-up');
const Down = document.querySelector('.fa-caret-square-down');
const pepoleTOP = document.querySelector('.pepole');

function updowmImge(imge,className){
  imge.classList.add(className);                                                        // 방향 입력시 red색을 주고                          
  setTimeout(() => imge.classList.remove(className),700);                               // 다시 본래의 색을 준다
}

function keyboardUp(){                                                                  
  let pepole = parseInt(window.getComputedStyle(pepoleTOP).getPropertyValue("top"));    // 캐릭터의 높이 
  if(pepole>-150){                                                                      // 게임화면 내에서만
    pepoleTOP.style.top = pepole - 50+"px";                                             // 50씩 높이를 줄여 위로 올림
  }
  updowmImge(Up,'up');                                                                  // 화살표 이미지
}

function keyboardDown(){
  let pepole = parseInt(window.getComputedStyle(pepoleTOP).getPropertyValue("top"));    // 캐릭터의 높이 
  if(pepole<0){                                                                         // 게임화면 내에서만
    pepoleTOP.style.top = pepole + 50 +"px";                                            // 50씩 높이를 높여 아래로 내림
  }                       
  updowmImge(Down,'down');                                                              // 화살표 이미지
}

function keyboard() {         
  if (window.event.keyCode == 38) {                                                     // 위 화살표 키코드 확인
    keyboardUp();
  } 
  else if(window.event.keyCode == 40){                                                  // 아래 화살표 키코드 확인
    keyboardDown();
  }
}

function init(){
  window.addEventListener("keydown" ,keyboard);                                         // 위 화살표 입력시 이벤트 호출
  window.addEventListener("keydown" ,keyboard);                                         // 아래 화살표 입력시 이벤트 호출
}
init();