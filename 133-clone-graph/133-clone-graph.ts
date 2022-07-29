/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
	const queue = []
    const hashTable = new Map()
    
    if (!node) {
        return null
    }
    
    queue.push(node)
    
    while (queue.length) {
        const current = queue.shift()
        const currentCopy = hashTable.get(current)
            ? hashTable.get(current)
            : new Node(current.val)
        
        for (const neighbor of current.neighbors) {
            const neighborCopy = hashTable.get(neighbor)
                ? hashTable.get(neighbor)
                : new Node(neighbor.val)

            currentCopy.neighbors.push(neighborCopy)
            
            if (!hashTable.get(neighbor)) {
                queue.push(neighbor)
            }
            
            hashTable.set(neighbor, neighborCopy)
        }
        
        hashTable.set(current, currentCopy)
    }
    
    return hashTable.get(node)
};