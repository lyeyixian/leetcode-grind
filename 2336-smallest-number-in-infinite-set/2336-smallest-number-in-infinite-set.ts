class SmallestInfiniteSet {
    currSmallest: number
    set: Set<number>
    
    constructor() {
        this.currSmallest = 1
        this.set = new Set()
    }

    popSmallest(): number {
        const num = this.currSmallest
        
        this.set.add(this.currSmallest)
        
        while (this.set.has(this.currSmallest)) {
            this.currSmallest++
        }
        
        return num
    }

    addBack(num: number): void {
        this.set.delete(num)
        
        if (num < this.currSmallest) {
            this.currSmallest = num
        }
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */