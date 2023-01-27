function findAllConcatenatedWordsInADict(words: string[]): string[] {
    const set = new Set(words)
    const res = []
    
    for (const word of words) {
        if (helper(word, set)) {
            res.push(word)
        }
    }
    
    return res
};

function helper(word, set) {
    for (let i = 1; i < word.length; i++) {
        const prefix = word.substring(0, i)
        const suffix = word.substring(i)
        
        if (set.has(prefix) && (set.has(suffix) || helper(suffix, set))) {
            return true
        }
    }
    
    return false
}