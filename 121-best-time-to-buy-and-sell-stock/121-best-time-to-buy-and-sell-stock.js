/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowestPrice = Infinity
    let maxProfit = 0
    
    for (const price of prices) {
        if (price < lowestPrice) {
            lowestPrice = price
        } else {
            const profit = price - lowestPrice
            
            if (profit > maxProfit) {
                maxProfit = profit
            }
        }
    }
    
    return maxProfit
};