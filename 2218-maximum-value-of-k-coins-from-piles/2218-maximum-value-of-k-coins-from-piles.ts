function maxValueOfCoins(piles: number[][], k: number): number {
    const n = piles.length
    const mem = []
    
    for (let i = 0; i < n; i++) {
        mem[i] = new Array(k + 1).fill(-1)
    }
    
    function dp(pileIdx, coinsLeft) {
        if (pileIdx >= n) {
            return 0
        }
        
        if (mem[pileIdx][coinsLeft] !== -1) {
            return mem[pileIdx][coinsLeft]
        }
        
        // dont take current pile
        let res = dp(pileIdx + 1, coinsLeft)
        
        // take current pile
        let currentPile = 0
        for (let i = 0; i < Math.min(piles[pileIdx].length, coinsLeft); i++) {
            currentPile += piles[pileIdx][i]
            res = Math.max(res, currentPile + dp(pileIdx + 1, coinsLeft - (i + 1)))
        }
        
        mem[pileIdx][coinsLeft] = res
        
        return res
    }
    
    return dp(0, k)
};