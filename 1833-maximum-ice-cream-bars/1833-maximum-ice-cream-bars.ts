function maxIceCream(costs: number[], coins: number): number {
    costs.sort((a, b) => a - b)
    
    let numIceCreamBought = 0
    let remainingCoins = coins
    
    for (const cost of costs) {
        if (cost > remainingCoins) {
            break
        }
        
        numIceCreamBought++
        remainingCoins -= cost
    }
    
    return numIceCreamBought
};