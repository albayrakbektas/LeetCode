/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotateArray = function(nums, k) {
    const length = nums.length
    const res = k % length
    for (let i=0; i<length - res; i++) {
        nums.push(nums[i])
    }
    nums.splice(0, length - res)
};