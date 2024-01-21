// Title: Valid Palindrome
// Date Submitted: 2024/01/20
// Time Taken To Solve: 1hrs
// Time Complexity: O(n)
// Space Complexity: O(n)
// Notes: I saw many solutions using a two pointer approach, and while those
// solutions are more efficient, I wanted to tinker and find a solution
// myself. So, I took the string, removed all whitespaces, reduced it to lowercase,
// then used a regex expression (I had to learn regex and how it works, looked it up)
// to remove all the non-alphanumeric characters. Then I ran it through a for loop
// and checked if the first and last elements were same or not, and moved inside
// one element from both sides and kept checking if both characters were the same.
// If they were different, it'd throw a false or else at the end of the loop a true.
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