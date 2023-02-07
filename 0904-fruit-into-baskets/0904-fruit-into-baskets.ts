function totalFruit(fruits: number[]): number {
    let globalMax = -Infinity
    let left = 0
    const map = new Map()
    
    for (let right = 0; right < fruits.length; right++) {
        const fruit = fruits[right]
        
        if (map.has(fruit)) {
            map.set(fruit, map.get(fruit) + 1)
            globalMax = Math.max(globalMax, right - left + 1)
        } else if (map.size < 2) {
            map.set(fruit, 1)
            globalMax = Math.max(globalMax, right - left + 1)
        } else {
            map.set(fruit, 1)
            
            while (map.size > 2) {
                const fruitToEvict = fruits[left]
            
                map.set(fruitToEvict, map.get(fruitToEvict) - 1)
                left++

                if (map.get(fruitToEvict) === 0) {
                    map.delete(fruitToEvict)        
                }    
            }
        }
    }
    
    return globalMax
};

// 3 1 3 1 1 3 2