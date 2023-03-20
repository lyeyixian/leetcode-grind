function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) {
            if (i - 1 >= 0) {
                flowerbed[i - 1] = -1    
            }
            
            if (i + 1 < flowerbed.length) {
                flowerbed[i + 1] = -1    
            }
        }
    }
    
    let count = 0
    
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            flowerbed[i] = 1
            
            if (i + 1 < flowerbed.length) {
                flowerbed[i + 1] = -1
            }
            
            count++
        }
    }
    
    return  count >= n
};