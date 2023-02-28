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
    
    function dfs(node, map) {
        if (!node) {
            return
        }
        
        const key = serialize(node)
        
        if (!map.has(key)) {
            map.set(key, [])
        }
        
        map.get(key).push(node)
        dfs(node.left, map)
        dfs(node.right, map)
    }

    dfs(root, map)

    const res = []
    
    for (const [key, value] of map.entries()) {
        if (value.length > 1) {
            res.push(value[0])
        }
    }

    return res
};

function serialize(node) {
    const arr = []
    
    function dfs(node, arr) {
        if (!node) {
            arr.push('N')
            return
        }
        
        arr.push(`${node.val}`)
        dfs(node.left, arr)
        dfs(node.right, arr)
    }
    
    dfs(node, arr)
    
    return arr.join(',')
}