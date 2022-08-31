class LRUCache {
    capacity: number
    map: any
    
    constructor(capacity: number) {
        this.capacity = capacity
        this.map = new Map()
    }

    get(key: number): number {
        if (!this.map.has(key)) {
            return -1
        }
        
        const value = this.map.get(key)
        this.map.delete(key)
        this.map.set(key, value)
        
        return value
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            this.map.delete(key)     
        }
        
        this.map.set(key, value)

        if (this.map.size > this.capacity) {
            const [leastRecentKey] = this.map.keys()
            this.map.delete(leastRecentKey)
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */