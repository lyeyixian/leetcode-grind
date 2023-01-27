function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    let priceToReach = new Array(n).fill(Infinity)
    
    priceToReach[src] = 0
    
    for (let i = 0; i < k + 1; i++) {
        const temp = [...priceToReach]
        
        for (const [from, to, price] of flights) {
            const srcPrice = priceToReach[from]
            
            if (srcPrice === Infinity) {
                continue
            }
            
            const newDstPrice = srcPrice + price
            
            if (newDstPrice < temp[to]) {
                temp[to] = newDstPrice
            }
        }
        
        priceToReach = [...temp]
    }
    
    return priceToReach[dst] === Infinity ? -1 : priceToReach[dst]
};