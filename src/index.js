module.exports = function reverse(n) {
    const absNumberString = Math.abs(n).toString();
    let newNumberString = '';

    for (let i = absNumberString.length - 1; i >= 0; i--) {
        newNumberString += absNumberString[i];
    }
    return newNumberString;
}
