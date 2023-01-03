function detectCapitalUse(word: string): boolean {
    if (word.toUpperCase() === word) {
        return true
    }
    
    if (word.toLowerCase() === word) {
        return true
    }
    
    const skipFirst = word.substring(1)
    
    if (skipFirst.toLowerCase() === skipFirst) {
        return true
    }
    
    return false
};