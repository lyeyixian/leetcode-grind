function minDeletionSize(strs: string[]): number {
    const wordLength = strs[0].length
    let numOfCol = 0
    
    // loop through col
    for (let col = 0; col < wordLength; col++) {
        // loop through row and compare with previous row
        for (let row = 1; row < strs.length; row++) {
            const currentChar = strs[row][col]
            const prevChar = strs[row - 1][col]
            
            if (currentChar < prevChar) {
                numOfCol++
                break
            }
        }
    }
    
    return numOfCol
};
