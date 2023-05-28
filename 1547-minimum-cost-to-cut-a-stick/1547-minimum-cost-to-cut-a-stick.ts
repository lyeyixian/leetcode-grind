function minCost(n: number, cuts: number[]): number {
    const mem = {}
    
    function dp(i, j) {
        const cost = j - i
        
        if (cost === 1) {
            return 0
        }
        
        const key = [i, j].join(',')
        
        if (mem[key]) {
            return mem[key]
        }
        
        let res = Infinity
        
        for (const cut of cuts) {
            if (i < cut && cut < j) {
                res = Math.min(res, cost + dp(i, cut) + dp(cut, j))    
            }
        }
        
        res = res === Infinity ? 0 : res
        mem[key] = res
        
        return res
    }
    
    return dp(0, n)
};