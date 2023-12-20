// 처음엔 1~25까지의 숫자가 랜덤하게 깔려 있고, 1부터 순서대로 누르는 게임
// 숫자 누르기 시작하면 시간 시작
// 1,2,3.... 순서대로 누른후 기존 번호는 지워지고 26부터 50까지의 숫자중 랜덤으로 나옴
// 더 나올 숫자가 없을때는 흰색 배경
// 50까지 다 누르면 몇 초 동안 했는지 숫자판 있던 위치에 뜸

//4차

const createRandomDiv = () => {
  const grid = document.getElementById("grid");
  let timer;
  let elapsedTime = 0;
  let timerElement = document.getElementById("timer");
  let currentIndex = 0;

  // 1~25 숫자
  const numbers = [];
  for (let i = 1; i <= 25; i++) {
    numbers.push(i);
  }

  // 26부터 50까지의 숫자를 numbers2 배열에 추가
  const numbers2 = [];
  for (let i = 26; i <= 50; i++) {
    numbers2.push(i);
  }

  // 숫자를 랜덤하게 섞는 함수
  function shuffleNums(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
      const randomIndex = parseInt(Math.random() * length);

      const temp = array[i];
      array[i] = array[randomIndex];
      array[randomIndex] = temp;
    }
  }

  // 초기 그리드 설정
  function initGrid() {
    shuffleNums(numbers);
    for (let i = 0; i < numbers.length; i++) {
      const cell = document.createElement("div");
      cell.textContent = numbers[i];
      cell.addEventListener("click", onCellClick);
      grid.appendChild(cell);
    }
  }

  // 셀 클릭 이벤트 핸들러
  function onCellClick(e) {
    const clickedNumber = parseInt(e.target.textContent);

    if (clickedNumber === 1 && !timer) {
      startTimer();
      shuffleNums(numbers2);
    }

    if (clickedNumber === currentIndex + 1) {
      currentIndex++;

      if (currentIndex <= 25) {
        // 1~25까지 눌렀을 경우
        const nextNumber = numbers2[currentIndex - 1];
        if (nextNumber !== undefined) {
          e.target.textContent = nextNumber;
        }
      }

      if (currentIndex > 25) {
        // 25 이후 숫자들
        e.target.textContent = ""; // 숫자를 지우고 배경을 변경
        e.target.classList.add("white-bg");
      }

      if (currentIndex === 50) {
        // 50까지 다 눌렀을 경우
        stopTimer();
      }
    }
  }

  // 타이머 시작 함수
  function startTimer() {
    const startTime = new Date().getTime();
    timer = setInterval(() => {
      elapsedTime = Math.floor((new Date().getTime() - startTime) / 1000);
      if (timerElement) {
        timerElement.textContent = elapsedTime;
      }
    }, 1000);
  }

  // 타이머 종료 함수
  function stopTimer() {
    clearInterval(timer);
    const result = document.getElementById("grid");
    if (result) {
      result.innerHTML = "게임종료! 총 걸린 시간: " + elapsedTime;
      localStorage.setItem("gameResult", elapsedTime);
    } else {
      alert("Error");
    }
  }

  initGrid();
};

createRandomDiv();

// 값 불러오기
const storedResult = localStorage.getItem("gameResult");
console.log(storedResult);
document.getElementById("ranks").textContent = storedResult;
