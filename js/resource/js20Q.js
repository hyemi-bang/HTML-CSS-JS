// 버튼과 결과를 출력할 div Element 가져옴
const pushBtn = document.querySelector('#pushBtn');
const popBtn = document.querySelector('#popBtn');
const shiftBtn = document.querySelector('#shiftBtn');
const unshiftBtn = document.querySelector('#unshiftBtn');
const out = document.querySelector('#out');


// 생성된 별의 개수를 저장할 변수
let starCount = 0;

// 별 모양의 div Element 생성 함수
const createStarDiv = () => {
    const starDiv = document.createElement('div');
    const starText = document.createTextNode('grade');

    // CSS 클래스 추가
    starDiv.classList.add('material-symbols-outlined');
    starDiv.classList.add('star');
    starDiv.appendChild(starText);

    // 별의 개수를 표시할 div Element 생성
    const numDiv = document.createElement('div');
    const numText = document.createTextNode(starCount++);

    // CSS 클래스 추가
    numDiv.classList.add('starNum');
    numDiv.appendChild(numText);
    starDiv.appendChild(numDiv);

    return starDiv;
};

console.dir(out);

// 버튼을 클릭할 때 호출되는 함수
const pushChild = () => out.appendChild(createStarDiv());

// const popChild = () => out.removeChild(getLastChild());
// const getLastChild = () => document.querySelector('#out > div:last-child');
const popChild = () => out.removeChild(out.lastElementChild);
/*
lastChild 속성 - 마지막 자식노드를 마지막이 뭐냐에 따라 (요소노드/텍스트노드/주석노드)로 반환. 
lastElementChild 속성 - 마지막 자식 노드를 요소노드로 반환. (※ 텍스트노드와 주석노드는 무시)
*/

const shiftChild = () => out.removeChild(out.firstElementChild);
/* const unShiftChild = ( () => {
    const newStar = createStarDiv(); 
    out.insertBefore( newStar, out.firstChild)});
*/

const unShiftChild = () => out.insertBefore(createStarDiv(), out.firstElementChild);


// 각 버튼에 이벤트 리스너 추가
pushBtn.addEventListener('click', (e) => pushChild());
popBtn.addEventListener('click', (e) => popChild());
shiftBtn.addEventListener('click', (e) => shiftChild());
unshiftBtn.addEventListener('click', (e) => unShiftChild());

/*
방향키 왼쪽을 누르면 shift
방향키 오른쪽을 누르면 unshift
방향키 위쪽을 누르면 push
방향키 아래쪽을 누르면 pop이 동작 
*/ 
// const keypush = document.getElementById('keypush');
/*
window.addEventListener('keydown', (e) => {
    e.preventDefault();
    switch (e.key) {
        case 'ArrowLeft':
            shiftChild();
            break;
        case 'ArrowRight':
            unShiftChild();
            break;
        case 'ArrowUp':
            pushChild();
            break;
        case 'ArrowDown':
            popChild();
            break;
    }
});
*/

// 선생님해설
document.body.addEventListener('keydown', (e) => {
    console.dir(e); // 어떤 key type인지, keycode인지, key 인지 찾기
    switch (e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            shiftChild();
            break;
        case 'ArrowRight':
            e.preventDefault();
            unShiftChild();
            break;
        case 'ArrowUp':
            e.preventDefault();
            popChild();
            break;
        case 'ArrowDown':
            e.preventDefault();
            pushChild();
            break;
    }
})


