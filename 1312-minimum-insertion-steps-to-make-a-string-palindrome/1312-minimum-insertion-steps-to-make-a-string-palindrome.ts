function minInsertions(s: string): number {
    const mem = []
    const n = s.length
    
    for (let i = 0; i < n; i++) {
        mem[i] = new Array(n).fill(-1)
    }

    function dp(left, right) {
        if (left >= right) {
            return 0
        }
        
        if (mem[left][right] !== -1) {
            return mem[left][right]
        }
        
        mem[left][right] = s[left] === s[right]
            ? dp(left + 1, right - 1)
            : 1 + Math.min(dp(left + 1, right), dp(left, right - 1))
        
        return mem[left][right]
    }
    
    return dp(0, s.length - 1)
};