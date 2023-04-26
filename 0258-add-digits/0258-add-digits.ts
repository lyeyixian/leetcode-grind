function addDigits(num: number): number {
    let digits = num.toString().split('')
    
    while (digits.length > 1) {
        digits = digits.map(digit => parseInt(digit)).reduce((a, b) => a + b).toString().split('')
    }
    
    return parseInt(digits[0])
};