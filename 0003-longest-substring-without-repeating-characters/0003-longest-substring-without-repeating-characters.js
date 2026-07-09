/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let seen = new Map();
    let left = 0;
    let Maxlen = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        if(seen.has(char) && seen.get(char) >= left){
            left = seen.get(char) + 1;
        }
        seen.set(char,right);
        Maxlen = Math.max(Maxlen, right - left + 1);
    }
    return Maxlen;
};