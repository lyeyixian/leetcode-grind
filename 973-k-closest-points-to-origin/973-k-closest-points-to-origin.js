/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    points.sort((a, b) => distanceToOrigin(a) - distanceToOrigin(b))
    
    return points.slice(0, k)
};

function distanceToOrigin(point) {
    return Math.sqrt(point[0] * point[0] + point[1] * point[1])
}