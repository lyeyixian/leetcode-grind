function stoneGameIII(stoneValue: number[]): string {
    const n = stoneValue.length
    const mem = new Array(n).fill(-1)
    
    function dp(i) {
        if (i >= n) {
            return 0
        }
        
        if (mem[i] !== -1) {
            return mem[i]
        }
        
        let res = -Infinity
        let totalValue = 0
        
        for (let j = 0; j < 3; j++) {
            if (i + j >= n) {
                break
            }
            
            totalValue += stoneValue[i + j]
            res = Math.max(res, totalValue - dp(i + j + 1))
        }
        
        mem[i] = res
        
        return res
    }
    
    const res = dp(0)
    
    return res > 0
        ? 'Alice'
        : res < 0
            ? 'Bob'
            : 'Tie'
};