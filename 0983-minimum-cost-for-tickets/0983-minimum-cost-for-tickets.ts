function mincostTickets(days: number[], costs: number[]): number {
    const mem = new Array(days.length).fill(Infinity)
    const duration = [1, 7, 30]
    
    function findNextIndex(index, dayTicketExpired) {
        let i = index
        
        while (i < days.length && days[i] < dayTicketExpired) {
            i++
        }
        
        return i
    }
    
    function dp(i) {
        if (i >= days.length) {
            return 0
        }
        
        if (mem[i] !== Infinity) {
            return mem[i]
        }
        
        for (let j = 0; j < 3; j++) {
            const dur = duration[j]
            const cost = costs[j]
            
            
            mem[i] = Math.min(mem[i], dp(findNextIndex(i, days[i] + dur)) + cost)
        }
        
        return mem[i]
    }
    
    return dp(0)
};