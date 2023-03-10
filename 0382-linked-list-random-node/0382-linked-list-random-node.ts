/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class Solution {
    head: ListNode
    
    constructor(head: ListNode | null) {
        this.head = head
    }

    // reservoir sampling
    getRandom(): number {
        let count = 1
        let current = this.head
        let res = 0
        
        while (current) {
            if (Math.random() < (1 / count)) {
                res = current.val    
            }
            
            current = current.next
            count++
        }
        
        return res
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */