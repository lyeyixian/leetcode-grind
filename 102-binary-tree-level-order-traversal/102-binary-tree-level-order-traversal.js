/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let currentLevelQueue = []
    let nextLevelQueue = []
    const res = []
    
    if (!root) {
        return []
    }
    
    currentLevelQueue.push(root)
    
    while (currentLevelQueue.length) {
        for (const node of currentLevelQueue) {
            const left = node.left
            const right = node.right
            
            if (left) {
                nextLevelQueue.push(left)
            }
            
            if (right) {
                nextLevelQueue.push(right)
            }
        }
        
        res.push([...currentLevelQueue.map(node => node.val)])
        currentLevelQueue = [...nextLevelQueue]
        nextLevelQueue = []
    }
    
    return res
};