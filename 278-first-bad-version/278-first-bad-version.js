/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (n === 1) {
            return 1
        }
        
        let left = 1
        let right = n
        
        while (left <= right) {
            let mid = Math.floor((right + left) / 2)
            
            if (isBadVersion(mid) && !isBadVersion(mid - 1)) {
                return mid
            }
            
            if (isBadVersion(mid)) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    };
};