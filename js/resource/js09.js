//parseInt() : 다양한 타입들을 Number타입 정수로 변환
console.log(parseInt(123.1234)); // 123
console.log(parseInt('123456')); //123456
console.log(parseInt('123.45')); //123

//숫자가 될 수 없는 값은 NaN이 나온다
console.log(parseInt('FF00')); // NaN
console.log(parseInt('Lion')); // NaN

//다른 진법 문자열을 정수로 변환 할 수 있다
console.log(parseInt('FF00', 16)); //65280
console.log(parseInt('F7',16)); //247
console.log(parseInt('767',8)); //503

//숫자를 문자열로 변환하기
let numStr = (123).toString(); // .toString() 앞에 꼭 ()사용하기~
console.log(`value: ${numStr}, type: ${typeof numStr}`); // value: 123, type: string
numStr = (123.1234).toString();
console.log(`value: ${numStr}, type: ${typeof numStr}`); //value: 123.1234, type: string

//숫자 인스턴스 생성하기
console.log(Number('abc')); // NaN
console.log(Number('abc',16)); //NaN // 숫자가 아닌 것 NaN, 16진수로 바꿔보려했으나 NaN나옴
console.log(Number('123.1234')); //123.1234
console.log(Number(1234)); //1234
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number(new Date())); // 1702516718141

//Number. 찍고 알아서 잘 활용해보기~
console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991







