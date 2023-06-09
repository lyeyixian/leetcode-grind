function nextGreatestLetter(letters: string[], target: string): string {
    let left = 0
    let right = letters.length - 1
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        
        if (letters[mid] <= target) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    const res = letters[right]
    return res > target ? res : letters[0]
};