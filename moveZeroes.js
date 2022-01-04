/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    let zeroes = 0
    let i = 0
    while (i<nums.length) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            zeroes++
        } else {
            i++
        }
    }
    for (let j=1; j<=zeroes; j++) {
        nums.push(0)
    }
};