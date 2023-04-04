function partitionString(s: string): number {
    let count = 1
    let set = new Set()
    
    for (const char of s) {
        if (set.has(char)) {
            set = new Set()
            count++
        }
            
        set.add(char)
    }
    
    return count
};