const numbers = [];
for (let i = 0; i < 1000; i++) {
    numbers.push(parseInt((Math.random() * 45) + 1));
}
console.log(numbers);

const sortedLotto = numbers.sort();
console.log(sortedLotto);

const countNum = {};
numbers.forEach(number => {
    countNum[number] = (countNum[number] || 0) + 1;
    // if(countNum[number]){
    //     countNum[number] = countNum[number] +1; 
    //     countNum[number] = 0+1;
    // }
});
console.log(countNum);


const lottoContainer = document.getElementById('lotto-container');
lottoContainer.style.display = 'flex';
lottoContainer.style.gap = '10px';
lottoContainer.style.flexWrap = 'wrap';

//number, count 

function println(number, count) {
    return `<div class="lotto-ball">${number}(${count})</div>`;
}

sortedCounts.forEach(([number, count]) => {
    lottoContainer.innerHTML += println(number, count);
});

// count 같은 값들
// for문써서 하나씩 세면서 +1 중에 가장 많이 나온 앞의 번호 6개 저장하기
//ball  = new alotofNum[6]; // 많이 나온 번호 6개 -> ball 로 저장해서 html 코드에서 빼기 

/*
https://hianna.tistory.com/459

const arr = ['a', 'b', 'a', 'b', 'c'];
const result = {};
arr.forEach((x) => { 
  result[x] = (result[x] || 0)+1; 
});

result[x] = (result[x] || 0) + 1;
===
    if(result[x]){
        result[x] = result[x] + 1 ;
    } else {
        result[x] = 0 + 1;
    }

처음에 배열의 첫번째 값 'a'가 들어오면,
result[x], 즉, result.a는 undefined 입니다.
result.a가 undefined이므로
result에 a 속성을 추가하고, 0+1, 즉, 1을 세팅합니다.
 
배열의 두번째 값 'b'가 들어와도 마찬가지로
result에 b 속성을 추가하고, 1을 세팅합니다.
 
배열의 세번째 값 'a'가 들어오면,
이번에는 result.a의 값이 1로 세팅되어 있으므로,
result.a의 값을 result.a + 1, 즉, 1+1, 2로 세팅합니다.
 
이런 방법으로 배열의 모든 원소를 대상으로 반복합니다.

*/


