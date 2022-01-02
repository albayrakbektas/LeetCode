const searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    let pivot;
    while (left <= right) {
        pivot = Math.floor(left + (right - left) / 2)
        if (target === nums[pivot]) {
            return pivot
        } else if (target < nums[pivot]) {
            right = pivot - 1
        } else if (target > nums[pivot]) {
            left = pivot + 1
        }
    }
    return target > nums[pivot] ? pivot + 1 : pivot
};