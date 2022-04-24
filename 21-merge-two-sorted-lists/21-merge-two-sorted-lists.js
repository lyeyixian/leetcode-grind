/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// Iterative Solution
var mergeTwoLists = function(list1, list2) {
    if (!list1 && !list2) {
        return null
    }
    
    const dummy = {
        val: 0,
        next: null
    }
    let ptr = dummy
    let ptr1 = list1
    let ptr2 = list2
    
    while (ptr1 && ptr2) {
        if (ptr1.val <= ptr2.val) {
            ptr.next = ptr1
            ptr1 = ptr1.next
        } else {
            ptr.next = ptr2
            ptr2 = ptr2.next
        }
        
        ptr = ptr.next
    }
    
    if (ptr1) {
        ptr.next = ptr1
    }
    
    if (ptr2) {
        ptr.next = ptr2
    }
    
    return dummy.next
};

// Recursive Solution
// var mergeTwoLists = function(list1, list2) {
//     if (!list1 && !list2) {
//         return null
//     }
    
//     if (!list1) {
//         return list2
//     }
    
//     if (!list2) {
//         return list1
//     }
    
//     if (list1.val <= list2.val) {
//         list1.next = mergeTwoLists(list1.next, list2)
        
//         return list1
//     } else {
//         list2.next = mergeTwoLists(list1, list2.next)
        
//         return list2
//     }
// };