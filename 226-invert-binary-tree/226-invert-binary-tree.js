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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
        return null
    }
    
    const queue = []
    
    queue.push(root)
    
    while (queue.length) {
        const current = queue.shift()
        const temp = current.left
        
        current.left = current.right
        current.right = temp
        
        if (current.left) {
            queue.push(current.left)
        }
        
        if (current.right) {
            queue.push(current.right)
        }
    }
    
    return root
};

// var invertTree = function(root) {
//     if (!root) {
//         return null
//     }
    
//     const leftTree = invertTree(root.left)
//     root.left = invertTree(root.right)
//     root.right = leftTree
    
//     return root
// };