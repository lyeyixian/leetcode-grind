/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const countArr = []
    const codeOfA = 'a'.charCodeAt(0)
    
    for (let i = 0; i < 26; i++) {
        countArr.push(0)
    }
    
    for (const c of s) {
        const idx = c.charCodeAt(0)
        
        countArr[idx - codeOfA]++
    }
    
    for (const c of t) {
        const idx = c.charCodeAt(0)
        
        countArr[idx - codeOfA]--
    }
    
    return countArr.every(count => count === 0)
};