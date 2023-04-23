// dp[i] = the number of ways starting at index i
function numberOfArrays(s: string, k: number): number {
    const modulo = 1000000007
    const mem = new Array(s.length).fill(-1)
    
    function dp(i) {
        if (i >= s.length) {
            return 1
        }
        
        if (s[i] === '0') {
            return 0
        }
        
        if (mem[i] !== -1) {
            return mem[i]
        }
        
        let res = 0
        
        for (let j = i; j < s.length; j++) {
            const num = parseInt(s.substring(i, j + 1))
            
            if (num > k) {
                break
            }
            
            res += dp(j + 1)
            res %= modulo
        }
        
        mem[i] = res
        
        return res
    }
    
    return dp(0)
};