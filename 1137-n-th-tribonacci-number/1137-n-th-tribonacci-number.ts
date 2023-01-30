function tribonacci(n: number): number {
    const mem = new Array(n + 1).fill(-1)
    mem[0] = 0
    mem[1] = 1
    mem[2] = 1
    
    for (let i = 3; i <= n; i++) {
        mem[i] = mem[i - 3] + mem[i - 2] + mem[i - 1]
    }
        
    return mem[n]
};