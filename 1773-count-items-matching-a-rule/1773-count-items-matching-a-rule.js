/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let count  = 0;
    let index = {'type': 0, 'color': 1 ,'name': 2};
    for(let  i = 0 ; i  < items.length; i++){
       if(items[i][index[ruleKey]] === ruleValue){
           count++
        }
    }
    return count;
};