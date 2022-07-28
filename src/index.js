module.exports = function reverse(n) {
    const arr = n.toString().split('').map((num)=>{return Number(num)});
    const reversedArr = arr.reverse().join('');
    return parseInt(reversedArr);
}
