/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let I, V, X, L, C, D, M;
    let arr = s.split('')
    let j = []
    let res = 0
    for (let i=0; i<arr.length; i++) {
        switch(arr[i]) {
            case 'I':
                I = 1
                j.push(I)
                break;
            case 'V':
                V = 5
                j.push(V)
                break;
            case 'X':
                X = 10
                j.push(X)
                break;
            case 'L':
                L = 50
                j.push(L)
                break;
            case 'C':
                C = 100
                j.push(C)
                break;
            case 'D':
                D = 500
                j.push(D)
                break;  
            case 'M':
                M = 1000
                j.push(M)
                break;    
        }   
    } 
    for (let k=0; k<j.length; k++) {
        if ((!j[k+1]) || (j[k] >= j[k+1])) {
            res += j[k]
            console.log(res);
        } else {
            res += (j[k+1] - j[k])
            k++
            console.log(res);
        }
    }
};

romanToInt("III")
romanToInt("LVIII")
romanToInt("MCMXCIV")