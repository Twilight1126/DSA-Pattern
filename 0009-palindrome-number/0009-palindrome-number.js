/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let orginalvalue = x;
    let rev = 0;
    while (x > 0) {
        let lastdigit = x % 10;
        rev = rev * 10 + lastdigit;
        x = (x / 10) | 0;
    }
    if (rev === orginalvalue) return true;
    return false;
};