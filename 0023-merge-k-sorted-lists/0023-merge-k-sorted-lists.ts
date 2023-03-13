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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let sortedRuns = lists.filter(list => list !== null)
    
    if (!sortedRuns.length) {
        return null
    }
    
    while (sortedRuns.length > 1) {
        const newSortedRuns = []
        
        for (let i = 0; i < sortedRuns.length; i += 2) {
            const firstList = sortedRuns[i]
            const secondList = sortedRuns[i + 1] || null
            
            newSortedRuns.push(merge(firstList, secondList))
        }
        
        sortedRuns = newSortedRuns
    }
    
    return sortedRuns[0]
};

function merge(list1, list2) {
    if (!list1) {
        return list2
    }
    
    if (!list2) {
        return list1
    }
    
    let temp = null
    
    if (list1.val < list2.val) {
        temp = list1.next
        list1.next = merge(temp, list2)
        
        return list1
    } else {
        temp = list2.next
        list2.next = merge(list1, temp)

        return list2
    }
}