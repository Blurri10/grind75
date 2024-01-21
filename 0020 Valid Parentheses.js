// Title: Valid Parentheses
// Date Submitted: 2024/01/13
// Time Taken To Solve: 1hrs
// Time Complexity: O(n)
// Space Complexity: O(n)
// Notes: I couldn't solve it so I had to refer to a YT video that I found in the solutions
// section. That push/pop method is genius.
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