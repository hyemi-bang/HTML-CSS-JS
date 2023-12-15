
/*
    1. 100명의 랜덤 학생 정보를 생성한다
    (학생객체는 : 학번(중복없이), 이름, 국어, 영어, 수학을 가지고 있음)

    2. 모든 학생 객체에 평균 점수 속성을 추가해보기

    3. 평균 점수가 60점 미만인 학생들로만 이루어진 배열을 생성해보기

    4. 모든 학생들의 각 과목 평균 점수를 계산해보기 

    5. 2,3,4번의 내용을 HTML에 테이블 형식으로 정리해놓기 (테이블태그나, 그리드레아웃을 사용해도 된다.)

*/

const studentInfo = document.getElementById('student-info');

// 랜덤이름
const lastName = ['김', '이', '장', '박', '송','기', '장' ,'최', '송', '우', '동', '조', '유', '양', '배', '강', '권'];
const firstName = ['철수', '민수', '소이', '소희', '민희', '혜은', '정호', '하하', '히히', '호동','소윤', '아름', '민희', '영희', '솔이', '송이', '지호', '주현', '도연', '현경', '윤재', '태수'];

const fullName = [];

function getRandomName(){
    const name = lastName[parseInt(Math.random()*lastName.length)] +
    firstName[parseInt(Math.random()*firstName.length)];
    fullName.push(name);
    return name;
}

for (let i = 0; i < 100; i++) {
    getRandomName();
}
console.log('이름:', fullName);


//학번
let studentCount = 1;

function studentID(){
    return studentCount++;
}

//랜덤 점수
function getRandomScore(){
    return parseInt(Math.random()*101);
}

// 학생 정보 생성
// map 이용해서 생성한 랜덤점수를 학생 한명씩 부여하기
const students =[];
for (let i = 0; i < 100; i++) {
    students.push(studentsof100());
}

// 100명의 학생 생성
function studentsof100(){
    return {
        s_id:studentID(),
        name:getRandomName(),
        kor:getRandomScore(),
        eng:getRandomScore(),
        math:getRandomScore(),
        avg:0
    };
}

// 점수 추가
const studentsWithScores = students.map(student => {
    const avg = calculateAvg(student);
    return {
    s_id: student.s_id,
    name: student.name,
    kor: getRandomScore(),
    eng: getRandomScore(),
    math: getRandomScore(),
    avg: avg
    };
});

// 평균
function calculateAvg(student){
    return(student.kor + student.eng + student.math) / 3;
}

console.log('학생 인포:', studentsWithScores);


// 평균점수가 60점 미만인 학생들 배열
const underSixty = studentsWithScores.filter(student => student.avg < 60);
console.log('평균 60점 미만 학생들:', underSixty);

// 학생들의 각 과목 평균 점수 
const avgKor = studentsWithScores.reduce((sum, student) => sum + student.kor, 0)/studentsWithScores.length;
const avgEng = studentsWithScores.reduce((sum, student) => sum + student.eng, 0)/studentsWithScores.length;
const avgMath = studentsWithScores.reduce((sum, student) => sum + student.math, 0)/studentsWithScores.length;

console.log('전체학생 평균 국어점수:', avgKor);
console.log('전체학생 평균 영어점수:', avgEng);
console.log('전체학생 평균 수학점수:', avgMath);


// 모든 학생 객체에 평균 점수 속성 추가하기 
// 평균점수 60점 미만애들 테이블형식
// 학생들의 각 과목 평균점수 계산 // 3가지 모두HTML에 나오게 테이블보더로 표 만들어서 넣..? 

let htmlTable = '<table border="2"><tr><th>학번</th><th>이름</th><th>국어</th><th>영어</th><th>수학</th><th>평균</th></tr>';
studentsWithScores.forEach(student => {
    htmlTable += `<tr><td>${student.s_id}</td><td>${student.name}</td><td>${student.kor}</td><td>${student.eng}</td><td>${student.math}</td>
    <td>${student.avg.toFixed(2)}</td></tr>`
});
htmlTable += '</table><br>';

let avgAllTable = '<table border="1"><tr><th>과목</th><th>평균</th></tr>';
avgAllTable += `<tr><td>국어</td><td>${avgKor.toFixed(2)}</td></tr>`;
avgAllTable += `<tr><td>영어</td><td>${avgEng.toFixed(2)}</td></tr>`;
avgAllTable += `<tr><td>수학</td><td>${avgMath.toFixed(2)}</td></tr>`;
avgAllTable += '</table>';

let underSixtyTable = '<table border="1"><tr><th>학번</th><th>이름</th><th>국어</th><th>영어</th><th>수학</th><th>평균</th></tr>';
underSixty.forEach(student => {
    underSixtyTable += `<tr><td>${student.s_id}</td><td>${student.name}</td><td>${student.kor}</td><td>${student.eng}</td><td>${student.math}</td><td>${student.avg.toFixed(2)}</td></tr>`;
});
underSixtyTable += '</table>';


// HTML에 테이블 추가
studentInfo.innerHTML += htmlTable;
studentInfo.innerHTML += '<hr>'
studentInfo.innerHTML += '<h3>60점 미만 학생들</h3>';
studentInfo.innerHTML += underSixtyTable;
studentInfo.innerHTML += '<hr>'; 
studentInfo.innerHTML += '<h3>전체 학생 과목별 평균점수</h3>';
studentInfo.innerHTML += avgAllTable;
