/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const letterCount = {}
    
    for (const char of magazine) {
        if (!(char in letterCount)) {
            letterCount[char] = 0
        }
        
        letterCount[char]++
    }
    
    for (const char of ransomNote) {
        if (!(char in letterCount)) {
            return false
        }
        
        letterCount[char]--
        
        if (letterCount[char] < 0) {
            return false
        }
    }
    
    return true
};