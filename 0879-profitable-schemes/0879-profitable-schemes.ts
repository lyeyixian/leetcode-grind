function profitableSchemes(n: number, minProfit: number, group: number[], profit: number[]): number {
    const modulo = 1000000007
    let mem = []
    
    for (let i = 0; i < n + 1; i++) {
        mem[i] = []
        
        for (let j = 0; j < 101; j++) {
            mem[i][j] = []
            
            for (let k = 0; k < group.length + 1; k++) {
                mem[i][j][k] = -1
            }
        }
    }
    
    function dp(n, currProfit, i) {
        if (n < 0) {
            return 0
        }
        
        if (n === 0) {
            return currProfit >= minProfit ? 1 : 0
        }
        
        if (i >= group.length) {
            return currProfit >= minProfit ? 1 : 0
        }
        
        if (mem[n][currProfit][i] !== -1) {
            return mem[n][currProfit][i]
        }
        
        const take = dp(n - group[i], Math.min(minProfit, currProfit + profit[i]), i + 1)
        const noTake = dp(n, currProfit, i + 1)
        let res = take + noTake
        
        res %= modulo
        mem[n][currProfit][i] = res
        
        return res
    }
    
    return dp(n, 0, 0)
};