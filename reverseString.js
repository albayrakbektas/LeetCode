/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(s) {
    s.reverse()
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString2 = function (s) {
    let left = 0
    let right = s.length - 1
    for (let i=0; i<s.length/2; i++) {
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
};