function minDeletionSize(strs: string[]): number {
    const wordLength = strs[0].length
    let numOfCol = 0
    
    for (let i = 0; i < wordLength; i++) {
        let prevChar = ''
        
        for (let j = 0; j < strs.length; j++) {
            const currentChar = strs[j][i]
            
            if (j === 0) {    
                prevChar = currentChar
                continue
            }
            
            if (currentChar < prevChar) {
                numOfCol++
                break
            }
            
            prevChar = currentChar
        }
    }
    
    return numOfCol
};
