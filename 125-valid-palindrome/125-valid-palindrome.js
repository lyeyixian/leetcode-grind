/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0
    let right = s.length - 1
    
    while (left < right) {
        const leftChar = s[left]
        const rightChar = s[right]
        
        if (!/[0-9a-zA-Z]+/.test(leftChar)) {
            left++
            continue
        }
        
        if (!/[0-9a-zA-Z]+/.test(rightChar)) {
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