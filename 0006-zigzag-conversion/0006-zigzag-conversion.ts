function convert(s: string, numRows: number): string {
    const resArr = []
    
    for (let i = 0; i < numRows; i++) {
        resArr.push([])
    }
    
    let row = 0
    let toIncrement = true
    
    for (const char of s) {
        resArr[row].push(char)
        
        if (numRows === 1) {
            continue
        }
        
        if (row === numRows - 1) {
            toIncrement = false
        } else if (row === 0) {
            toIncrement = true
        }
        
        row += toIncrement ? 1 : -1
    }
    
    return resArr.map(arr => arr.join('')).reduce((a, b) => a + b)
};

// row: 3
// 0   4   8
// 1 3 5 7 9
// 2   6

// 0123456789

// row: 4
// 0    6       12
// 1  5 7    11 13
// 2 4  8 10    14
// 3    9