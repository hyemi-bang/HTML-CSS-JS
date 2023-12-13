const btn3 = document.getElementById('btn3');
const out3 = document.getElementById('out3');

out3.style.fontSize = '30px';

const colors = ['red', 'blue', 'green', 'orange'];

function getRandomColor(){
    return colors[parseInt(Math.random() * colors.length)];
}
btn3.onclick = function() {
    out3.style.color = getRandomColor();
}