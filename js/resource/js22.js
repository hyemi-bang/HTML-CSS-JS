const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');

// setTime : 한번만 실행, 메서드 실행 후 타이머ID를 반환 (타이머취소에 ID가 필요)
//window.setTimeout(() => {}, 1000);
// window 생략가능, (함수, 밀리초);, 

const timeout_id1 = setTimeout(() => box1.style.backgroundColor = 'red');
const timeout_id2 = setTimeout(() => box2.style.backgroundColor = 'orange');

setTimeout(timeout_id1, 4000); 
setTimeout(timeout_id2, 4000); 


// setInterval: 정해진 초마다 계속 실행
let x = 0, y=0;
const interval_id1 = setInterval(() => box1.style.left = x++ + 'px', 500);
const interval_id2 = setInterval(() => box2.style.left = y++ + 'px', 100);

// setTime, setInterval 멈추게하기전까지 계속 진행된다.

// clearTimeout(handler) : 해당 타임아웃 삭제

// 타임아웃을 비활성화 하기 위해서는 해당 타이머의 ID가 필요하다
document.getElementById('clear1').addEventListener('click', () => {
    clearTimeout(timeout_id1);
    clearTimeout(timeout_id2);
});

// clearInterval(handler) : 해당 인터벌 삭제
document.getElementById('clear2').addEventListener('click', () => {
    clearTimeout(interval_id1);
    clearTimeout(interval_id2);
});