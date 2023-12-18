const pushBtn = document.querySelector('#pushBtn');
const popBtn = document.querySelector('#popBtn');
const shiftBtn = document.querySelector('#shift');
const unShiftBtn = document.querySelector('#unShift');

const out = document.querySelector('#out');

const stars = out.getElementsByClassName('material-symbols-outlined');

//getElementsByClassName 메서드는 HTMLCollection을 반환하며, 이는 배열이 아닌 유사 배열 객체라서 style 직접 적용 불가능

// 별에 숫자 붙이기
let starCount = 0;


function createStar() {
    const newDiv = document.createElement('div');
    const newText = document.createTextNode('Grade');

    newDiv.classList.add('material-symbols-outlined');
    newDiv.style.fontSize = '35px';
    newDiv.style.color = 'plum';

    newDiv.appendChild(newText);
    out.appendChild(newDiv);

    starCount++;
    const countText = document.createTextNode(`${starCount}`);
    // 별에 숫자 붙이기
    const countStars = document.createElement('span');
    countStars.style.fontSize='10px';
    countStars.style.verticalAlign='top';

    countStars.appendChild(countText);
    newDiv.appendChild(countStars);

    return newDiv;
}

pushBtn.addEventListener('click', (e) => {
    createStar()
});

popBtn.addEventListener('click', (e) => {
    if (stars.length > 0) {
        out.removeChild(stars[stars.length - 1]); // 뒤에 놈부터 지우기
        starCount--; 
    }
});

shiftBtn.addEventListener ('click', (e) =>{
    if (stars.length > 0) {
        out.removeChild(stars[0]); // 앞에 놈부터 지우기
        starCount--;
    }
});

unShiftBtn.addEventListener('click', (e) => {
    const newStar = createStar(); 
    out.insertBefore(newStar, out.firstChild); // 맨 앞에 추가
});



/*
// 새 요소 만들어서 자식으로 추가하기
pushBtn.addEventListener('click', (e) => {
    // 1. 새 Element node 생성
    const newDiv =  document.createElement('div');
    // 2. Text node를 생성한다
    const newText = document.createTextNode('Grade');
    // 3. 만들어진 새 Element node를 설정한다 (클래스 추가, 속성 추가, 등등)
    newDiv.classList.add('material-symbols-outlined');
    newDiv.style.fontSize = '30px';
    newDiv.style.color='red';
    // 4. Element node에 Text node를 부착한다
    newDiv.appendChild(newText);
    // 5. 새 Elenment node를 out에 추가
    out.appendChild(newDiv);
});
*/