function numWays(words: string[], target: string): number {
    const modulo = 1000000007
    const map = new Map()
    
    for (const word of words) {
        for (let k = 0; k < word.length; k++) {
            const key = `${k},${word[k]}`
            
            if (!map.has(key)) {
                map.set(key, 0)
            }
            
            map.set(key, map.get(key) + 1)
        }
    }
    
    const mem = []
    
    for (let i = 0; i < target.length; i++) {
        mem[i] = []
        
        for (let j = 0; j < words[0].length; j++) {
            mem[i][j] = -1
        }
    }
    
    function dp(i, k) {
        if (i >= target.length) {
            return 1
        }
        
        if (k >= words[0].length) {
            return 0
        }
        
        if (mem[i][k] !== -1) {
            return mem[i][k]
        }
        
        const currChar = target[i]
        let res = dp(i, k + 1) // skip current char at k
        const key = `${k},${currChar}`
        res += dp(i + 1, k + 1) * map.get(key) || 0 // select current char at k
        res %= modulo
        
        mem[i][k] = res
        
        return res
    }
    
    return dp(0, 0)
};