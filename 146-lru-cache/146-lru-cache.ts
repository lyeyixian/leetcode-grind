class LRUCache {
    capacity: number
    map: any
    leftDummy: Node
    rightDummy: Node
    
    constructor(capacity: number) {
        this.capacity = capacity
        this.map = new Map()
        this.leftDummy = new Node(-1, -1)
        this.rightDummy = new Node(-1, -1)
        
        this.leftDummy.next = this.rightDummy
        this.rightDummy.prev = this.leftDummy
    }

    private remove(node: Node) {
        const prevNode = node.prev
        const nextNode = node.next
        prevNode.next = nextNode
        nextNode.prev = prevNode
    }

    private insert(node: Node){
        const prevNode = this.rightDummy.prev
        const nextNode = this.rightDummy
        prevNode.next = node
        node.prev = prevNode
        node.next = nextNode
        nextNode.prev = node
    }

    get(key: number): number {
        if (this.map.has(key)) {
            const node = this.map.get(key)
            this.remove(node)
            this.insert(node)
            
            return node.value
        }
        
        return -1
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            this.remove(this.map.get(key))
        }
        const node = new Node(key, value)
        this.map.set(key, node)
        this.insert(node)
        
        if (this.map.size > this.capacity) {
            const nodeToRemove = this.leftDummy.next
            this.remove(nodeToRemove)
            this.map.delete(nodeToRemove.key)
        }

        
    }
}

class Node {
    key: number
    value: number
    prev: Node
    next: Node
    
    constructor(key: number, value: number) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */