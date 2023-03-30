function isScramble(s1: string, s2: string): boolean {
    const mem: Map<string, boolean> = new Map()
    
    function checkCharFrequency(s1, s2) {
        const count1 = new Array(26).fill(0)
        const count2 = new Array(26).fill(0)
        
        for (let i = 0; i < s1.length; i++) {
            const char1 = s1[i].charCodeAt(0)
            const char2 = s2[i].charCodeAt(0)
            const offset = 'a'.charCodeAt(0)
            
            count1[char1 - offset]++
            count2[char2 - offset]++
        }
        
        for (let i = 0; i < 26; i++) {
            if (count1[i] !== count2[i]) {
                return false
            }
        }
        
        return true
    }
    
    function dp(s1, s2) {
        if (s1.length === 1 && s1 === s2 || s1 === s2) {            
            return true
        }
        
        const key = `${s1},${s2}`
        
        if (mem.has(key)) {
            return mem.get(key)
        }
        
        if (!checkCharFrequency(s1, s2)) {
            mem.set(key, false)
            
            return false
        }
        
        const n = s1.length
        
        for (let i = 1; i < n; i++) {
            const s1X = s1.substring(0, i)
            const s1Y = s1.substring(i)
            const s1Xs1Ys2Xs2Y = dp(s1X, s2.substring(0, i)) && dp(s1Y, s2.substring(i))
            const s1Xs1Ys2Ys2X = dp(s1X, s2.substring(n - i)) && dp(s1Y, s2.substring(0, n - i))
            
            if (s1Xs1Ys2Xs2Y || s1Xs1Ys2Ys2X) {
                mem.set(key, true)
                
                return true
            }
        }
        
        mem.set(key, false)
        return false
    }
    
    return dp(s1, s2)
};

// memoization dp
// function isScramble(s1: string, s2: string): boolean {
//     const mem: Map<string, boolean> = new Map()
    
//     function dp(s1, s2) {
//         const key = `${s1},${s2}`
        
//         if (mem.has(key)) {
//             return mem.get(key)
//         }
        
//         if (s1.length === 1 && s1 === s2 || s1 === s2) {
//             mem.set(key, true)
            
//             return true
//         }
        
//         const n = s1.length
        
//         for (let i = 1; i < n; i++) {
//             const s1X = s1.substring(0, i)
//             const s1Y = s1.substring(i)
//             const s1Xs1Ys2Xs2Y = dp(s1X, s2.substring(0, i)) && dp(s1Y, s2.substring(i))
//             const s1Xs1Ys2Ys2X = dp(s1X, s2.substring(n - i)) && dp(s1Y, s2.substring(0, n - i))
            
//             if (s1Xs1Ys2Xs2Y || s1Xs1Ys2Ys2X) {
//                 mem.set(key, true)
                
//                 return true
//             }
//         }
        
//         mem.set(key, false)
//         return false
//     }
    
//     return dp(s1, s2)
// };

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