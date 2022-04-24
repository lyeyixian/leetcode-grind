/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const parenMapping = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    const openParenList = ['(', '[', '{']
    const stack = []
    
    for (const char of s) {
        if (openParenList.includes(char)) {
            const closeParen = parenMapping[char]
            
            stack.push(closeParen)
        } else {
            if (!stack.length) {
                return false
            }
            
            const poppedParen = stack.pop()
            
            if (poppedParen !== char) {
                return false
            }
        }
    }
    
    return !stack.length
};