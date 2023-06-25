function countRoutes(locations: number[], start: number, finish: number, fuel: number): number {
    const n = locations.length
    const mem = []
    
    for (let i = 0; i < n; i++) {
        mem[i] = new Array(fuel + 1).fill(-1)
    }
    
    function dp(i, currFuel) {
        if (currFuel < 0) {
            return 0
        }
        
        if (mem[i][currFuel] !== -1) {
            return mem[i][currFuel]
        }
        
        let res = i === finish? 1 : 0
        
        for (let j = 0; j < n; j++) {
            if (j !== i) {
                const fuelUsed = Math.abs(locations[i] - locations[j])
                
                res = modulo(res + dp(j, currFuel - fuelUsed))
            }
        }
        
        mem[i][currFuel] = res
        
        return res
    }
    
    return dp(start, fuel)
};

function modulo(num) {
    return num % 1000000007
}