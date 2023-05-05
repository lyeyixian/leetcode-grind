function maxVowels(s: string, k: number): number {
    let count = 0
    let left = 0
    let right = k - 1
    const vowel = new Set()
    
    vowel.add('a')
    vowel.add('e')
    vowel.add('i')
    vowel.add('o')
    vowel.add('u')
    
    for (let i = 0; i < k; i++) {
        if (vowel.has(s[i])) {
            count++
        }
    }
    
    let res = count
    
    for (let right = k; right < s.length; right++) {
        if (vowel.has(s[left])) {
            count--
        }
        
        left++
        
        if (vowel.has(s[right])) {
            count++
        }
        
        res = Math.max(res, count)
    }
    
    return res
};