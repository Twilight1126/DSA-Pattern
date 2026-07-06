/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let k = right;
    let result = new Array(nums.length);

    while ( left <= right) {
        let leftsq = Math.pow(nums[left], 2);
        let rightsq = Math.pow(nums[right], 2);
        if (leftsq >= rightsq) {
            result[k] = leftsq;
            left++;
            k--;
        }
        else {
            result[k] = rightsq;
            right--;
            k--
        }

    }
    return result;
};