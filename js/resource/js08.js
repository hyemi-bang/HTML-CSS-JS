
const text = 'apple/kwiw/orange/banana/grape';
const url = 'http://naver.com';
const input = '   abc123   ';

console.log('length: ', text.length);
console.log('split:', text.split('/'));
console.log('text includes strawberry?:', text.includes('strawberry'));
console.log('text includes banana?:', text.includes('banana'));
console.log('indexOf\'wi\':',text.indexOf('wi'));

console.log('startsWith: ftp:// ?', url.startsWith('ftp://'));
console.log('endsWith: .net ?', url.endsWith('.net'));
console.log(url.toUpperCase());
console.log(url.toUpperCase().toLowerCase());

console.log(url.substring(3,8));
console.log(url.substring(3));
console.log(url.substring(3,undefined));

console.log(`${input} vs ${input.trim()}`);