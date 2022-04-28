/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    function isAlphanumeric(char) {
        const codeOfChar = char.charCodeAt(0)
        
        return codeOfChar >= 'a'.charCodeAt(0) && codeOfChar <= 'z'.charCodeAt(0) ||
            codeOfChar >= 'A'.charCodeAt(0) && codeOfChar <= 'Z'.charCodeAt(0) ||
            codeOfChar >= '0'.charCodeAt(0) && codeOfChar <= '9'.charCodeAt(0)
    }
    
    let left = 0
    let right = s.length - 1
    
    while (left < right) {
        const leftChar = s[left]
        const rightChar = s[right]
        
        if (!isAlphanumeric(leftChar)) {
            left++
            continue
        }
        
        if (!isAlphanumeric(rightChar)) {
            right--
            continue
        }
        
        if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
            return false
        }
        
        left++
        right--
    }
    
    return true
};