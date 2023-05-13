function countGoodStrings(low: number, high: number, zero: number, one: number): number {
    const modulo = 1000000007
    const dp = new Array(high + 1).fill(0)
    
    dp[0] = 1
    
    for (let i = 1; i <= high; i++) {
        dp[i] += dp[i - zero] || 0
        dp[i] += dp[i - one] || 0
        dp[i] %= modulo
    }
    
    return dp.slice(low, high + 1).reduce((a, b) => a + b) % modulo
};

// function countGoodStrings(low: number, high: number, zero: number, one: number): number {
//     const modulo = 1000000007
//     const mem = new Map()
    
//     function dp(len) {
//         if (len > high) {
//             return 0
//         }
        
//         if (mem.has(len)) {
//             return mem.get(len)
//         }
        
//         let res = len >= low ? 1 : 0
//         res += dp(len + zero) + dp(len + one)
//         res %= modulo
        
//         mem.set(len, res)
        
//         return res
//     }
    
//     return dp(0)
// };