// Title: Best Time to Buy and Sell Stock
// Date Submitted: 2024/02/20, 2024/01/19
// Time Taken To Solve: 1hrs
// Time Complexity: O(n)
// Space Complexity: O(1)
// Notes: This is when I "actually" started Grind 75. I have kinda solved this problem,
// but LeetCode won't accept it since the time limit exceeded.
// I'll improve it on a later date.
// Update: Improved the code to take less time. Instead of manipulating the entire array
// multiple times, I used a pointer system that finds the max profit in one run of the array.
// Solution:

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let left = 0;
    let i=1;
    let right = 1;
    while (i<prices.length) {
        if (prices[left] < prices[right]) {
            let diff = prices[right] - prices[left];
            if (diff > profit) {
                profit = diff;
            }
            right++;
            i++;
        }
        else if (prices[left] >= prices[right]) {
            left = right;
            right++;
            i++;
        }
    }
    return profit;

    // prev solution that wasn't fast enough
    //
    // let profit = 0;
    // for (let i = 0; i < prices.length - 1; i++) {
    //     let remPrices = prices.slice(i+1);
    //     let maxNum = Math.max(...remPrices);
    //     let newProfit = maxNum - prices[i];
    //     if (newProfit > profit) {
    //         profit = newProfit;
    //     }
    // }
    // return profit;
};