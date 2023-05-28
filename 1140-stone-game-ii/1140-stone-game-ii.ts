function stoneGameII(piles: number[]): number {
    const n = piles.length
    const mem = []
    
    for (let i = 0; i < 2; i++) {
        mem[i] = []
        
        for (let j = 0; j < n + 1; j++) {
            mem[i][j] = new Array(n + 1).fill(-1)
        }
    }
    
    function dp(isAliceTurn, i, m) {
        if (i === n) {
            return 0
        }
        
        if (mem[isAliceTurn][i][m] !== -1) {
            return mem[isAliceTurn][i][m]
        }
        
        let totalStoneTaken = 0
        let res = isAliceTurn ? 0 : Infinity
        
        for (let x = 1; x <= 2 * m; x++) {
            if (i + x - 1 >= n) {
                break
            }
            
            totalStoneTaken += piles[i + x - 1]
            res = isAliceTurn
                ? Math.max(res, totalStoneTaken + dp(0, i + x, Math.max(m, x)))
                : Math.min(res, dp(1, i + x, Math.max(m, x))) // bob wants to minimize the stone alice get, becos he plays optimally to win as well
        }
        
        mem[isAliceTurn][i][m] = res
        
        return res
    }
    
    return dp(1, 0, 1)
};