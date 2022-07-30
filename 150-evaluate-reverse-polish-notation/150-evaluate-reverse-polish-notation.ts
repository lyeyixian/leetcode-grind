function evalRPN(tokens: string[]): number {
    const token: string = tokens.pop()
    
    if (!isNaN(parseInt(token))) {
        return parseInt(token)
    }
    
    const right = evalRPN(tokens)
    const left = evalRPN(tokens)
    
    if (token === '+') {
        return left + right
    }
    
    if (token === '-') {
        return left - right
    }
    
    if (token === '*') {
        return left * right
    }
    
    if (token === '/') {
        const res = left / right
        return res < 0 ? Math.ceil(res) : Math.floor(res)
    }
};
