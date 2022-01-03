/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {
    let res;
    for (let i=0; i<nums.length; i++) {
        nums.splice(i, 1, nums[i]**2)
    }
    res = nums.sort((a,b) =>{return a - b})
    return res
};