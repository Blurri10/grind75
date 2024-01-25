// Title: Majority Element
// Date Submitted: 2024/01/25
// Time Taken To Solve: 45 mins
// Time Complexity: O(n)
// Space Complexity: O(1)
// Notes: I tried solving this by myself, but the solution wasn't accurate
// for test cases that were huge in size. So I looked at the solutions for help
// and came across a cool solution.
// Solution:

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let major = nums[0];
    let count = 1;
    for (let i=1; i<nums.length; i++) {
        if (major === nums[i]) {
            count++;
        }
        else if (count === 0) {
            major = nums[i];
            count++;
        }
        else count--;
    }
    return major;

    // previous solution that didn't work:
    //
    // const counts = {};
    // for (let i of nums) {
    //     if (counts[i] === undefined) {
    //         counts[i] = 1;
    //         console.log('here1');
    //         console.log(counts);
    //     }
    //     else {
    //         counts[i]++;
    //         console.log('here2');
    //         console.log(counts);
    //     }
    // }
    // const sortedCounts = Object.values(counts).sort();
    // const reqValue = sortedCounts[sortedCounts.length-1];
    // for (const [key, value] of Object.entries(counts)) {
    //     if (value === reqValue) {
    //         return parseInt(key);
    //     }
    // }
};