/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
    let res = []
    for (let i=0; i<numbers.length; i++) {
        for (let j=i+1; j<numbers.length; j++) {
            let isTarget = numbers[i] + numbers[j]
            if (isTarget === target) {
                res.push(i + 1)
                res.push(j + 1)
            }
        }
    }
    return res
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSumExpected = function (numbers, target) {
    let left = 0
    let right = numbers.length - 1
    while (left <= right) {
        let sum = numbers[left] + numbers[right]
        if (target === sum) {
            return [left+1, right+1]
        } else if (target > sum) {
            left++
        } else {
            right--
        }
    }
}