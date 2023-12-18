const listItems = document.getElementsByTagName('li');
const importants = document.getElementsByClassName('important')
const datas = document.getElementsByName('data');

const head2 = document.querySelector('#head2'); // CSS선택자를 이용한 요소 선택
const imports = document.querySelectorAll('.important'); 


//HTMLColloection 타입은 Array가 아니므로 편리한 배열 함수들(forEach, filter, ...) 이용할 수 없다
console.log(listItems);
console.log(importants);
console.log('--------------');


// name속성으로 선택하는 경우 NodeList타입으로 꺼내는데 forEach만 구현되어 있다
console.log(datas);
console.log(head2);
console.log(imports);
console.log('--------------');

// const liArr = [...listItems]; 이것 늘리면
const liArr = [];
for(let i = 0 ; i < listItems.length; ++i){
    liArr.push(listItems[i]);
}
liArr.forEach(li => console.log(li));

// const lis = [...document.getElementsByTagName('li')];
// lis.forEach(li => console.log(li));
console.log('--------------');

const test1 = document.querySelector('#test1');

console.log(test1);

// innerHTML : 태그가 적용 됨. (보안에 매우매우매우 취약함)
test1.innerHTML = '<b>element.innerHTML</b> : 해당 요소의 내용에 접근';

// innerText : 태그가 적용되지 않음 (보안 강함)
test1.innerHTML = '<b>element.innerHTML</b> : 해당 요소의 내용에 접근';

//속성 수정하기
test1.title = '마우스를 올리고 있으면 나오는 문구';
console.log(test1.title);

//class 속성에 접근
test1.className = 'important red box';
console.log(test1.className);
console.log(test1.classList[0]);
console.log(test1.classList[1]);
console.log(test1.classList[2]);
console.log(test1.classList[3]); // undefined

// 클래스 값 추가하기
test1.className += ' animal';
console.log(test1.classList[3]); // animal

// classList 객체 사용하기
test1.classList.add('tomato');
test1.classList.replace('animal', 'tiger'); // 치환가능
test1.classList.remove('important'); // 지우기

// toggle : 해당 클래스 값이 없을때는 추가, 있으면 삭제
test1.classList.toggle('visible'); //추가되었다가
console.log(test1.classList.contains('visible')); // true
test1.classList.toggle('visible'); // 삭제되었다.
console.log(test1.classList.contains('visible')); // false
console.log('--------------');

// 속성에 메서드로 접근하기
test1.setAttribute('title','title에 들어갈 문구');
test1.setAttribute('style', 'border : solid 1px black;'); 
// 가능은 하지만 효율적이지 못하다 계속 style이 추가가 되면 덮어쓰게 됨으로
// style.property를 이용하는게 더 바람직 하다
test1.setAttribute('class', 'use'); // className, classList를 이용하는게 더 바람직하다
console.log(test1.getAttribute('title'));
