function gcdOfStrings(str1: string, str2: string): string {
    const length1 = str1.length
    const length2 = str2.length
    
    for (let prefixLength = Math.min(length1, length2); prefixLength >= 1; prefixLength--) {
        if (isDivisor(prefixLength, str1, length1, str2, length2)) {
            return str1.substring(0, prefixLength)
        }
    }
    
    return ''
};

function isDivisor(prefixLength, str1, length1, str2, length2) {
    if (length1 % prefixLength || length2 % prefixLength) {
        return false
    }
    
    const factor1 = Math.floor(length1 / prefixLength)
    const factor2 = Math.floor(length2 / prefixLength)
    const prefix = str1.substring(0, prefixLength)
    
    return prefix.repeat(factor1) === str1 && prefix.repeat(factor2) === str2
}