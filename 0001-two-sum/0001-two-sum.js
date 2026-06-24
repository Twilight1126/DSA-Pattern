/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for( let i = 0; i < nums.length; i++){
    let seen = target - nums[i];
    if(map.has(seen)){
        return [map.get(seen),i]
    }
    map.set(nums[i],i);
  }
};