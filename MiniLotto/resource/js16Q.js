let numbers = [];

for (let i = 0; i < 1000; i++) {
    numbers.push(parseInt((Math.random() * 45) + 1));
}

// 각 숫자의 출현 횟수 계산
let counts = {};
let topNumbers = [];

numbers.forEach(number => {
    counts[number] = (counts[number] || 0) + 1;

    // 가장 많이 나온 6개의 숫자를 추적
    if (!topNumbers.includes(number)) {
        topNumbers.push(number);
        topNumbers.sort((a, b) => counts[b] - counts[a]);

        // 6개 이상의 숫자가 있다면 가장 작은 값을 제거
        if (topNumbers.length > 6) {
            topNumbers.pop();
        }
    }
});

// 결과 출력
console.log("랜덤으로 생성된 숫자 배열:", numbers);
console.log("가장 많이 나온 6개의 숫자:", topNumbers);

// 결과를 HTML에 출력
const lottoContainers = document.getElementsByClassName('lotto-container');


// topNumbers 배열에 있는 숫자를 차례로 각 lotto div에 추가
for (let i = 0; i < topNumbers.length; i++) {
    const lottoDiv = document.getElementById(`lotto${i + 1}`);
    const number = topNumbers[i];
    const count = counts[number];

    lottoDiv.textContent = `${number} (${count}회)`;

    // 다양한 색상을 lotto div에 랜덤하게 추가하기
    const colors = ['skyblue', 'tomato', 'orchid', 'yellowgreen','plum' ,
    'cornflowerblue', 'cadetblue', 'blue', 'black', 'darkslategray','palevioletred' , 
    'lightpink', 'goldenrod', 'darkolivegreen', 'brown'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    lottoDiv.style.backgroundColor = randomColor;
}