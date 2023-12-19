//윈도우 객체
console.log(window);

/*
// 경고창을 띄우는 함수
window.alert('경고창');

// 입력창과 확인창 메서드는 사용자의 선택 결과를 리턴한다
let result = window.prompt('입력창');
console.log('입력창의 결과: ', result);
result = window.confirm('확인창, 결과를 리턴받을 수 있다');
console.log('확인창의 결과: ', result);
*/

//현재 기기의 모니터(화면)에 대한 정보
console.log(screen);

// 현재 웹 페이지의 DOM객체
console.log(document);
console.log(document.head);
console.log(document.body);

// 웹 브라우저의 페이지 이동내역
console.log(history);

/*
    history.back() : 이전 페이지로
    history.forward() : 다음 페이지로
    history.go(index) : 원하는 페이지로 (-1은 이전, +1은 다음 페이지)
*/

const backBtn = document.querySelector('#backBtn');
const forwardBtn = document.querySelector('#forwardBtn');
const goBtn = document.querySelector('#goBtn');
const historyIndex = document.querySelector('#historyIndex');

backBtn.addEventListener('click', () => history.back())
forwardBtn.addEventListener('click', () => history.forward())
goBtn.addEventListener('click', () => history.go(historyIndex.value));

//history.state - 사용자가 직접 정의할 수 있는 방문 내역

// history에 새로운 방문이력 추가하기
// file://로 보는 경우 작동하지 않음

/* js21.js:46 Uncaught DOMException: Failed to execute 'pushState' on 
'History': A history state object with URL 'http://op.gg/' cannot be created 
in a document with origin 'null' and URL 'file:///C:/JavaFullstack_hm/front-workspace/js/21_BOM.html'.
at file:///C:/JavaFullstack_hm/front-workspace/js/resource/js21.js:46:9*/

//history.pushState(null, null, 'http://op.gg');

//현재 위치하고 있는 경로에 대한 객체
console.log(location);

// 현재 URL을 부분적으로 확인할 수 있는 기능을 제공
console.log(location.protocol);
console.log(location.pathnam);
// location.href = 'http://op.gg'; // 바로 해당위치로 이동해 버린다 // 페이지이동
// location.reload(); // 새로고침

// 브라우저 정보
console.log(navigator);