// Title: Longest Palindrome
// Date Submitted: 2024/02/21
// Time Taken To Solve: 45m
// Time Complexity: O(n)
// Space Complexity: O(n)
// Notes: This solution was fun to work on. Tried sticking to basics, without using any special methods.
// Solution:

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if (s.length === 1) {
        return 1;
    }

    const data = {};
    let result = 0;
    let hasSingles  = 0;

    for (let i of s) {
        if (data[i] !== undefined) {
            data[i]++;
        }
        else {
            data[i] = 1;
        }
    }

    for (let n in data) {
        if (data[n] > 1) {
            if (data[n] % 2 === 0) {
                result += data[n];
            }
            else {
                result += data[n] - 1;
                hasSingles++;
            }
        }
        else {
            hasSingles++;
        }
    }

    if (hasSingles !== 0) {
        result++;
    }

    return result;
};