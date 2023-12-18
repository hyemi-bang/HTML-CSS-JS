const click2Div = document.getElementById('click2');

// 선택한 HTML요소에 자바스크립트로 이벤트 추가하기 1 (HTML 속성에 추가하기)

// click2Div.onclick = () =>{
// 이벤트 콜백 함수에서의 this는 이벤트 발생
//     click2Div.style.backgroundColor = 'green';
//     click2Div.style.color = 'white';
// };

click2Div.onclick = (e) => {
    // this 대신 이벤트 객체를 사용해 이벤트 발생 요소를 선택할 수 있다
    console.log(e);

    //e.target : 현재 이벤트가 발생한 요소
    e.target.style.backgroundColor = 'green';
    e.target.style.color = 'white';
};

// 선택한 HTML요소에 자바스크립트로 이벤트 추가하기 2 (addEventListener)

click2Div.addEventListener('mouseleave', (e) => {
    // addEventListener 함수는 'mouseleave' 처럼 직접 명령어를 입력해줘야한다
    click2Div.style.backgroundColor = 'white';
    click2Div.style.color = 'black';
});

// 이벤트의 종류는 매우 다양, 구글링하기
// javascript event list =>  https://developer.mozilla.org/en-US/docs/Web/Events

// ------------------------------------------------------


// 이벤트 중첩 테스트

const outer = document.getElementById('outer');
const inner1 = document.getElementById('inner1');
const inner2 = document.getElementById('inner2');

// const clickEventHandler = function (e){
//     // console.log(e.target.id, 'clicked!');
//     console.log(e);
//     alert(e.target.id + 'clicked!');
// };

// addEventListener
// 이벤트종류(ex> 'click'), 핸들러(이벤트처리함수), 캡처링여부 (true 캡처링, 적지않을때 버블링) 3가지의 매개변수 포함된다

// e.currentTarget : 버블링 또는 캡처링 으로 인해 현재 이벤트의 영향을 받고 있는 객체
// e.target : 현재 이벤트를 발생시킨 객체

outer.addEventListener('click', (e) => {
    console.log('outer clicked!');
    if (e.currentTarget === e.target) {
        console.log('클릭된 객체/ 범인은', e.target.id, '입니다');
    };
});

inner1.addEventListener('click', (e) => {
    console.log('inner1 clicked!');
    if (e.currentTarget === e.target) {
        console.log('클릭된 객체/ 범인은', e.target.id, '입니다');
    };
}, true);

inner2.addEventListener('click', (e) => {
    console.log('inner2 clicked!');
    if (e.currentTarget === e.target) {
        console.log('클릭된 객체/ 범인은', e.target.id, '입니다');
    };
});

// ------------------------------------------------------

// 기본 이벤트 막아보기

const userId = document.getElementById('user-id');

// 키보드 이벤트 (keydown, keyup, keypress)
userId.addEventListener('keydown', (e) => {
    // 기본동작 취소
    e.preventDefault();

    // tab 키가 눌리면 \t 동작 시키겠다
    if (e.key === 'Tab') {
        e.currentTarget.value += '\t';
    } else {
        //기본동작 취소 가능 여부 체크
        console.log('기본동작 취소 가능여부:', e.cancelable);
        console.log(e);
    }
});


const userIntro = document.getElementById('user-intro');

userIntro.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.key === 'Tab') {
        e.currentTarget.value += '\t';
    } else {
        userIntro.style.backgroundColor = 'plum';
    }
});

const link1 = document.getElementById('link1');

link1.addEventListener('click', (e) => {
    e.preventDefault();
    alert('뻥이야!');
});

const click100 = document.getElementById('click100');

click100.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        alert('클릭된 요소 ' + e.target.textContent);
    } else {
        e.preventDefault();
    }
}, true);

click100.addEventListener('click', e => e.target !== e.currentTarget ?
    console.log(e.target.innerHTML) : 0, true); //선생님풀이

const lis = click100.getElementsByTagName('li'); 


// 버튼에 랜덤컬러 넣기 해보기~
const colors = ['skyblue', 'tomato', 'orchid', 'yellowgreen', 'plum', 'green',
    'cornflowerblue', 'royalblue', 'cadetblue', 'blue', 'lime', 'darkslategray', 'palevioletred',
    'lightpink', 'goldenrod', 'darkolivegreen', 'brown'];

for (let i = 0; i < lis.length; i++) {
    const randomColor = colors[parseInt(Math.random() * colors.length)];
    lis[i].style.backgroundColor = randomColor;
}