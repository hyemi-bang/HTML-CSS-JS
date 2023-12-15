
const first_names = ['민수', '민호', '민지', '수지', '도연', '연호', '근호', '정민'];
const last_names = ['김', '이', '박', '최', '서'];

const getFirstName = () =>
    first_names[parseInt(Math.random() * first_names.length)];

const getLastName = () =>
    last_names[parseInt(Math.random() * last_names.length)];

const getRandomName = () => getLastName() + getFirstName();

const getRandomScore = () => parseInt(Math.random() *101);


let stuNum = 0;

function Student() {
    this.stuNum = 'STU' + stuNum++;
    this.name = getRandomName();
    this.math = getRandomScore();
    this.eng = getRandomScore();
    this.kor = getRandomScore();
}

const student2 = [];

for (let i = 0; i < 100; ++i){
    student2.push(new Student());
}

console.log(student2);

// 모든학생들에게 평균 필드 추가하기
student2.forEach (stu => {
    stu.avg = (stu.kor + stu.eng + stu.math) / 3;
});

// student2.forEach (stu =>  stu.avg = (stu.kor + stu.eng + stu.math) / 3); // 같은 값

console.log(student2);

// 평균 점수 60점 미만 학생 배열 만들기
const fstus = student2.filter(stu => stu.avg < 60);
console.log(fstus);

// 각 과목 평균점수 계산
// 총 점 구하는 함수, 총 점을 전체 길이로 나눠서 평균 구하는 함수 

// 총합 결과에 .kor을 할 수 없음으로 문제가 생김
// student2.reduce((stu1, stu2) => stu.kor + stu.kor);

const getTotal = (sub) =>  student2.reduce((tot, stu) => tot + stu[sub], 0);
/* 
reduce에 첫 번째 반복을 초기값으로 진행 할 수 있음
const getTotal = (sub) =>  student2.reduce((tot, stu,index) => {
    console.log('index', index);
    return tot + stu[sub]
},0); 
*/

// 첫번째 값을 0으로 둬서 처음 1회차를 0과 스튜던트0번과 하겠다는 의미

console.log('국어 총합: ',getTotal('kor'));
console.log('영어 총합: ',getTotal('eng'));
console.log('수어 총합: ',getTotal('math'));

const getSubjectAvg = sub => getTotal(sub) / student2.length;

console.log(getSubjectAvg('kor'));
console.log(getSubjectAvg('eng'));
console.log(getSubjectAvg('math'));

const allStudentsTable = document.getElementById('all-students');
const underSixtyStudentsTable = document.getElementById('under-sixty-students');



const addRow = (table, stu) => {
    table.innerHTML +=`<div>${stu.stuNum}</div>`
                        +`<div>${stu.name}</div>`
                        +`<div>${stu.kor}</div>`
                        +`<div>${stu.eng}</div>`
                        +`<div>${stu.math}</div>`
                        +`<div>${stu.avg}</div>`
} 

student2.forEach(stu => addRow(allStudentsTable, stu));
student2.forEach(stu => addRow(underSixtyStudentsTable, stu));
