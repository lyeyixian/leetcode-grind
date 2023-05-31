class UndergroundSystem {
    idLocationMap: Map<number, any[]>
    locationTimeMap: Map<string, number[]>
        
    constructor() {
        this.idLocationMap = new Map()
        this.locationTimeMap = new Map()
    }

    checkIn(id: number, stationName: string, t: number): void {
        if (!this.idLocationMap.has(id)) {
            this.idLocationMap.set(id, [stationName, t])
        }
    }

    checkOut(id: number, stationName: string, t: number): void {
        if (this.idLocationMap.has(id)) {
            const [inStationName, inTime] = this.idLocationMap.get(id)
            this.idLocationMap.delete(id)
            const key = [inStationName, stationName].join(',')
            if (!this.locationTimeMap.has(key)) {
                this.locationTimeMap.set(key, [0, 0])
            }
            const [totalTime, frequency] = this.locationTimeMap.get(key)
            this.locationTimeMap.set(key, [totalTime + (t - inTime), frequency + 1])
        }
    }

    getAverageTime(startStation: string, endStation: string): number {
        const key = [startStation, endStation].join(',')
        const [totalTime, frequency] = this.locationTimeMap.get(key)
        
        return totalTime / frequency
    }
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */