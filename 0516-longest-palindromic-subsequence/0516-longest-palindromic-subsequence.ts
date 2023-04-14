function longestPalindromeSubseq(s: string): number {
    let max = 0
    const mem = []
    const n = s.length
    
    for (let i = 0; i < n; i++) {
        mem[i] = new Array(n).fill(-1)
    }
    
    function dp(i, j) {
        if (i < 0 || j >= s.length) {
            return 0
        }
        
        if (mem[i][j] !== -1) {
            return mem[i][j]
        }
        
        if (s[i] === s[j]) {
            const length = i === j ? 1 : 2
            
            mem[i][j] = dp(i - 1, j + 1) + length
        } else {
            mem[i][j] = Math.max(dp(i - 1, j), dp(i, j + 1))
        }
        
        max = Math.max(max, mem[i][j])
        
        return mem[i][j]
    }
    
    for (let i = 0; i < s.length; i++) {
        dp(i, i)
        dp(i, i + 1)
    }
    
    return max
};

// use LCS solution to solve this by reversing the string and put it as the 2nd argument
// function longestPalindromeSubseq(s: string): number {
//     const reversedS = []
    
//     for (let i = s.length - 1; i >= 0 ; i--) {
//         reversedS.push(s[i])
//     }
    
//     return longestCommonSubsequence(s, reversedS.join(''))
// };

// function longestCommonSubsequence(text1: string, text2: string): number {
//     const dp = []
//     const n = text1.length
//     const m = text2.length
    
//     for (let i = 0; i < n + 1; i++) {
//         dp[i] = []
        
//         for (let j = 0; j < m + 1; j++) {
//             dp[i][j] = 0
//         }
//     }
    
//     for (let i = 1; i < dp.length; i++) {
//         for (let j = 1; j < dp[0].length; j++) {
//             if (text1[i - 1] === text2[j - 1]) {
//                 dp[i][j] = dp[i - 1][j - 1] + 1
//             } else {
//                 dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
//             }
//         }
//     }
    
//     return dp[n][m]
// };