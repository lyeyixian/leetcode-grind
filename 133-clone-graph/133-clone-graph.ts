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
    const hashTable = {}
    
    if (!node) {
        return null
    }
    
    const nodePtr = node.val
    
    queue.push(node)
    
    while (queue.length) {
        const current = queue.shift()
        const currentCopy = hashTable[current.val.toString()]
            ? hashTable[current.val.toString()]
            : new Node(current.val)
        
        for (const neighbor of current.neighbors) {
            const neighborCopy = hashTable[neighbor.val.toString()]
                ? hashTable[neighbor.val.toString()]
                : new Node(neighbor.val)

            currentCopy.neighbors.push(neighborCopy)
            
            if (!hashTable[neighbor.val.toString()]) {
                queue.push(neighbor)
            }
            
            hashTable[neighbor.val.toString()] = neighborCopy
        }
        
        hashTable[current.val.toString()] = currentCopy
    }
    
    return hashTable[nodePtr.toString()]
};