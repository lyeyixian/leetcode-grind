function mergeAlternately(word1: string, word2: string): string {
    return helper(word1, word2, true)
};

function helper(s1, s2, turn1) {
    if (!s1.length) {
        return s2
    }
    
    if (!s2.length) {
        return s1
    }
    
    return turn1
        ? s1[0] + helper(s1.substring(1), s2, false)
        : s2[0] + helper(s1, s2.substring(1), true)
}