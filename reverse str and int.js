function reverseString(str) {
    return str.split().reverse().join();
}

console.log(reverseString("123444"));


function reverseInt(n) {
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}

console.log(reverseInt(-123));