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
    const set = new Set(nums);
    return set.size !== nums.length;

    // previous solution that worked:
    //
    // const counts = {};
    // for (let i of nums) {
    //     if (counts[i] === undefined) {
    //         counts[i] = 1;
    //     }
    //     else {
    //         counts[i]++;
    //     }
    // }
    //
    // const testArray = Object.values(counts).sort();
    // if (testArray[testArray.length-1] >= 2) {
    //     return true;
    // }
    // else return false;

    // previous solution that worked but wasn't accepted
    //
    // for (let i=0; i<nums.length; i++) {
    //     if (nums.indexOf(nums[i], i+1) !== -1) {
    //         return true;
    //     }
    // }
    // return false;
};