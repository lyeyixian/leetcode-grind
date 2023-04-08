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
    
    function getOrCreateCopy(node: Node): Node {
        return hashTable.has(node)
            ? hashTable.get(node)
            : new Node(node.val)
    }

    queue.push(node)

    while (queue.length) {
        const current = queue.shift()
        const currentCopy = getOrCreateCopy(current)

        for (const neighbor of current.neighbors) {
            const neighborCopy = getOrCreateCopy(neighbor)

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