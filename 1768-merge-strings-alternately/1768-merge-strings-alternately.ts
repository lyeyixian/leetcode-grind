function mergeAlternately(word1: string, word2: string): string {
    let ptr1 = 0
    let ptr2 = 0
    let res = []
    
    while (ptr1 < word1.length && ptr2 < word2.length) {
        res.push(word1[ptr1])
        res.push(word2[ptr2])
        ptr1++
        ptr2++
    }
    
    if (ptr1 < word1.length) {
        res.push(word1.substring(ptr1))
    } else if (ptr2 < word2.length) {
        res.push(word2.substring(ptr2))
    }
    
    return res.join('')
};

// recursive solution
// function mergeAlternately(word1: string, word2: string): string {
//     return helper(word1, word2, true)
// };

// function helper(s1, s2, turn1) {
//     if (!s1.length) {
//         return s2
//     }
    
//     if (!s2.length) {
//         return s1
//     }
    
//     return turn1
//         ? s1[0] + helper(s1.substring(1), s2, false)
//         : s2[0] + helper(s1, s2.substring(1), true)
// }