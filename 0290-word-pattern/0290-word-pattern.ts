function wordPattern(pattern: string, s: string): boolean {
    const map = new Map()
    const split = s.split(' ')

    if (split.length !== pattern.length) {
        return false
    }

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

    const set = new Set()

    for (const [key, value] of map.entries()) {
        if (set.has(value)) {
            return false
        }

        set.add(value)
    }

    return true
};