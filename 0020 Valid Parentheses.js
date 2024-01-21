// Title: Valid Parentheses
// Date Submitted:
// Time Taken To Solve: 2hrs
// Time Complexity:
// Space Complexity:
// Notes:
// Solution:

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bucket = [];
    for (let i of s) {
        if (i === '(') {
            bucket.push(')');
        }
        else if (i === '[') {
            bucket.push(']');
        }
        else if (i === '{') {
            bucket.push('}');
        }
        else if (bucket.length === 0 || bucket.pop() !== i) {
            return false;
        }
    }
    return bucket.length === 0;
};