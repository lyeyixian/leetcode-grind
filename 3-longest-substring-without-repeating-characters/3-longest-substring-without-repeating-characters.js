/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0
    let right = 0
    const table = {}
    let max = 0
    
    while (right < s.length) {
        const letter = s[right]
        
        while (left < right && table[letter]) { // is repeating characters
            delete table[s[left]]
            left++
        }
        
        table[letter] = 1
        max = Math.max(max, right - left + 1)
        right++
    }
    
    return max
};
// abcab
// table: ca
// max: 3
// left: 1
// right: 4
// window: bcab
