/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let total = 0;
    let charactervalues = {'I': 1, 'V':5, 'X': 10, 'L': 50,'C': 100, 'D': 500, 'M': 1000};
    for(let i = 0; i < s.length; i++){
        if(charactervalues[s[i]] < charactervalues[s[i+1]])
          total = total - charactervalues[s[i]]; 
          else
          total = total + charactervalues[s[i]]; 
    }
    return total;

};