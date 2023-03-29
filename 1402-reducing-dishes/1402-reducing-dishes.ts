function maxSatisfaction(satisfaction: number[]): number {
    satisfaction.sort((a, b) => a - b)
    
    let suffixSum = 0
    let currSum = 0
    let res = 0
    
    for (let i = satisfaction.length - 1; i >= 0; i--) {
        const currSatisfaction = satisfaction[i]
        
        currSum += suffixSum + currSatisfaction
        suffixSum += currSatisfaction
        res = Math.max(res, currSum)
    }
    
    return res
};