/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    runsum = nums[0];
    sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (runsum + nums[i] > nums[i]) {
            runsum += nums[i];
        }
        else {
            runsum = nums[i];
        }
        if (runsum > sum) {
            sum = runsum;
        }
    }
    return sum;

};