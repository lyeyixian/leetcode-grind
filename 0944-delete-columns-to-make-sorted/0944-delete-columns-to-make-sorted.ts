function minDeletionSize(strs: string[]): number {
    const wordLength = strs[0].length
    let numOfCol = 0
    
    // loop through col by col
    for (let i = 0; i < wordLength; i++) {
        // loop through the char of that col of each str in strs
        for (let j = 1; j < strs.length; j++) {
            const currentStr = strs[j]
            const prevStr = strs[j - 1]
            
            if (currentStr[i] < prevStr[i]) {
                numOfCol++
                break
            }
        }
    }
    
    return numOfCol
};
