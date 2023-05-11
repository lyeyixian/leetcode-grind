function maxUncrossedLines(nums1: number[], nums2: number[]): number {
    const dp = []
    const n = nums1.length
    const m = nums2.length
    
    for (let i = 0; i < n + 1; i++) {
        dp[i] = []
        
        for (let j = 0; j < m + 1; j++) {
            dp[i][j] = 0
        }
    }
    
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            if (nums1[i] === nums2[j]) {
                dp[i][j] = 1 + dp[i + 1][j + 1]
            } else {
                dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j])
            }
        }
    }
    
    return dp[0][0]
};

// memoized solution
// function maxUncrossedLines(nums1: number[], nums2: number[]): number {
//     const mem = []
//     const n = nums1.length
//     const m = nums2.length
    
//     for (let i = 0; i < n; i++) {
//         mem[i] = []
        
//         for (let j = 0; j < m; j++) {
//             mem[i][j] = -1
//         }
//     }
    
//     function dp(i, j) {
//         if (i >= n || j >= m) {
//             return 0
//         }
        
//         if (mem[i][j] !== -1) {
//             return mem[i][j]
//         }
        
//         let res = 0
        
//         if (nums1[i] === nums2[j]) {
//             res = 1 + dp(i + 1, j + 1)
//         } else {
//             res = Math.max(dp(i, j + 1), dp(i + 1, j))
//         }
        
//         mem[i][j] = res
        
//         return res
//     }
    
//     return dp(0, 0)
// };

// my own solution:
// function maxUncrossedLines(nums1: number[], nums2: number[]): number {
//     const mem = []
//     const n = nums1.length
//     const m = nums2.length
    
//     for (let i = 0; i < n; i++) {
//         mem[i] = []
        
//         for (let j = 0; j < m; j++) {
//             mem[i][j] = -1
//         }
//     }
    
//     function dp(i, j) {
//         if (i >= n || j >= m) {
//             return 0
//         }
        
//         if (mem[i][j] !== -1) {
//             return mem[i][j]
//         }
        
//         let res = 0
        
//         for (let k = j; k < m; k++) {
//             if (nums2[k] === nums1[i]) {
//                 res = Math.max(res, 1 + dp(i + 1, k + 1))
//             }
//         }
        
//         res = Math.max(res, dp(i + 1, j))
//         mem[i][j] = res
        
//         return res
//     }
    
//     return dp(0, 0)
// };