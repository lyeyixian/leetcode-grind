function maxProfit(prices: number[]): number {
    let res = 0
    let min = Infinity
    
    for (const price of prices) {
        min = Math.min(min, price)
        res = Math.max(res, price - min)
    }
    
    return res
};