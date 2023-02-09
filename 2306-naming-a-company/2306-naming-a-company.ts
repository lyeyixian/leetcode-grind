function distinctNames(ideas: string[]): number {
    const letterSuffixMap = new Map()
    
    for (const idea of ideas) {
        const firstLetter = idea[0]
        const suffix = idea.substring(1)
        
        if (!letterSuffixMap.has(firstLetter)) {
            letterSuffixMap.set(firstLetter, new Set())
        }
        
        letterSuffixMap.get(firstLetter).add(suffix)
    }
    
    const suffixes = [...letterSuffixMap.values()]
    let count = 0
    
    for (let i = 0; i < suffixes.length; i++) {
        const set1 = suffixes[i]
        
        for (let j = i + 1; j < suffixes.length; j++) {
            const set2 = suffixes[j]
            let duplicatesCount = 0
            
            for (const suffix of set2.values()) {
                if (set1.has(suffix)) {
                    duplicatesCount++
                }
            }
            
            const uniqueCount1 = set1.size - duplicatesCount
            const uniqueCount2 = set2.size - duplicatesCount
            count += uniqueCount1 * uniqueCount2 * 2
        }
    }
    
    return count
};