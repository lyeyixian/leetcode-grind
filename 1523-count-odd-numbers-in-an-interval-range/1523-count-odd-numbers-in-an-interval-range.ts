function countOdds(low: number, high: number): number {
    const length = high - low + 1
    let res = Math.floor(length / 2)
    
    if (length % 2 && low % 2) {
        res++
    }
    
    return res
};