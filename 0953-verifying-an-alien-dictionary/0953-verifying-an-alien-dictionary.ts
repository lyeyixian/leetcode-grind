function isAlienSorted(words: string[], order: string): boolean {
    if (words.length === 1) {
        return true
    }
    
    const charMapping = {}
    let charCode = 97
    
    for (const char of order) {
        charMapping[char] = String.fromCharCode(charCode)
        charCode++
    }
    
    const newWords = words.map(word => word.split('').map(char => charMapping[char]))
    
    for (let i = 1; i < newWords.length; i++) {
        if (!isLexicographicalOrder(newWords[i - 1], newWords[i])) {
            return false
        }
    }
    
    return true
};

function isLexicographicalOrder(str1, str2) {
    for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
        const char1 = str1[i] || ''
        const char2 = str2[i] || ''
        
        if (char1 < char2) {
            return true
        } else if (char1 > char2) {
            return false
        }
    }
    
    return true
}