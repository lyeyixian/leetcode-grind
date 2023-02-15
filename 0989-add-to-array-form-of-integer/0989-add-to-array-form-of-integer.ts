function addToArrayForm(num: number[], k: number): number[] {
    if (k === 0) {
        return num
    }
    
    const arr = []
    
    while (k !== 0) {
        arr.unshift(k % 10)
        k = Math.floor(k / 10)
    }
    
    const numCopy = [...num]
    let carry = 0
    const res = []
    
    while (arr.length || numCopy.length) {
        const num1 = numCopy.pop() || 0
        const num2 = arr.pop() || 0
        const total = num1 + num2 + carry
        
        res.unshift(total % 10)
        carry = Math.floor(total / 10)
    }
    
    if (carry !== 0) {
        res.unshift(1)
    }
    
    return res
};