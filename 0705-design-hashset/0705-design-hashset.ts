class Node {
    value
    next
    
    constructor(value, next) {
        this.value = value
        this.next = next
    }    
}

class MyHashSet {
    arr
    size
    
    constructor() {
        this.arr = []
        this.size = 10000
        
        for (let i = 0; i < this.size; i++) {
            this.arr[i] = new Node(-1, null)
        }
    }

    add(key: number): void {
        let currNode = this.arr[key % this.size]
        
        while (currNode.next) {
            if (currNode.next.value === key) {
                return
            }
            
            currNode = currNode.next
        }
        
        currNode.next = new Node(key, null)
    }

    remove(key: number): void {
        let currNode = this.arr[key % this.size]
        
        while (currNode.next) {
            if (currNode.next.value === key) {
                currNode.next = currNode.next.next
                return
            }
            
            currNode = currNode.next
        }
    }

    contains(key: number): boolean {
        let currNode = this.arr[key % this.size]
        
        while (currNode.next) {
            if (currNode.next.value === key) {
                return true
            }
            
            currNode = currNode.next
        }
        
        return false
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */