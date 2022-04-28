/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0
    let right = s.length - 1
    
    while (left < right) {
        let leftChar = s[left]
        let rightChar = s[right]
        
        while (left < s.length && !/[0-9a-zA-Z]+/.test(leftChar)) {
            left++
            leftChar = s[left] || ''
        }
        
        while (right >= 0 && !/[0-9a-zA-Z]+/.test(rightChar)) {
            right--
            rightChar = s[right] || ''
        }
        
        if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
            return false
        }
        
        left++
        right--
    }
    
    return true
};