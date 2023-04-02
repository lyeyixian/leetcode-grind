function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    potions.sort((a, b) => a - b)

    function binarySearch(spell) {
        const maxPotion = potions[potions.length - 1]
        const minPotionToSuccess = Math.ceil(success / spell)
        
        if (maxPotion < minPotionToSuccess) {
            return -1
        }
        
        let left = 0
        let right = potions.length - 1
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            
            if (potions[mid] < minPotionToSuccess) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        
        return left
    }
    
    const res = []
    
    for (const spell of spells) {
        const index = binarySearch(spell)

        res.push(index === -1 ? 0 : potions.length - index)
    }
    
    return res
};