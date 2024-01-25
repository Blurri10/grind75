// Title: Valid Palindrome
// Date Submitted: 2024/01/21
// Time Taken To Solve: null
// Time Complexity: O(nlogn)
// Space Complexity: O(n)
// Notes: I've solved this long back, before I started Grind 75. So I just resubmitted here
// Solution:

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
};