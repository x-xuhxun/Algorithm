// 입력은 [9, -1, 0]
function solution(array) {
    let arrayCnt = 0;
    let newArr = [];
    while(arrayCnt < array.length) {
          let minNumber = 1000;
    //배열에서 최솟값을 찾는 것
    let cnt = 0;
    while(cnt < array.length){
      if(minNumber > array[cnt]){
        minNumber = array[cnt];  
        }
        cnt = cnt + 1;    
    }
   // minNumber <- 최솟값
    newArr.push(minNumber);
    // 
    let cnt2 = 0;
    while(cnt2 < array.length){
        if(minNumber === array[cnt2]){
        array[cnt2] = 1000;
        break;
        }
        cnt2 = cnt2 + 1;
    }
        arrayCnt = arrayCnt + 1;
    }
    return newArr[Math.floor(newArr.length/2)];
}

// 1. 정렬
// 1-1배열에서 제일 작은 값을 찾아라
// 1-2 찾으면 새 배열에 넣어라
// 1-3 원래 배열에서 찾은값 지운다
// 1-4 만약 원래배열만큼 반복했으면 끝낸다 아님 계속 반복
// 2. 가운데 값 꺼내기