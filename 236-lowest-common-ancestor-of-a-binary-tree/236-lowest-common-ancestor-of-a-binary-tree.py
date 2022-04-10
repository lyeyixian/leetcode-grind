# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        pList = []
        qList = []
        foundP = False
        foundQ = False
        
        def dfs(node):
            nonlocal foundP
            nonlocal foundQ
            
            if not node:
                return
            if foundP and foundQ:
                return

            if not foundP:
                pList.append(node)
            
            if not foundQ:
                qList.append(node)            
            
            if node.val == p.val:
                foundP = True
            elif node.val == q.val:
                foundQ = True
                
            dfs(node.left)
            dfs(node.right)
            
            if not foundP:
                pList.pop()
                
            if not foundQ:
                qList.pop()
                
        dfs(root)
        
        index = 0
        currentCommonAncestor = root
        
        while index < len(pList) and index < len(qList):
            pNode = pList[index]
            qNode = qList[index]
            
            if (pNode.val == qNode.val):
                currentCommonAncestor = pNode
            else:
                break
            
            index += 1
                
        return currentCommonAncestor