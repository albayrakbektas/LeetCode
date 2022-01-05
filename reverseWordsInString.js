/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    let reverse = []
    reverse = reverse.reduceRight.call(s, (a, b) => a + b).split(' ').reverse().join(' ')
    return reverse
};

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords2 = function (s) {
    let res = s.split(' ')
    for (let i=0; i<res.length; i++) {
        res[i] = res[i].split('').reverse().join('')
    }
    return res.join(' ')
}