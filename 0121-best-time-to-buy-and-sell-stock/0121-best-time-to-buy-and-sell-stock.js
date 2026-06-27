/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minprice = prices[0];
    let maxprofit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minprice) {
            minprice = prices[i];
        }
        else if ((prices[i] - minprice) > maxprofit) {
            maxprofit = prices[i] - minprice;
        }
    }
    return maxprofit;
}; 