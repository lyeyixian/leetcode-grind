function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) {
        return false
    }
    
    const freqArr = new Array(26).fill(0)
    
    for (const char of s1) {
        freqArr[indexOf(char)]++
    }
    
    for (let right = s1.length - 1; right < s2.length; right++) {
        const left = right - s1.length + 1
        
        if (left === 0) {
            for (let i = left; i <= right; i++) {
                freqArr[indexOf(s2[i])]--
            }
        } else {
            const prevLeftChar = s2[left - 1]
            freqArr[indexOf(prevLeftChar)]++
            const currentRight = s2[right]
            freqArr[indexOf(currentRight)]--
        }
        
        if (isFreqAllZero(freqArr)) {
            return true
        }
    }
    
    return false
};

function indexOf(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0)
}

function isFreqAllZero(arr) {
    for (const freq of arr) {
        if (freq !== 0) {
            return false
        }
    }
    
    return true
}