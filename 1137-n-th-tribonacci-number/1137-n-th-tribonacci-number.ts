function tribonacci(n: number): number {
    if (n === 0) {
        return 0
    }
    
    if (n === 1 || n === 2) {
        return 1
    }
    
    let a = 0
    let b = 1
    let c = 1
    let sum = 0
    
    for (let i = 3; i <= n; i++) {
        sum = a + b + c
        a = b
        b = c
        c = sum
    }
        
    return c
};