// Title: Contains Duplicate
// Date Submitted: 2024/01/25
// Time Taken To Solve: 15 mins
// Time Complexity:
// Space Complexity:
// Notes: Took me 15m, but the solution wasn't accepted because
// time limit exceeded
// Solution:

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for (let i=0; i<nums.length; i++) {
        if (nums.indexOf(nums[i], i+1) !== -1) {
            return true;
        }
    }
    return false;
};