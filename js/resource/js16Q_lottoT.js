const lottoDiv = document.getElementById('lotto');

const lottoNums = [];
for (let i = 0; i < 1000; i++) {
    lottoNums.push(parseInt(Math.random() * 45 + 1));
}

const lottoCnt = [];

function LottoNum(num, cnt){
    this.num = num;
    this.cnt = cnt;
}

for (let i = 0; i < 45; ++i) {
    //lotto[i] = 0;

    // lottoCnt[i] = {
    //     num: i + 1,
    //     cnt: 0
    // }
    lottoCnt[i] = new LottoNum(i+1,0);
}

for (let i = 0; i < 1000; ++i) {
    //lottoCnt[lottoNums[i] - 1]++
    lottoCnt[lottoNums[i] - 1].cnt++;
}

console.log(lottoCnt);

/* lottoCnt.sort((a, b) => {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
}) */

lottoCnt.sort((a,b) => {
    return b.cnt - a.cnt;
})

lottoDiv.innerHTML += `<div>${lottoCnt[0].num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt[1].num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt[2].num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt[3].num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt[4].num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt[5].num}</div>`;
