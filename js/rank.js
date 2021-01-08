'use strict';   
const rank = document.querySelector('.rank');
let array =[];
let tmep;


function rankSwap(array) {                          // 배열을정렬 하기위해서
    let newArray=[];                                // 기존배열을 담을 새로운배열
    for(let i=0; i<array.length; i++){              // 모든 배열값
        for(let j=0; j<array.length; j++){          // 모든 배열의 자리를 
            if(array[j]<array[j+1]){                // 선택정렬을 이용하여 내림차숨 정렬
                tmep = array[j];                    // temp를 이용하여 정렬
                array[j] = array[j+1];
                array[j+1] = tmep;
            }
        }
        newArray[i] = `${i+1}. ${array[i]}`;        // 정렬된 배열들을 새로운배열에 저장
    }
    
    const arrayText = newArray.join("\n");          // 배열의 콤마를 제거후 줄바꿈
    rank.innerText=arrayText;                       // 배열에 모든값을 화면에 출력
}

function rankArray(){                               // localStorage정보를 배열로 전환
    for(let i=0; i<localStorage.length; i++) {      // localStorage정보의 수만큼 반복
        const key = localStorage.key(i);            // 해당 인덱스의 key를 변수로 저장
        const value = localStorage.getItem(key);    // 해당 key의 값을 변수로 저장
        array[i] = `${value} : ${key}`;             // localStorage정보를 배열로 저장
    }
    rankSwap(array);
}

function init(){
    rankArray();
}
init(); 