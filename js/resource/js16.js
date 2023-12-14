
//(function main() { 
// 배열은 []로 만든다
const fruits = ['망고','포도','배','수박','사과', '귤', '참외',];
console.log(fruits); 

// push(item) : 배열에 요소를 추가 한다. 
// console.log(push(item)); 배열에 요소 추가 후 배열의 길이를 반환한다
console.log(fruits.push('apple'));
console.log(fruits.push('kiwi'));
console.log(fruits.push('watermelon'));
console.log(fruits); 

// pop(item) : 배열의 맨 뒤 요소를 제거한다. 제거 후 제거한 요소를 반환한다.
// 맨 뒤에것 빠지고 오른쪽으로 한칸씩 이동되는 느낌
console.log(fruits.pop());
console.log(fruits); 
//})(); // 중간중간의 과정을 확인하기 위해 감싸서 함수로 실행

// shift(); 맨 앞의 값을 꺼내면서 삭제한다
// 맨 앞에것 빠지고 왼쪽으로 한칸씩 이동되는 느낌
console.log(fruits.shift());
console.log(fruits); 

//unshift(item) : 맨 앞의 값을 추가, 길이 반환.
console.log(fruits.unshift('용과'));
console.log(fruits); 

// reverse() : 현재 배열의 순서를 거꾸로 뒤집는다.
console.log(fruits.reverse() === fruits);
console.log('뒤집은 후:',fruits);

//sort() : 배열 안의 내용들을 정렬한다.
console.log('정렬 후: ',fruits.sort());

//sort(compareFn) : 내가 원하는 기준으로 배열안의 내용들을 정렬한다.
//fruits.sort((a,b) => {});
const numbers = [99,1,3,-50,123,88,77,14,15,25];
const sorted = numbers.sort();
console.log('오름차순:', sorted);

// 내림차순으로 정렬하기
const myComparator = numbers.sort(function (a,b){
    if(a<b){
        return 1;
    } else if(a>b){
        return -1;
    } else {
        return 0;
    }
});
console.log('내림차순', myComparator);
