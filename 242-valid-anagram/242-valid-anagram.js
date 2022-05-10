/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const table = {}
    
    for (const char of s) {
        if (!table[char]) {
            table[char] = 0
        }
        
        table[char]++
    }
    
    for (const char of t) {
        if (!table[char]) {
            return false
        }
        
        table[char]--
    }
    
    for (const key in table) {
        if (table[key] !== 0) {
            return false
        }
    }
    
    return true
};

// var isAnagram = function(s, t) {
//     const countArr = []
//     const codeOfA = 'a'.charCodeAt(0)
    
//     for (let i = 0; i < 26; i++) {
//         countArr.push(0)
//     }
    
//     for (const c of s) {
//         const idx = c.charCodeAt(0)
        
//         countArr[idx - codeOfA]++
//     }
    
//     for (const c of t) {
//         const idx = c.charCodeAt(0)
        
//         countArr[idx - codeOfA]--
//     }
    
//     return countArr.every(count => count === 0)
// };