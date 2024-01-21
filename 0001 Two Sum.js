// Title: Two Sum
// Date Submitted:
// Time Taken To Solve: 2hrs
// Time Complexity:
// Space Complexity:
// Notes:
// Solution:

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums.length - i === 2) {
            result.push(i);
            result.push(i + 1);
            return result;
        }
        else {
            let x = target - nums[i];
            let newNums = nums.slice(i + 1);
            if (newNums.indexOf(x) !== -1) {
                result.push(i);
                result.push(nums.indexOf(x, i + 1));
                return result;
            }
        }
    }
};