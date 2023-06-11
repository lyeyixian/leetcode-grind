class SnapshotArray {
    snapId: number
    snapshots: Map<number, number>[]
    
    constructor(length: number) {
        this.snapId = 0
        this.snapshots = new Array(length)
        
        for (let i = 0; i < length; i++) {
            this.snapshots[i] = new Map()
        }
    }

    set(index: number, val: number): void {
        this.snapshots[index].set(this.snapId, val)
    }

    snap(): number {
        return this.snapId++
    }

    get(index: number, snap_id: number): number {
        return this.snapshots[index].get(this.findSnapId(index, snap_id)) || 0
    }

    private findSnapId(index, snapId) {
        const map = this.snapshots[index]
        
        while (snapId > 0 && !map.has(snapId)) {
            snapId--
        }
        
        return snapId
    }
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
[
    { 0: 15, 1: 15 }
]