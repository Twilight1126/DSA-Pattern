/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let Maxsum = 0;
    let sum = 0;

    //calculate first window sum
    for(let  i = 0; i < k; i++){
        sum += nums[i];
    }
        Maxsum = sum;
    // silde windown: update sum and track maximum
    for(let i = k; i < nums.length; i++){
        sum = sum - nums[i-k] + nums[i];
        if(sum > Maxsum){
            Maxsum = sum;
        }
    }
    return Maxsum/k;
    
};