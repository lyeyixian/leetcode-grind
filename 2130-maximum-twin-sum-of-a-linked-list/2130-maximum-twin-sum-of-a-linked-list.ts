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

function pairSum(head: ListNode | null): number {
    let curr = head
    let n = 1
    
    while (curr.next) {
        curr = curr.next
        n++
    }
    
    let right = head
    
    for (let i = 0; i < Math.floor(n / 2); i++) {
        right = right.next
    }
    
    right = reverse(right)
    
    let left = head
    let max = 0
    
    for (let i = 0; i < Math.floor(n / 2); i++) {
        max = Math.max(max, left.val + right.val)
        left = left.next
        right = right.next
    }
    
    return max
};

function reverse(head) {
    let prev = null
    let curr = head
    
    while (curr) {
        const temp = curr.next
        
        curr.next = prev
        prev = curr
        curr = temp
    }
    
    return prev
}