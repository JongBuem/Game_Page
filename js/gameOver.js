'use strict';
const pepoleOver = document.querySelector('.pepole');
const blockOne = document.querySelector('.block');
const blockTwo = document.querySelector('.block_2');
const blockThree = document.querySelector('.block_3');

const blockOverBom = setInterval(()=>{
  const pepoleLeft = parseInt(window.getComputedStyle(pepoleOver).getPropertyValue("left"));    // 캐릭터의 가로거리
  const pepoleTop = parseInt(window.getComputedStyle(pepoleOver).getPropertyValue("top"));      // 캐릭터의 높이
  const blockLeft = parseInt(window.getComputedStyle(blockOne).getPropertyValue("left"));       // 공1의 가로거리
  const blockTop = parseInt(window.getComputedStyle(blockOne).getPropertyValue("top"));         // 공1의 높이
  const block_2Left = parseInt(window.getComputedStyle(blockTwo).getPropertyValue("left"));     // 공2의 가로거리
  const block_2Top = parseInt(window.getComputedStyle(blockTwo).getPropertyValue("top"));       // 공2의 높이
  const block_3Left = parseInt(window.getComputedStyle(blockThree).getPropertyValue("left"));   // 공3의 가로거리
  const block_3Top = parseInt(window.getComputedStyle(blockThree).getPropertyValue("top"));     // 공3의 높이
  if(blockLeft <= pepoleLeft && pepoleTop===blockTop){                                          // 공1이 캐릭터와 만나고 같은 높이일때
    gameOver();                                                                                 // 게임오버                                                                           
  } 
  else if(block_2Left <= pepoleLeft && pepoleTop===block_2Top){                                 // 공2이 캐릭터와 만나고 같은 높이일때
    gameOver();                                                                                 // 게임오버
  } 
  else if(block_3Left <= pepoleLeft && pepoleTop===block_3Top){                                 // 공3이 캐릭터와 만나고 같은 높이일때
    gameOver();                                                                                 // 게임오버
  }  else{
  }
},10);

function gameOver(){                                            
  blockOne.style.animation = 'none';                                                            // 공1~3의 모션과 존재를 지움
  blockOne.style.display ='none';
  blockTwo.style.animation = 'none';
  blockTwo.style.display ='none';
  blockThree.style.animation = 'none';                                                        
  blockThree.style.display ='none';                                                             // 공1~3의 모션과 존재를 지움
  history.go(0);                                                                                // 새로고침
  gameOverAlert();                                                                              // 경고창을 불러오는 함수
}

function gameOverAlert() {
  let name;                                                                                     
  const person = prompt(`clock : ${clock.innerText}\nPlease enter your name :`, "User");        // 경고창의 메세지
  if (person == null || person == ""  ? name = "User"  : name = person);                        // 경고창에 유저 이름 입력
  gameSave(clock.innerText,name);                                                               // 유저이름과 시간을 인자로 호출
}

function gameNewSave(clock,NAME){                                                               // 기존 유저 정보가 없을때
  localStorage.setItem(NAME,clock);                                                             // 새로운 정보를 localStorage에 저장
}

function gameupdate(clock,NAME){                                                                // 기존 유저 정보가 있을때
  const save = localStorage.getItem(NAME);                                                      // 기존 유저의 기록을 보고
  if(save < clock){                                                                             // 갱신한 기록이 더 크다면
    localStorage.setItem(NAME,clock);                                                           // 갱신한 기록으로 정보를 바꾼다
  }
}

function gameSave(clock,NAME){                                                                  // 유저이름과 시간 값을 가지고
  const save = localStorage.getItem(NAME);                                                      // 유저이름을 불러와
  if(save === null ? gameNewSave(clock,NAME)  : gameupdate(clock,NAME));                        // 유저이름의 존재유무를 확인
}
