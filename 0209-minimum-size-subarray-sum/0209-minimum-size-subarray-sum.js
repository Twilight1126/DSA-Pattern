/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let left = 0;
    let sum = 0;
    let minlen = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= target) {
            minlen = Math.min(minlen, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    return minlen === Infinity ? 0 : minlen;

};