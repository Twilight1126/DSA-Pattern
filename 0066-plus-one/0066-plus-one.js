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
     // edge case: input like [9,9,9] becomes [0,0,0] after loop, so prepend 1 to make [1,0,0,0]
     digits.unshift(1);
    return digits;
};