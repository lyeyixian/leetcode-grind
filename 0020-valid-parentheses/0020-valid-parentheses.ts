function isValid(s: string): boolean {
    const stack = []
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    
    for (const bracket of s) {
        if (['(', '{', '['].includes(bracket)) {
            stack.push(bracketMap[bracket])
        } else {
            if (!stack.length) {
                return false
            }
            
            const topBracket = stack.pop()
            
            if (bracket !== topBracket) {
                return false
            }
        }
    }
    
    return stack.length === 0
};