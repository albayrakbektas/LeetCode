/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binarySearch = function(nums, target) {
    let left = 0
    let pivot = 0
    let right = nums.length - 1
    while (left <= right) {
        pivot = Math.floor(left + (right - left) / 2)
        if (nums[pivot] === target) {
            console.log(pivot)
            return pivot
        } else if (target < nums[pivot]) {
            right = pivot - 1
        } else {
            left = pivot + 1
        }
    }
    return -1
}