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
            if (!stack.length || bracket !== stack.pop()) {
                return false
            }
        }
    }
    
    return stack.length === 0
};