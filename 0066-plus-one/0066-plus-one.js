/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let i = digits.length-1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        }
        else {
            digits[i]++;
            return digits;
        }

    }
    // edge case when input is [9,9,9] to make add zero at last we have unshift so the result will be [1,1,1]
    digits.unshift(1);
    return digits;
};