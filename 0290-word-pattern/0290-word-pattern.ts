function wordPattern(pattern: string, s: string): boolean {
    const map = new Map()
    const split = s.split(' ')

    // make sure the length of words and pattern are the same before proceeding
    if (split.length !== pattern.length) {
        return false
    }

    // put word in Map.
    // If word already in Map, check if they are the same word, return false if not
    for (let i = 0; i < split.length; i++) {
        const patternChar = pattern[i]
        const word = split[i]

        if (map.has(patternChar)) {
            const wordToMatch = map.get(patternChar)

            if (wordToMatch !== word) {
                return false
            }
        } else {
            map.set(patternChar, word)
        }
    }

    // cannot have same word on different letter
    // ex: abcd --> aaaa aaaa cccc dddd (wrong)
    const set = new Set()

    for (const [key, value] of map.entries()) {
        if (set.has(value)) {
            return false
        }

        set.add(value)
    }

    return true
};