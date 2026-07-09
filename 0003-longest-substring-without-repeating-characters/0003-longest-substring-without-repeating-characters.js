/**
 * @param {string} s
 * @return {number}
 */
// sloving this solution using set and map

var lengthOfLongestSubstring = function (s) {
    let seen = new Set();
    let left = 0;
    let Maxlen = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        while (seen.has(char)) {
            seen.delete(s[left]);
            left++;
        }
        seen.add(char, right);
        Maxlen = Math.max(Maxlen, right - left + 1)
    }
    
    return Maxlen;
};

