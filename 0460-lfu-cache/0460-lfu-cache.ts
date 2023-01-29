class LFUCache {
    keyMap: Map<number, Set<number>>
    valueFrequencyMap: Map<number, number[]>
    capacity: number
    minFreq: number
        
    constructor(capacity: number) {
        this.keyMap = new Map()
        this.valueFrequencyMap = new Map()
        this.capacity = capacity
        this.minFreq = 0
    }

    private updateKeyMap(key, value, frequency) {
        this.valueFrequencyMap.set(key, [value, frequency + 1])
        
        if (this.keyMap.has(frequency)) {
            this.keyMap.get(frequency).delete(key)    
        }
        
        const newFrequency = frequency + 1
        
        if (!this.keyMap.has(newFrequency)) {
            this.keyMap.set(newFrequency, new Set())
        }
        
        this.keyMap.get(newFrequency).add(key)
        
        if (this.minFreq === 0 || (frequency === this.minFreq && this.keyMap.get(frequency).size === 0)) {
            this.minFreq++
        }
    }

    get(key: number): number {
        if (!this.valueFrequencyMap.has(key)) {
            return -1
        }
        
        const [value, frequency] = this.valueFrequencyMap.get(key)
        this.updateKeyMap(key, value, frequency)
        
        return value
    }

    put(key: number, value: number): void {
        if (this.capacity === 0) {
            return
        }
        
        if (!this.valueFrequencyMap.has(key) && this.valueFrequencyMap.size === this.capacity) {
            const keySet = this.keyMap.get(this.minFreq)
            const [leastFrequent] = keySet.keys()
            keySet.delete(leastFrequent)
            this.valueFrequencyMap.delete(leastFrequent)
        }
            
        let frequency = this.valueFrequencyMap.has(key) 
            ? this.valueFrequencyMap.get(key)[1] 
            : 0
        
        this.updateKeyMap(key, value, frequency)
        this.minFreq = Math.min(this.minFreq, this.valueFrequencyMap.get(key)[1])
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */