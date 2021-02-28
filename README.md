# :soccer: a.ball_game :soccer:

> 홈페이지주소 : [https://jongbuem.github.io/Game_Page/](https://jongbuem.github.io/Game_Page/)

## **목차**

- [동작화면](#1.-동작화면)
- [주요기능](#2.-주요기능)
- [코드리뷰](#3.-코드리뷰)
- [문제해결](#4.-문제해결)
- [사용기술](#5.-사용기술)

---

## **1. 동작화면**

![ezgif com-gif-maker](https://user-images.githubusercontent.com/75786010/104134550-abc2bf00-53cd-11eb-910c-4539837cc3bc.gif)

---

## **2. 주요기능**

- 키보드 방향키로 캐릭터 조작
- 게임오버시 기록 저장
- 위치에 따른 충돌
- 공의 위치 변화
- 시간측정
- 랭킹부여

---

## **3. 코드리뷰**

<br>

## 3-1 방향키 조작 :arrow_up_small: :arrow_down_small:

> 키보드 입력시 **keyCode**를 통해서 어떠한 입력인지 비교 확인

```js
function keyboard() {
  if (window.event.keyCode == 38) {             // 위 화살표 키코드 확인
    keyboardUp();
  } else if (window.event.keyCode == 40) {      // 아래 화살표 키코드 확인
    keyboardDown();
  }
}

function init() {
  window.addEventListener("keydown", keyboard); // 위 화살표 입력시 이벤트 호출
  window.addEventListener("keydown", keyboard); // 아래 화살표 입력시 이벤트 호출
}
init();
```

<br>

> 키보드 입력에 맞게 캐릭터의 **CSS높이** 값을 인자로 받아와 캐릭터 위치에 변화를 줌 <br> 키보드 화살표의 입력을 동적으로 보이기위해 **색 변화**를 추가

```js
function updowmImge(imge, className) {
  imge.classList.add(className);                                                      // 방향 입력시 red색을 주고
  setTimeout(() => imge.classList.remove(className), 700);                            // 다시 본래의 색을 준다
}

function keyboardUp() {
  let pepole = parseInt(
    window.getComputedStyle(pepoleTOP).getPropertyValue("top"));                      // 캐릭터의 높이
  if (pepole > -150) {                                                                // 게임화면 내에서만
    pepoleTOP.style.top = pepole - 50 + "px";                                         // 50씩 높이를 줄여 위로 올림
  }
  updowmImge(Up, "up");                                                               // 화살표 이미지
}

function keyboardDown() {
  let pepole = parseInt(window.getComputedStyle(pepoleTOP).getPropertyValue("top"));  // 캐릭터의 높이
  if (pepole < 0) {                                                                   // 게임화면 내에서만
    pepoleTOP.style.top = pepole + 50 + "px";                                         // 50씩 높이를 높여 아래로 내림
  }
  updowmImge(Down, "down");                                                           // 화살표 이미지
}
```

<br>

## 3-2 게임기록 저장 :video_game:

> 게임오버시 유저의 이름과 진행시간을 **localStorage에 저장** <br> **신규유저**일 경우 기록을 **추가**하고 **기존유저**일경우 **더높은 기록**을 갱신

```js
function gameOverAlert() {
  let name;
  const person = 
  prompt(`clock : ${clock.innerText}\nPlease enter your name :`,"User");   // 경고창의 메세지
  if (person == null || person == "" ? (name = "User") : (name = person)); // 경고창에 유저 이름 입력
  gameSave(clock.innerText, name);                                         // 유저이름과 시간을호출
}

function gameNewSave(clock, NAME) {                                         // 기존 유저 정보가 없을때
  localStorage.setItem(NAME, clock);                                        // 새로운 정보를 저장
}

function gameupdate(clock, NAME) {                                          // 기존 유저 정보가 있을때
  const save = localStorage.getItem(NAME);                                  // 기존 유저의 기록을 보고
  if (save < clock) {                                                       // 갱신한 기록이 더 크다면
    localStorage.setItem(NAME, clock);                                      // 갱신한 기록으로 정보를 바꾼다
  }
}

function gameSave(clock, NAME) {                                            // 유저이름과 시간 값을 가지고
  const save = localStorage.getItem(NAME);                                  // 유저이름을 불러와
  if (save === null ? gameNewSave(clock, NAME) : gameupdate(clock, NAME));  // 유저이름의 존재유무를 확인
}
```

<br>

## 3-3 위치에 따른 충돌 :boom:

> CSS 높이와 거리를 값을 인자로 받아와 캐릭터와 공\*3와 **높이와 거리가 같을시 충돌** <br>충돌과 함께 모든 모션과 이미지를 지우고 유저의 이름을 입력하게 지정

```js
const blockOverBom = setInterval(() => {
  const pepoleLeft = parseInt(window.getComputedStyle(pepoleOver).getPropertyValue("left"));  // 캐릭터의 가로거리
  const pepoleTop = parseInt(window.getComputedStyle(pepoleOver).getPropertyValue("top"));    // 캐릭터의 높이
  const blockLeft = parseInt(window.getComputedStyle(blockOne).getPropertyValue("left"));     // 공1의 가로거리
  const blockTop = parseInt(window.getComputedStyle(blockOne).getPropertyValue("top"));       // 공1의 높이
  const block_2Left = parseInt(window.getComputedStyle(blockTwo).getPropertyValue("left"));   // 공2의 가로거리
  const block_2Top = parseInt(window.getComputedStyle(blockTwo).getPropertyValue("top"));     // 공2의 높이
  const block_3Left = parseInt(window.getComputedStyle(blockThree).getPropertyValue("left")); // 공3의 가로거리
  const block_3Top = parseInt(window.getComputedStyle(blockThree).getPropertyValue("top"));   // 공3의 높이
  if (blockLeft <= pepoleLeft && pepoleTop === blockTop) {                                    // 공1이 캐릭터와 만나고 같은 높이일때
    gameOver();                                                                               // 게임오버
  } else if (block_2Left <= pepoleLeft && pepoleTop === block_2Top) {                         // 공2이 캐릭터와 만나고 같은 높이일때
    gameOver();                                                                               // 게임오버
  } else if (block_3Left <= pepoleLeft && pepoleTop === block_3Top) {                         // 공3이 캐릭터와 만나고 같은 높이일때
    gameOver();                                                                               // 게임오버
  } else {
  }
}, 10);

function gameOver() {
  blockOne.style.animation = "none";    // 공1~3의 모션과 존재를 지움
  blockOne.style.display = "none";
  blockTwo.style.animation = "none";
  blockTwo.style.display = "none";
  blockThree.style.animation = "none";
  blockThree.style.display = "none";    // 공1~3의 모션과 존재를 지움
  history.go(0);                        // 새로고침
  gameOverAlert();                      // 경고창을 불러오는 함수
}
```

<br>

## 3-4 공의 위치 변화 :soccer: :soccer: :soccer:

> **setInterval()** 함수를 이용하여 **지속적인 변화주기**를 설정 <br> **random()** 함수를 이용하여 **0~4사이의 임의의 정수** 값을 얻는다 <br> 얻게된 값을 통해서 날아갈 공의 위치를 지정한 **배열의 index**에 대입하여 공의 높이에 변화를 줌

```js
const topArray = [0, -50, -100, -150];            // 공의 위치 배열

function BallThree() {
  const random = Math.floor(Math.random() * 5);   // 0~4까지 정수를 랜덤으로 획득
  ballThree.style.top = topArray[random] + "px";  // 공3의 높이를 배열과 랜덤함수를통해 지정
}

function BallTwo() {
  const random = Math.floor(Math.random() * 5);   // 0~4까지 정수를 랜덤으로 획득
  ballTwo.style.top = topArray[random] + "px";    // 공2의 높이를 배열과 랜덤함수를통해 지정
}

function BallOne() {
  const random = Math.floor(Math.random() * 5);   // 0~4까지 정수를 랜덤으로 획득
  ballOne.style.top = topArray[random] + "px";    // 공1의 높이를 배열과 랜덤함수를통해 지정
}

function start() {                                // start 클릭시 화면전환과 게임시작
  startpage.classList.add("page_back");
  gamepage.classList.remove("gamepage");
  getClock();                                     // 시간함수 호출
  setInterval(getClock, 1000);                    // 1초마다 갱신하기위함
  setInterval(BallOne, 1020);                     // 1초마다 공1의 위치갱신
  setInterval(BallTwo, 2020);                     // 2초마다 공2의 위치갱신
  setInterval(BallThree, 3020);                   // 3초마다 공3의 위치갱신
}

function init() {
  startBtn.addEventListener("click", start);      // srart 클릭시 이벤트 호출
}
init();
```

<br>

## 3-5 시간측정 :alarm_clock:

> 게임시작 부터 종료되기 까지의 시간을 구하기위해서 게임시간을 측정

```js
const clock = document.querySelector(".colock");
let seconds = 0;                                      // 초 변수
let minutes = 0;                                      // 분 변수

function getClock() {                                 // 스타트버튼과 함께 시간증가와 출력
  if (seconds < 59) {                                 // 58초에서
    seconds = seconds + 1;                            // 1을더하고
  } else if (seconds == 59) {                         // 59초가 되었을때
    seconds = 0;                                      // 초를 0으로 초기화
    minutes = minutes + 1;                            // 1분 추가
  }
  clock.innerText =                                   // 경과시간을 화면에 출력
    `${minutes < 10 ? `0${minutes}` : minutes} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
}
```

<br>

## 3-6 랭킹부여 :sunglasses:

> localStorage에 저장된 모든 값을 배열에 저장하고 **버블정렬**을 통해서 내림차순으로 정렬

```js
const rank = document.querySelector(".rank");
let array = [];
let tmep;

function rankSwap(array) {                        // 배열을정렬 하기위해서
  let newArray = [];                              // 기존배열을 담을 새로운배열
  for (let i = 0; i < array.length; i++) {        // 모든 배열값
    for (let j = 0; j < array.length; j++) {      // 모든 배열의 자리를
      if (array[j] < array[j + 1]) {              // 버블정렬을 이용하여 내림차순 정렬
        tmep = array[j];                          // temp를 이용하여 정렬
        array[j] = array[j + 1];
        array[j + 1] = tmep;
      }
    }
    newArray[i] = `${i + 1}. ${array[i]}`;        // 정렬된 배열들을 새로운배열에 저장
  }

  const arrayText = newArray.join("\n");          // 배열의 콤마를 제거후 줄바꿈
  rank.innerText = arrayText;                     // 배열에 모든값을 화면에 출력
}

function rankArray() {                            // localStorage정보를 배열로 전환
  for (let i = 0; i < localStorage.length; i++) {
                                                  // localStorage정보의 수만큼 반복
    const key = localStorage.key(i);              // 해당 인덱스의 key를 변수로 저장
    const value = localStorage.getItem(key);      // 해당 key의 값을 변수로 저장
    array[i] = `${value} ---- ${key}`;            // localStorage정보를 배열로 저장
  }
  rankSwap(array);
}

function init() {
  rankArray();
}
init();
```

---

## **4. 문제해결**

- random()함수를 이용하여 높이의 변화를 주고자 할때 일정한 몇가지의 정수를 어떻게 하면 가져올수 있을까 고민 끝에 배열을 이용하여 해결 하였습니다.<br>
  배열의 크기를 random()함수의 범위로 하고 random()함수로 얻어지는 정수를 배열의 index에 대입하여 원하는 정수 값만을 받아오게 하였습니다.

<br>

- localStorage에 저장된 모든 기록을 배열로 저장하고 기록이 높은 순서대로 화면에 출력하기 위해서 버블정렬을 선택하였습니다.<br>
  버블정렬은 인접한 값만 계속해서 비교하는 방식으로 구현이 쉬우며, 코드가 직관인 장점으로 인해 사용 하였습니다.

<br>

- 지속적인 게임오버에대한 이슈가 발생하여 모든 대상의 거리값 들을 인자로 받아와 정확한 충돌을 계산하였습니다. :sweat_drops:

<br>

- 시간에 따른 랭킹부여를 위해 localStorage정보에서 바로 랭킹을 부여하는데 어려움이 있어 배열을 이용하여 새로운 저장공간을 생성 하였습니다.

---

## **5. 사용기술**

<img width="200px" height="200px" src="https://user-images.githubusercontent.com/75786010/104137550-03b6f100-53e1-11eb-8985-7b785e6071bf.JPG"></img>
<img width="200px" height="200px" src="https://user-images.githubusercontent.com/75786010/104137565-20532900-53e1-11eb-8f6e-d39efeaf9285.JPG"></img>
<img width="200px" height="200px" src="https://user-images.githubusercontent.com/75786010/104137578-3cef6100-53e1-11eb-8b86-ac28d8ef0081.JPG"></img>

---
### 실행환경
- [ ] Internet Explorer :poop:
- [x] Chrome  :thumbsup:
- [x] Edge    :thumbsup:
