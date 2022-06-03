/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
// Sorting
// var kClosest = function(points, k) {
//     points.sort((a, b) => distanceToOrigin(a) - distanceToOrigin(b))
    
//     return points.slice(0, k)
// };
//
// Max Heap/PQ
// var kClosest = function(points, k) {
//     const pq = new MaxPriorityQueue(point => distanceToOrigin(point))
    
//     points.forEach(point => {
//         if (pq.size() === k) {
//             if (distanceToOrigin(point) < distanceToOrigin(pq.front())) {
//                 pq.dequeue()
//                 pq.enqueue(point)
//             }
//         } else {
//             pq.enqueue(point)
//         }
//     })
    
//     return pq.toArray()
// };

var kClosest = function(points, k) {
    let left = 0
    let right = points.length - 1
    let partitionIndex = points.length
    
    while (partitionIndex !== k) {
        partitionIndex = partition(points, left, right)
        
        if (partitionIndex < k) {
            left = partitionIndex + 1
        } else {
            right = partitionIndex - 1
        }
    }
    
    return points.slice(0, k)
};

function partition(points, left, right) {
    const pivot = points[right]
    let pivotIndex = left
    
    for (let i = left; i <= right; i++) {
        if (distanceToOrigin(points[i]) < distanceToOrigin(pivot)) {
            const temp = points[i]
            points[i] = points[pivotIndex]
            points[pivotIndex] = temp
            pivotIndex++
        }
    }

    points[right] = points[pivotIndex]
    points[pivotIndex] = pivot
    
    return pivotIndex
}

function distanceToOrigin(point) {
    return Math.sqrt(point[0] * point[0] + point[1] * point[1])
}