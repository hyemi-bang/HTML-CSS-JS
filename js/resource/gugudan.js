// gugudan-container 가져와
const gugudanContainer = document.getElementById('gugudan');

gugudanContainer.style.display = 'grid';
gugudanContainer.style.gridTemplateColumns = 'repeat(8,1fr)';
gugudanContainer.style.gap = '3px 3px';



// println 함수 정의
/*function println(value) {
    // gugudan-container에 값을 추가
    gugudanContainer.innerHTML += value + '<br>';
}*/

function println(dan, gop){
    //return '<div>' + dan + 'x' + gop + '=' + dan * gop + '<div>';
    return `<div>${dan}x${gop}=${dan*gop}</div>`;
    // Javascript format string
}

/*
for (let dan = 2; dan <= 9; dan++) {
  //  println(i + '단');
    for (let gop = 1; gop <= 9; gop++) {
        //println(dan + ' * ' + gop + ' = ' + (dan * gop));
        //gugudanContainer.innerHTML += '<div>' + dan + 'x' + gop + '=' + dan * gop + '<div>'
        gugudanContainer.innerHTML += println(dan, gop)
    }
}
*/

for(let gop =1; gop<=9; ++gop ){
    for(let dan = 2; dan<=9; ++dan){
        gugudanContainer.innerHTML += println(dan,gop);
    }
}