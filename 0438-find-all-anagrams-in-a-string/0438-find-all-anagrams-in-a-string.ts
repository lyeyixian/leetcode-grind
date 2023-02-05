function findAnagrams(s: string, p: string): number[] {
    if (p.length > s.length) {
        return []
    }
    
    const freqArrP = new Array(26).fill(0)
    const freqArrS = new Array(26).fill(0)
    
    for (let i = 0; i < p.length; i++) {
        freqArrP[indexOf(p[i])]++
        freqArrS[indexOf(s[i])]++
    }
    
    const res = []
    
    for (let left = 0; left < s.length - p.length + 1; left++) {
        const right = left + p.length - 1
        
        if (left !== 0) {
            const prevChar = s[left - 1]
            freqArrS[indexOf(prevChar)]--
            const currChar = s[right]
            freqArrS[indexOf(currChar)]++
        }
        
        if (isAnagram(freqArrP, freqArrS)) {
            res.push(left)
        }
    }
    
    return res
};

function indexOf(str) {
    return str.charCodeAt(0) - 'a'.charCodeAt(0)
}

function isAnagram(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    
    return true
}