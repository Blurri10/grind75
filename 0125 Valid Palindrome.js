// Title: Valid Palindrome
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
var isPalindrome = function(s) {
    let newS = s.replaceAll(' ', '').toLowerCase().replace(/[^a-z0-9]/g, '');

    for (let i = 0; i < Math.ceil(newS.length/2); i++) {
        if (newS[i] !== newS[newS.length - 1 - i]) {
            return false;
        }
    }

    return true;
};