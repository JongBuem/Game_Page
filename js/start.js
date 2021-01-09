'use strict';   
const startBtn = document.querySelector('.startbtn');
const startpage = document.querySelector('.start');
const gamepage = document.querySelector('.gamepage');
const rankBtn = document.querySelector('.rankbtn');
const rankBox  = document.querySelector('.rankbox');
const mainBtn = document.querySelector('.mainbtn');
const clock = document.querySelector('.colock');
const ballOne = document.querySelector('.block');
const ballTwo = document.querySelector('.block_2');
const ballThree = document.querySelector('.block_3');
let seconds = 0;                                        // 초 변수
let minutes = 0;                                        // 분 변수
const topArray = [0,-50,-100,-150];                     // 공의 위치 배열

function BallThree(){
    const random = Math.floor(Math.random()* 5);        // 0~4까지 정수를 랜덤으로 획득
    ballThree.style.top = topArray[random] + "px";      // 공3의 높이를 배열과 랜덤함수를통해 지정
}

function BallTwo(){
    const random = Math.floor(Math.random()* 5);        // 0~4까지 정수를 랜덤으로 획득
    ballTwo.style.top = topArray[random] + "px";        // 공2의 높이를 배열과 랜덤함수를통해 지정
}

function BallOne(){
    const random = Math.floor(Math.random()* 5);        // 0~4까지 정수를 랜덤으로 획득
    ballOne.style.top = topArray[random] + "px";        // 공1의 높이를 배열과 랜덤함수를통해 지정
}

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

function start() {                                      // start 클릭시 화면전환과 게임시작
    startpage.classList.add('page_back');
    gamepage.classList.remove('gamepage');              
    getClock();                                         // 시간함수 호출
    setInterval(getClock,1000);                         // 1초마다 갱신하기위함
    setInterval(BallOne,1020);                          // 1초마다 공1의 위치갱신
    setInterval(BallTwo,2020);                          // 2초마다 공2의 위치갱신
    setInterval(BallThree,3020);                        // 3초마다 공3의 위치갱신
}

function  init() {      
    startBtn.addEventListener('click',start);           // srart 클릭시 이벤트 호출
    rankBtn.addEventListener('click',ranking);          // ranking 클릭시 이벤트 호출
    mainBtn.addEventListener('click',main);             // main 클릭시 이벤트 호출
    
}       
init();

