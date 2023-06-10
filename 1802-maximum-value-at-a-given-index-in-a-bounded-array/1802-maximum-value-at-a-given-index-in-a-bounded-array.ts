function maxValue(n: number, index: number, maxSum: number): number {
    function getSum(target) {
        let sum = 0
        
        // lhs
        if (target > index) {
            sum += apSum(target - index, target, index + 1)
        } else {
            sum += apSum(1, target, target) + index - target + 1
        }
        
        // rhs
        if (target >= n - index) {
            sum += apSum(target - (n - index) + 1, target, n - index)
        } else {
            sum += apSum(1, target, target) + n - index - target
        }
        
        // remove double count
        return sum - target
    }
    
    let left = 1
    let right = maxSum
    
    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2)
        
        if (getSum(mid) <= maxSum) {
            left = mid
        } else {
            right = mid - 1
        }
    }
    
    return left
};

function apSum(a1, an, n) {
    return Math.floor((a1 + an) * n / 2)
}