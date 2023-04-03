function numRescueBoats(people: number[], limit: number): number {
    people.sort((a, b) => a - b)
    
    let left = 0
    let right = people.length - 1
    let numBoat = 0
    
    while (left <= right) {
        const heaviest = people[right]
        const lightest = people[left]
        
        if (heaviest + lightest <= limit) {
            left++
        }
        
        right--
        numBoat++
    }
    
    return numBoat
};