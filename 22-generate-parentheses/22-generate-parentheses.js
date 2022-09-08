/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    
    helper(n, 0, 0, '', res)
    
    return res
};

function helper(n, open, close, str, res) {
    if (str.length === 2 * n) {
        res.push(str)
        return
    }
    
    if (open < n) {
        helper(n, open + 1, close, str + '(', res)
    }
    
    if (close < open) {
        helper(n, open, close + 1, str + ')', res)
    }
}