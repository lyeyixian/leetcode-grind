function validateStackSequences(pushed: number[], popped: number[]): boolean {
    let pushPtr = 0
    let popPtr = 0
    const stack = []
    
    while (pushPtr < pushed.length || popPtr < popped.length) {
        const popNum = popped[popPtr]
        
        while (pushPtr < pushed.length && (stack.length < 1 || stack[stack.length - 1] !== popNum)) {
            const pushNum = pushed[pushPtr]
            stack.push(pushNum)
            pushPtr++
        }
        
        if (stack[stack.length - 1] !== popNum && pushPtr >= pushed.length) {
            break
        }
        
        stack.pop()
        popPtr++
    }
    
    return stack.length > 0 ? false : true
};