function tribonacci(n: number): number {
    const mem = new Array(n + 1).fill(-1)
    mem[0] = 0
    mem[1] = 1
    mem[2] = 1
    
    return helper(n, mem)
};

function helper(n, mem) {
    if (mem[n] !== -1) {
        return mem[n]
    }
    
//     if (n === 0) {
//         return 0
//     }
    
//     if (n === 1 || n === 2) {
//         return 1
//     }
    mem[n] = helper(n - 3, mem) + helper(n - 2, mem) + helper(n - 1, mem)
    
    return mem[n]
}