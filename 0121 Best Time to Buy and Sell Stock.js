// Title: Best Time to Buy and Sell Stock
// Date Submitted:
// Time Taken To Solve: 2hrs
// Time Complexity:
// Space Complexity:
// Notes:
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