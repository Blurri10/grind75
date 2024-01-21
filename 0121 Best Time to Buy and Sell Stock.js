// Title: Best Time to Buy and Sell Stock
// Date Submitted: 2024/01/19
// Time Taken To Solve: 1hrs
// Time Complexity: O(n^2)
// Space Complexity: O(n)
// Notes: This is when I "actually" started Grind 75. I have kinda solved this problem,
// but LeetCode won't accept it since the time limit exceeded.
// I'll improve it on a later date.
// Solution:

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        let remPrices = prices.slice(i+1);
        let maxNum = Math.max(...remPrices);
        let newProfit = maxNum - prices[i];
        if (newProfit > profit) {
            profit = newProfit;
        }
    }
    return profit;
};