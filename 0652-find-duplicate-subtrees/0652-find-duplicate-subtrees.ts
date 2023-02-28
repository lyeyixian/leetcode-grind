/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
    const map = new Map()
    
    // do preorder traversal
    // serialize every node and put them into hash table with the node as value
    function dfs(node) {
        if (!node) {
            return
        }
        
        const key = serialize(node)
        
        if (!map.has(key)) {
            map.set(key, [])
        }
        
        map.get(key).push(node)
        dfs(node.left)
        dfs(node.right)
    }

    dfs(root)

    const res = []
    
    // if the value has length larger than 1, means have duplicate
    for (const [key, value] of map.entries()) {
        if (value.length > 1) {
            res.push(value[0])
        }
    }

    return res
};

// serialize the node in preorder
function serialize(node) {
    const arr = []
    
    function dfs(node) {
        if (!node) {
            arr.push('N')
            return
        }
        
        arr.push(`${node.val}`)
        dfs(node.left)
        dfs(node.right)
    }
    
    dfs(node)
    
    return arr.join(',')
}