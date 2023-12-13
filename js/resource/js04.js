
const out = document.getElementById('out');

function println(value){
    out.innerHTML += value + '<br>';
}
// 뭔가 오면은 출력해주겠다

let num1 = 1234;
let num2 = 123.1234;

console.log(num1);
console.log(num2);

println(num1);
println(num2);

//typeof로 해당 값이 어떤 타입인지 문자열로 결과를 알려준다
println(typeof num1);
println(typeof num2);
println(typeof typeof num2); //typeof num2에 대한 타입 =>문자열

// Number타입의 신기한 값 : infinity(무한)
println(10/0);
println(3 * 'abc'); // NaN number타입이 아니다
println(typeof Infinity);
println(typeof NaN);

// Number타입의 다양한 진법 리터럴
println(10); //10진수
println(0b10); // 2진수
println(0o10); // 8진수
println(0x10); // 16진수

println(16 == 0x10); // true


// String
let str1 = '김철수';
let str2 = "123.4567";


// Escape 
// ''를 사용한다면 내부에 '에 Escape 필요하고
// ""를 사용한다면 내부에 "에 Escape 필요하다
str1 = '김\'철수\''
str2 = "김'철수'";
let str3 = '<div id="div1"></div>'

println(typeof str1);
println(typeof str2);

//Boolean
let isPrime = true;
isPrime= false;
println(isPrime);
println(typeof isPrime);

//undefined
let abc;
println(abc); // 값 undefined
println(typeof abc); // undefined 의 타입도 undefined

// null = 자바에서 참조형 데이터 타입인데, 가리키는 놈이 없는 친구 
let minsu = null;

println(minsu); // 현재 가리키는 인스턴스가 없다
println(typeof minsu); // Object 타입이다

// Array
let colors= ['red', 'tomato', 'orange', 'skyblue'];
let arr1 = ['str', 13, 17, 12.12, 'abc']; // 자바의 배열은 해당하는 타입만 넣을 수 있었지만, JS는 다양하게 넣어도 가능하다. 하지만 넣지는 않지

console.log(colors);
console.log(arr1);

println(colors);
println(arr1);

//Javascript Object (Java의 Map과 유사한 타입, Key 와 Value를 가지고 있다)
let minwoo = {
    name: '민우',
    age: 20,
    math:99
}
console.log(minwoo);


// 접근방식 2가지
console.log(minwoo['name']);
console.log(minwoo['age']);
console.log(minwoo['math']);


console.log(minwoo.name);
console.log(minwoo.age);
console.log(minwoo.math);

