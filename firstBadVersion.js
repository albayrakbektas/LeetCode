let solution = function(isBadVersion) {
    return function(n) {
        let left = 0
        let right = n - 1
        while (left <= right) {
            const pivot = Math.floor(left + (right - left) / 2)
            if (!isBadVersion(pivot)) {
                left = pivot + 1
            } else {
                right = pivot
            }
        }
        console.log(left)
        return left
    }
}