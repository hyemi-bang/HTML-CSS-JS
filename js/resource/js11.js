
console.log(add(1, 3)); // 4
console.log(x); // undefined

console.log(add(22)); //함수지만 위치의 영향을 받음, 함수 밑에서는 실행됨


function add(num1, num2) {
    return num1 + num2;
}
//자바스크립트에서는 funcution 즉 함수선언, 변수선언이 있다면 코드위치 상관없이 제일 먼저 실행된다.

// 변수 선언은 먼저 실행 되지만 대입은 나중에 일어난다 
var x = 10;
//var x ; 공간은 만들어짐 
console.log(x);  // 10 //x에 10이 들어가있음
console.log(add(22)); 

//let 은 위 같은 상황을 막기위해 만들어졌다
// ※결론 함수 선언을 밑에서 해도 되지만 문제가 생길 위험이 있으니 지양하자

// 함수의 기본적인 선언은 function 키워드를 사용한다
function mul3(num) {
    // return num *3; 리턴타입은 적지 않아본다
    console.log(num * 3); 
}
// 리턴이 없는 함수는 undefined를 리턴한다
mul3(123); 
console.log(mul3(234)); 

//자바스크립트의 함수는 변수에 넣을 수 있다

let myFunction = mul3; // mul3을 그냥 쓰는 것: mul3이라는 함수 그 자체를 의미한다
let myFunchionResult = mul3(); // mul3()를 쓰는 것 : mul3이라는 함수를 실행하고 결과를 리턴받아 사용한다는 의미

console.log(myFunction); // 저장된 함수 출력
/*
ƒ mul3(num) {
    // return num *3; 리턴타입은 적지 않아본다
    console.log(num * 3);
}
*/
myFunction(10); // 저장된 함수 실행

//함수 표현식 : 변수에 함수를 넣어놓는 방식으로 선언하는 것
const gop2 = function mul2(num) {
    return num * 2;
};
// 함수는 세미콜론을 쓰지않고 함수표현식은 세미콜론을 사용한다

// 함수 표현식으로 선언한 함수는 변수명으로
console.log(gop2(123)); // 246

// 함수 표현식 축약형 (화살표 함수)
const gop4 = (num) => {
    return num * 4;
};

console.log(gop4(5)); // 20

// 화살표 함수 사용시 해당 함수의 내용이 리턴 한 줄이라면 다음과 같이 축약할 수 있다
// 상황에 따라 (), {}, return 생략가능
const gop5 = num => num *5; // 리턴과 {}를 생략, 매개 변수가 1개일때 () 생략
const gop6 = (num1,num2) => num1 * num2; // 리턴과 {}를 생략, 매개 변수가 2개 이상이라 () 써야함
const gop7 = num => console.log(num *7);
console.log(gop5(3)); // 15
console.log(gop6(5,6));// 30

// const num = 5;
// const gop7 = function mul(num){
//     return num*5;
// }
// console.log(gop7(5));
// console.log('gop7:' + gop7);


//함수 표현식은 선언과는 다르게 밑에 있으면 사용할 수 없다
console.log(gop8(33)); 

const gop8 = num => console.log(num*8); 
// =을 중심으로 양쪽에 다 있는 존재 지만, 같은값이라고??? 위로 끌어올려 사용할 수 없는 상태???
/*
콘솔창에서 이런 에러메시지 :
js11.js:78 Uncaught ReferenceError: Cannot access 'gop8' before initialization
    at js11.js:78:13
*/


// function gop9(num) {
//     var count = 10; // 함수 내부에서 사용하려고 만든 값
//     return num * 9;
// }

// gop9(3);

// console.log(count); // 원래는 접근이 안되야 한다