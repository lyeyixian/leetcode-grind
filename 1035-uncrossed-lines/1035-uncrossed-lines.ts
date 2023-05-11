function maxUncrossedLines(nums1: number[], nums2: number[]): number {
    const mem = []
    const n = nums1.length
    const m = nums2.length
    
    for (let i = 0; i < n; i++) {
        mem[i] = []
        
        for (let j = 0; j < m; j++) {
            mem[i][j] = -1
        }
    }
    
    function dp(i, j) {
        if (i >= n || j >= m) {
            return 0
        }
        
        if (mem[i][j] !== -1) {
            return mem[i][j]
        }
        
        let res = 0
        
        for (let k = j; k < m; k++) {
            if (nums2[k] === nums1[i]) {
                res = Math.max(res, 1 + dp(i + 1, k + 1))
            }
        }
        
        res = Math.max(res, dp(i + 1, j))
        mem[i][j] = res
        
        return res
    }
    
    return dp(0, 0)
};