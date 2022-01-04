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