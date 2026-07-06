/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
   let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    //loop 1: Merge nums1 and nums2 from the end by placing the larger element at nums1[k]
    while (i >= 0 && j >= 0){
        if(nums1[i] >= nums2[j]){
            nums1[k] = nums1[i];
            i--;
            k--;
        }
        else {
            nums1[k] = nums2[j];
            j--;
            k--;
        }
    }
    // Loop 2: Copy any remaining elements from nums2 into nums1.
    while(j >= 0){
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};
console.log(merge([1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3));