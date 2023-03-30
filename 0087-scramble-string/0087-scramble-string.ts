function isScramble(s1: string, s2: string): boolean {
    const mem: Map<string, boolean> = new Map()
    
    function dp(s1, s2) {
        if (mem.has(s1 + s2)) {
            return mem.get(s1 + s2)
        }
        
        if (s1.length === 1 && s1 === s2 || s1 === s2) {
            mem.set(s1 + s2, true)
            
            return true
        }
        
        const n = s1.length
        
        for (let i = 1; i < n; i++) {
            const s1X = s1.substring(0, i)
            const s1Y = s1.substring(i)
            const s1Xs1Ys2Xs2Y = dp(s1X, s2.substring(0, i)) && dp(s1Y, s2.substring(i))
            const s1Xs1Ys2Ys2X = dp(s1X, s2.substring(n - i)) && dp(s1Y, s2.substring(0, n - i))
            
            if (s1Xs1Ys2Xs2Y || s1Xs1Ys2Ys2X) {
                mem.set(s1 + s2, true)
                
                return true
            }
        }
        
        mem.set(s1 + s2, false)
        return false
    }
    
    return dp(s1, s2)
};

// naive solution
// function isScramble(s1: string, s2: string): boolean {
//     function dp(s1, s2) {
//         if (s1.length === 1 && s1 === s2 || s1 === s2) {
//             return true
//         }
        
//         const n = s1.length
        
//         for (let i = 1; i < n; i++) {
//             const s1X = s1.substring(0, i)
//             const s1Y = s1.substring(i)
//             const s1Xs1Ys2Xs2Y = dp(s1X, s2.substring(0, i)) && dp(s1Y, s2.substring(i))
//             const s1Xs1Ys2Ys2X = dp(s1X, s2.substring(n - i)) && dp(s1Y, s2.substring(0, n - i))
            
//             if (s1Xs1Ys2Xs2Y || s1Xs1Ys2Ys2X) {
//                 return true
//             }
//         }
        
//         return false
//     }
    
//     return dp(s1, s2)
// };