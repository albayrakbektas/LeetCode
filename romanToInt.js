/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let I, V, X, L, C, D, M;
    let stringArray = s.split('')
    let numberArray = []
    let result = 0
    for (let i=0; i<stringArray.length; i++) {
        switch(stringArray[i]) {
            case 'I':
                I = 1
                numberArray.push(I)
                break;
            case 'V':
                V = 5
                numberArray.push(V)
                break;
            case 'X':
                X = 10
                numberArray.push(X)
                break;
            case 'L':
                L = 50
                numberArray.push(L)
                break;
            case 'C':
                C = 100
                numberArray.push(C)
                break;
            case 'D':
                D = 500
                numberArray.push(D)
                break;  
            case 'M':
                M = 1000
                numberArray.push(M)
                break;    
        }   
    } 
    for (let k=0; k<numberArray.length; k++) {
        if ((!numberArray[k+1]) || (numberArray[k] >= numberArray[k+1])) {
            result += numberArray[k]
        } else {
            result += (numberArray[k+1] - numberArray[k])
            k++
        }
    }
    return result
}