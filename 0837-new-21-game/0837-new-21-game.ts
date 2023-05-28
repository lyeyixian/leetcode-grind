function new21Game(n: number, k: number, maxPts: number): number {
    if (k === 0) {
        return 1.0
    }
    
    let windowSum = 0
    
    for (let i = k; i < k + maxPts; i++) {
        windowSum += i <= n ? 1 : 0
    }
    
    const dp = []
    
    for (let i = k - 1; i >= 0; i--) {
        dp[i] = windowSum / maxPts
        let toDeduct = 0
        
        if (i + maxPts <= n) {
            toDeduct = dp[i + maxPts] || 1
        }
        
        windowSum += dp[i] - toDeduct
    }
    
    return dp[0]
};

// recursive dp: TLE
// function new21Game(n: number, k: number, maxPts: number): number {
//     const mem = []
    
//     function dp(currPts) {
//         if (currPts >= k) {
//             return currPts <= n ? 1 : 0
//         }
        
//         if (mem[currPts]) {
//             return mem[currPts]
//         }
        
//         let probability = 0
        
//         for (let i = 1; i <= maxPts; i++) {
//             probability += dp(currPts + i)
//         }
        
//         mem[currPts] = probability / maxPts
        
//         return mem[currPts]
//     }
    
//     return dp(0)
// };