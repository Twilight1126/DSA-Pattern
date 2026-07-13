/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let store = new Map();
    for(let  i = 0; i < nums.length; i++){
        let result = target - nums[i];
        if(store.has(result)){
            return [store.get(result),i];
        }
        store.set(nums[i],i);
    }
   
};


/*
let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            sum = nums[i] + nums[j];
            if (sum === target) {
                return [i, j];
            }
        }
    }
    */
