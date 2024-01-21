// Title: Two Sum
// Date Submitted: 2024/01/13
// Time Taken To Solve: 2hrs
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// Notes: This was my first time trying two sum, and I have no idea why it was so difficult
// for me to solve it. Probably because I hadn't tried any LeetCode question since a long time.
// Whatever the case, it took me over 2 hours, but I finally managed to solve it.
// My initial plan was to have two for loops, one for selecting a number, and the other for
// removing numbers that were before the current number's index. But that wasn't working so
// I changed the approach and kept one for loop to select a number, then subtract it from the
// target and then located the difference in the array. This worked like a charm, although required
// the use of some JS methods which increased the time complexity.
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