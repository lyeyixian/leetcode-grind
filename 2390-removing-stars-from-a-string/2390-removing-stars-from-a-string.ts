function removeStars(s: string): string {
    const stack = []
    const charArr = s.split('')
    
    for (const char of s) {
        if (char === '*') {
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    
    return stack.join('')
};