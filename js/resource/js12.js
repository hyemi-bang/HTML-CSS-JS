
// Javascript Object
// Key: Value를 사용해 객체의 속성을 표현한다
// 객체를 표현할 수 있지만 클래스가 따로 존재하지 않는다
let person1 = {
  name: '김철수',
  age: 25,  
  // 객체에 메서드를 넣을 수 있다
  // sayHello: () => console.log(`안녕! 내 이름은 ${this.name}이야`) 안나옴
  sayHello: function(){
    console.log(`안녕! 내 이름은 ${this.name}이야`)
  }
};

person1.sayHello();

//자바는 제약을 걸어서 클래스끼리 호환되도록 만들었지만
//자바스크립트는 객체끼리 다 호환이 되도록 만들어진것 자유가 좀 있는 느낌?


// 객체를 생성하는 다른 방법
let person2 = new Object(); // let person2 = {}; 같은 것

// 나중에 속성 추가하기
person2.name = '김나나';
person2.age = 25;
person2.sayHello = function(){
    console.log(`안녕하세요! 제 이름은 ${this.name}입니다.`);
};

person2.sayHello();

// 동일한 속성을 지닌 인스턴스를 찍어내는 방법
// 함수를 사용
function Person(name, age){
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        console.log(`내 이름은 ${this.name}입니다`);
    }
}

let person3 = new Person('박가가', 28);
let person4 = new Person('박하하', 24);

person3.sayHello();
person4.sayHello();

//객체에 값 넣기
// 이미 존재하는 속성에 값 넣기
person3.name = '김히히';
person3.sayHello();
person3['name'] = '김호호';
person3.sayHello();

// 새로운 속성 추가하기
person4.gender = 'male';
console.log(person4.gender);

// delete  속성 삭제하기
delete person4.gender;
console.log(person4.gender); // undefined 나온다

// for...in 객체 반복 돌리기 (Java에서 KeySet으로 반복 돌리는 것과 유사)
for(let key in person4) {
    console.log(key);
}
// 속성을 추가해서 다시 출력해보겠다~
person4.gender = 'male';
person4.weight = 70.24;
person4.bloodType = 'AB';

for(let key in person4) {
    console.log(key, ':', person4[key]);
}
