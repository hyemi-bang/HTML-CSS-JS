
function Animal(realname, nickname, age) {
    this.realname = realname;
    this.nickname = nickname;
    this.age = age;
}

// 콘솔에 해당 인스턴스를 log()보다 더 계층적으로 출력해주는 메서드
console.dir(Animal);

// 이 함수의 prototype 안의 constructor를 사용해 인스턴스를 생성한다
let misha = new Animal('Bear', 'misha', 8);

console.dir(misha);
console.log(misha.__proto__); //인스턴스는 자신을 생성하는데 사용된 prototype 에 접근할때 __proto__사용한다
console.log(Animal.prototype);
console.log(misha.__proto__ === Animal.prototype);

//해당 인스턴스의 프로토타입을 수정하면 해당 프로토타입으로 만들어진 모든 인스턴스가 수정된다
misha.__proto__.attack = function () {
    console.log(`${this.realname} ${this.nickname} (이/가) 공격을 했습니다`);
};

//해당 인스턴스에 같은 이름의 메서드가 있다면 프로토타입보다 현재 인스턴스의 메서드를 우선한다
misha.attack = function(){
    console.log('만들어진 곰에 추가한 메서드');
}
misha.attack();

const pig = new Animal('멧돼지', '킁킁이', 4);

// 프로토 타입에 추가한 메서드가 존재한다. misha.attack = function()한 건 추가가 안되어있는걸알수있다.
pig.attack();

//기본타입인 문자열 마저도 수정할 수 있다
var str1 = 'imsi text'; // 자바로 치면 스트링 클래스의 인스턴스 느낌
// 스트링에다가 새로운것을 추가해서 마음껏 개조하여 사용할 수 있게 되는것
// str1.__proto__. -> 인스턴스, function으로 .찍어 설계도도 수정을 하게 되는 것
str1.__proto__.attack = function(){  
    console.log('공격');
};
str1.attack();
var str2 = 'abc';
str2.attack();