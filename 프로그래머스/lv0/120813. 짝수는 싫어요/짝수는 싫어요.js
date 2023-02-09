function solution(n) {
    var answer = [];
    if(n === 1){
        answer = [1];
    }
    if(1 < n){
        for(let i = 1; i <= n; i++){
            if(i % 2 === 1){
                answer.push(i)
            }
        }
    }
    return answer;
}