/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let store = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (store.has(nums[i])) {
            let count = store.get(nums[i]);
            count++;
            store.set(nums[i], count);
        }
        else {
            let startingcount = 1;
            store.set(nums[i], startingcount);
        }
    }
    let highestvalue = 0;
    let majorityvalue = -1;
    for (let [key, value] of store.entries()) {
        if (value > highestvalue) {
            highestvalue = value;
            majorityvalue = key;

        }
    }
    return majorityvalue;

};