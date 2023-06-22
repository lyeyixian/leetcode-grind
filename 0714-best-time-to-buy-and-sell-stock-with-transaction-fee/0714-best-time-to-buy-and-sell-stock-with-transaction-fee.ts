function maxProfit(prices: number[], fee: number): number {
    const n = prices.length
    const free = new Array(n).fill(0)
    const hold = new Array(n).fill(0)
    
    hold[0] = -prices[0]
    
    for (let i = 1; i < n; i++) {
        const buy = free[i - 1] - prices[i]
        const sell = hold[i - 1] + prices[i] - fee
        
        hold[i] = Math.max(hold[i - 1], buy) // keep holding or you buy from the case of not holding
        free[i] = Math.max(free[i - 1], sell) // keep not holding or you sell from the case of holding
    }
    
    return free[n - 1]
};