console.log('1. ------------------------------------------');
const numbers =[];

for(let i = 0; i< 10; i++){
    numbers[i] = i;
}

console.log(numbers);

// for-Each 
// 배열.prototype.forEach : 배열의 모든 값을 하나씩 꺼내서 전달한 함수를 실행한다
//forEach(함수 그 자체를 전달해야한다~) / 고차함수 : 함수를 매개변수로 받는 함수

numbers.forEach(function(item){ // numbers 의 값을 하나씩 꺼내서 실행
    console.log(item * 10 );
}); 

numbers.forEach(function(item, index, srcArr){ //srcArr 원본배열
    console.log(item * 10, `${index}번째 실행입니다.`, `원본:`,srcArr );
}); 

/*
    # 배열.prototype.forEach

    - 배열의 모든 값을 하나씩 순서대로 꺼내서 전달한 함수를 실행
    - 전달한 함수에 첫 번째 인자로 해당번째 요소를 전달된다
    - 전달한 함수에 두 번째 인자로 인덱스가 전달된다
    - 전달한 함수에 세 번째 인자로 원본 배열이 전달된다
    - 반드시 모든 인자를 다 받을 필요는 없고, 필요한 경우에만 꺼내 사용하면된다
*/
const myFunction = function(item, index){
    console.log(`numbers[${index}]: ${item}` );
}; 

numbers.forEach(myFunction);

console.log('2. ------------------------------------------');

/*
    #배열.prototype.map
    
    - 값을 순서대로 꺼내면서 해당 값을 사용해 결과를 리턴한다
    - 리턴한 결과로 구성된 새로운 배열을 리턴한다
    - 매핑한다 생각하면 된다
    - map에 전달하는 콜백함수는 반드시 결과를 리턴해야 한다
*/

const resultArr = numbers.map((item, index) => {
    return item + 5;
});

console.log(resultArr);

// 점수 배열로 등급 배열 생성해보기
const scores = [80, 55, 60, 99, 100, 70, 72, 2 ,30, 48, 67];

const grades = scores.map((scores) => {
    if(scores > 100 || scores < 0){
        return 'F';
    } else if(scores >= 90){
        return 'A';
    } else if (scores >= 80){
        return 'B';
    } else if (scores >= 70){
        return 'C';
    } else if (scores >= 60){
        return 'D';
    } else {
        return 'F';
    }
});

console.log(grades);

const getGrade = (scores) => {
    if(scores > 100 || scores < 0){
        return 'F';
    } else if(scores >= 90){
        return 'A';
    } else if (scores >= 80){
        return 'B';
    } else if (scores >= 70){
        return 'C';
    } else if (scores >= 60){
        return 'D';
    } else {
        return 'F';
    }
};

const students = scores.map((score) => ({
        score: score,
        grade: getGrade(score)
}));

console.log(students);

//오브젝트는 펑션으로 클래스화 할 수 있다고 한다

console.log('3. ------------------------------------------');

/*
    #배열.prototype.filter

    - 배열의 모든 값을 순차적으로 하나씩 꺼내면서 전달한 함수의 기준을 통과하는 것만 남겨놓는 함수
    - filter에 전달하는 콜백함수는 반드시 boolean타입 값을 리턴해야 한다
    - true를 리턴하는 요소는 남고, false를 리턴하는 요소는 걸러지게 된다.

*/

// 60점 이하인 점수만 남겨놓고 싶은 경우
const filtered = scores.filter((score) => {
    return score < 60;
})

console.log(filtered);

//F등급만 남겨놓고 싶은 경우
const studentFInfo = students.filter((student) =>{
    return student.grade == 'F';
});

console.log(studentFInfo);
console.log('4. ------------------------------------------');

/*
    #배열.prototype.reduce

    - 배열의 모든 요소를 하나로 취합한다
    - 전달한 함수의 결과를 다음 반복에 계속 사용한다
*/

//총합구하기
const sum = scores.reduce((pervScore, currentScore, index) => {
    console.log(`##${index}번째 반복 ##`);
    console.log('prev:',pervScore);
    console.log('curr:',currentScore);

    return pervScore + currentScore;
});

console.log('총합:',sum);

const minScore = scores.reduce((minScore, currentScore) =>{
    return minScore < currentScore ? minScore : currentScore;
});

const maxScoer = scores.reduce((maxScore, currentScore) =>{
    return maxScore > currentScore ? maxScore : currentScore;
});

console.log('가장 낮은 점수:', minScore);
console.log('가장 높은 점수:', maxScoer);

console.log('4. ------------------------------------------');

/*
    #배열.prototype.some

    - 조건을 만족하는 요소가 하나 이상 있는지 검사한다
*/

const fruits = ['apple', 'banana', 'orange', 'melon'];

//요소를 하나씩 꺼내서 검사하면서 같은게 있는지 검사하기
const result1 = fruits.some((fruit) => {
    return fruit === '참외';
});
console.log(result1); // false

const result2 = fruits.some((fruit) => {
    return fruit === 'apple';
});
console.log(result2); // true

// apple이 포함된 과일이 있는지
const result3 = fruits.some(fruit => fruit.includes('apple'));
console.log(result3); // true

// 함수를 전달할 수 있기 때문에 필요하다면 더 복잡한 내용도 검사할 수 있게 된다
