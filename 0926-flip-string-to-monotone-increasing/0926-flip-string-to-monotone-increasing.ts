// dp[i] = dp[i - 1] if last char is 1
// dp[i] = min(num, dp[i - 1] + 1) other wise, where num is number of 1s in current prefix of s
function minFlipsMonoIncr(s: string): number {
    let res = 0
    let numOfOne = 0
    
    for (const char of s) {
        if (char === '1') {
            numOfOne++
        } else {
            // numOfOne -> don't flip current 0, flip all the 1s before this
            // res + 1 -> flip the current 0
            res = Math.min(numOfOne, res + 1)
        }
    }
    
    return res
};