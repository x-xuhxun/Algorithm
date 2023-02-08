function solution(array) {
    const sortedArray = array.sort((a,b) => a-b)
    let cnt = 0;
    let mode = -1; //최빈값
    let repeatModeCnt = 0; //최빈값이 될 때 몇번 반복해서 된건지
    let repeatMode = 0; // 현재 똑같은 숫자가 몇번 등장했는지
    let beforeNumber = -1; // 지금 보고있는 숫자 이전 숫자
    let isDupMode = false;
while(cnt < array.length){
    if(beforeNumber !== array[cnt]){
        repeatMode = 1;
    } else {
        repeatMode = repeatMode + 1;
    }
    
    if(repeatMode === repeatModeCnt){
        if(mode !== array[cnt]){
            isDupMode = true;
        }
    }
    
    if(repeatMode > repeatModeCnt){
        mode = array[cnt];
        repeatModeCnt = repeatMode;
         isDupMode = false;
    }
    beforeNumber = array[cnt];
    cnt = cnt + 1;
}
    if(isDupMode) return -1;
    return mode;
}

// 1. 앞에서부터 차례대로 원소를 확인하며 갯수를 센다.
// 2. 최빈값을 그때그때 기록한다.