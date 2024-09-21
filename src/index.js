module.exports = function reverse(n) {

    const newArray = Array.from(String(Math.abs(n)));
    const result = Number(newArray.reverse().join(''))
    return result
};









