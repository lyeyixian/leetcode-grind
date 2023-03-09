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

function detectCycle(head: ListNode | null): ListNode | null {
    let slow = head
    let fast = head
    
    while (fast?.next?.next && slow?.next) {
        slow = slow.next
        fast = fast.next.next
        
        if (fast === slow) {
            let ptr = head
            
            while (ptr !== slow) {
                ptr = ptr.next
                slow = slow.next
            }
        
            return ptr
        }
    }

    return null
};