/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let seen = new Set();
    let left = 0;
    let maxlen = 0;

    for(let right = 0; right < s.length; right++){
        const char = s[right];
        while(seen.has(char)){
            seen.delete(s[left]);
            left++;
        }
        seen.add(char,right);
        maxlen = Math.max(maxlen,right - left + 1 );
    }
    return maxlen;

};