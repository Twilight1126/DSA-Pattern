/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minprice = prices[0];
    let maxValue = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minprice) {
            minprice = prices[i];
        }
       else {
            let profit = prices[i] - minprice;
            if(profit > maxValue)
            maxValue = profit;  
        }
    }
    return maxValue;
}; 