'use strict';
const pepole = document.querySelector('.pepole');
const block = document.querySelector('.block');
const block_2 = document.querySelector('.block_2');
const Up = document.querySelector('.fa-caret-square-up');
const Down = document.querySelector('.fa-caret-square-down')

function keyboardJump(){
  if(pepole.classList !== 'jump'){                              // 점프를 하지 않을때
    pepole.classList.add('jump');                               // 점프 모션 실행
    Up.classList.add('up');                                     // 위 화살표 표시
  }
  setTimeout(() =>  pepole.classList.remove('jump'),700);       // 점프 이후 다시 점프 하기위해 삭제
  setTimeout(() =>   Up.classList.remove('up'),700);            // 점프 이후 다시 본래의 색 변환
}

function keyboardSliding(){
  if(pepole.classList !== 'sliding'){                           // 슬라이딩을 안할때
    pepole.classList.add('sliding');                            // 슬라이딩 모션 가능
    Down.classList.add('down');                                   // 아래화살표 표시
  }
  setTimeout(() =>  pepole.classList.remove('sliding'),700);    // 슬라이딩 이후 다시 슬라이딩 하기위해 삭제
  setTimeout(() =>   Down.classList.remove('down'),700);            // 슬라이딩 이후 다시 본래의 색 변환
}

function keyboard() {         
  if (window.event.keyCode == 38) {                             // 위 화살표 키코드
    keyboardJump();
  } 
  else if(window.event.keyCode == 40){                          // 아래화살표 키코드
    keyboardSliding();
  }
}


function init(){
  window.addEventListener("keydown" ,keyboard);                 // 위 화살표 입력시 이벤트 호출
  window.addEventListener("keydown" ,keyboard);                 // 아래화살표 입력시 이벤트 호출
}
init();


