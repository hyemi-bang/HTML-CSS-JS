// setItem(key, value) : 해당 스토리지에 데이터를 저장한다
// localStorage , sessionStorage 에 저장할 수 있고 둘 모두 웹 브라우저를 통해서만 어디에 저장되어있는지 알 수 있다
sessionStorage.setItem('money',5000);
localStorage.setItem('age', 80);

// removeItem(key) : key를 사용해 해당 데이터를 삭제한다
// sessionStorage.removeItem('money');

// getItem(key) : key를 사용해 저장된 value를 꺼낸다
const data = sessionStorage.getItem('money');
const data2 = localStorage.getItem('age');
const data3 = sessionStorage.getItem('age');

console.log(data);
console.log(data2);
console.log(data3);
// 스토리지는 F12 개발자도구를 눌러 찾아갈수 있다
// > 애플리케이션  > 저장용량(스토리지) 에 가면 볼 수 있다


