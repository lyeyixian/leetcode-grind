function wordPattern(pattern: string, s: string): boolean {
    const split = s.split(' ')

    // make sure the length of words and pattern are the same before proceeding
    if (split.length !== pattern.length) {
        return false
    }

    // have 2 map
    //
    // pattern --> word
    // ex: a --> dog
    //
    // word --> pattern
    // ex: dog --> a
    //
    // check if 'a' match to different thing when 'a' already exists in that respective map
    const patternToWord = new Map()
    const wordToPattern = new Map()
    
    for (let i = 0; i < split.length; i++) {
        const patternChar = pattern[i]
        const word = split[i]
        const samePatternMatchToDifferentWord = patternToWord.has(patternChar) && patternToWord.get(patternChar) !== word
        const sameWordMatchToDifferentPattern = wordToPattern.has(word) && wordToPattern.get(word) !== patternChar
        
        if (samePatternMatchToDifferentWord || sameWordMatchToDifferentPattern) {
            return false
        }
        
        patternToWord.set(patternChar, word)
        wordToPattern.set(word, patternChar)
    }

    return true
};