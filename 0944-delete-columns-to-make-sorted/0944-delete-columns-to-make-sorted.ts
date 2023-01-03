function minDeletionSize(strs: string[]): number {
    const wordLength = strs[0].length
    let numOfCol = 0
    
    // loop through col by col
    for (let col = 0; col < wordLength; col++) {
        // loop through the char of that col of each str in strs
        for (let row = 1; row < strs.length; row++) {
            const currentStr = strs[row]
            const prevStr = strs[row - 1]
            
            if (currentStr[col] < prevStr[col]) {
                numOfCol++
                break
            }
        }
    }
    
    return numOfCol
};
