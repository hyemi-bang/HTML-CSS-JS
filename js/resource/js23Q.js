// 처음엔 1~25까지의 숫자가 랜덤하게 깔려 있고, 1부터 순서대로 누르는 게임
// 숫자 누르기 시작하면 시간 시작
// 1,2,3.... 순서대로 누른후 기존 번호는 지워지고 26부터 50까지의 숫자중 랜덤으로 나옴
// 더 나올 숫자가 없을때는 흰색 배경
// 50까지 다 누르면 몇 초 동안 했는지 숫자판 있던 위치에 뜸

const createRandomDiv = () => {
const grid = document.getElementById('grid');


function initGrid(){
    for(let i = 0; i <numbers.length; i++){
        const cell = document.createElement('div');
        cell.textContent = numbers[i];
        grid.appendChild(cell);
    }
}

function shuffleNums(array){
    // 배열을 만들어서 숫자들을 넣는다?
    const length = array.length;
    for (let i = 0; i < length; i++) {
        const randomIndex = parseInt(Math.random() * length);

        // 현재 인덱스의 요소와 무작위로 선택한 인덱스의 요소 교환
        const temp = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = temp;
    }
}

const numbers = [];
for (let i = 1; i <= 25; i++) {
    numbers.push(i);
}

shuffleNums(numbers);
initGrid();

};

createRandomDiv();

// localstorage.setItem('rank',50);
// localstorage.getItem('rank');