/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()
    
    for (const str of strs) {
        const charArr = str.split('')
        
        charArr.sort()
        const key = charArr.join('')
        
        if (!map.has(key)) {
            map.set(key, [])
        }
        
        map.get(key).push(str)
    }
    const res = []
    
    for (const value of map.values()) {
        res.push(value)
    }
    
    return res
};