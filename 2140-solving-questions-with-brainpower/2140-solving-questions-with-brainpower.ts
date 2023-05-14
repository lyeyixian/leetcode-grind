function mostPoints(questions: number[][]): number {
    const n = questions.length
    const dp = new Array(n).fill(0)
    
    for (let i = n - 1; i >= 0; i--) {
        const [points, toSkip] = questions[i]
        
        dp[i] = Math.max(points + (dp[i + 1 + toSkip] || 0), dp[i + 1] || 0)
    }
    
    return dp[0]
};

// function mostPoints(questions: number[][]): number {
//     const n = questions.length
//     const mem = new Array(n).fill(-1)
    
//     function dp(i) {
//         if (i >= n) {
//             return 0
//         }
        
//         if (mem[i] !== -1) {
//             return mem[i]
//         }
        
//         const [points, toSkip] = questions[i]
        
//         mem[i] = Math.max(points + dp(i + 1 + toSkip), dp(i + 1))
        
//         return mem[i]
//     }
    
//     return dp(0)
// };