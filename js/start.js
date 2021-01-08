'use strict';   
const startBtn = document.querySelector('.startbtn');
const startpage = document.querySelector('.start');
const gamepage = document.querySelector('.gamepage');
const rankBtn = document.querySelector('.rankbtn');
const rankBox  = document.querySelector('.rankbox');
const mainBtn = document.querySelector('.mainbtn');
const clock = document.querySelector('.colock');
let seconds = 0;
let minutes = 0;

function getClock() {                                   // 스타트버튼과 함께 시간증가와 출력
    if(seconds <59){                                    // 58초에서
        seconds =seconds + 1;                           // 1을더하고
    } else if(seconds == 59){                           // 59초가 되었을때
        seconds = 0;                                    // 초를 0으로 초기화
        minutes = minutes+1;                            // 1분 추가
    }
    clock.innerText =                                   // 경과시간을 화면에 출력
    `${minutes < 10 ? `0${minutes}` : minutes} : ${
        seconds < 10 ? `0${seconds}` : seconds}`;
}

function main() {                                       // main 클릭시 
    history.go(0);                                      // 새로고침
}

function ranking() {                                    // ranking 클릭시  
    rankBox.classList.remove('list')                    // 리스트가 나타남
}

function start() {                                      // start 클릭시 화면전환과 시간함수호출
    startpage.classList.add('page_back');
    gamepage.classList.remove('gamepage');              
    getClock();                                         // 시간함수 호출
    setInterval(getClock,1000);                         // 1초마다 갱신하기위함
}

function  init() {      
    startBtn.addEventListener('click',start);           // srart 클릭시 이벤트 호출
    rankBtn.addEventListener('click',ranking);          // ranking 클릭시 이벤트 호출
    mainBtn.addEventListener('click',main);             // main 클릭시 이벤트 호출
}       
init();