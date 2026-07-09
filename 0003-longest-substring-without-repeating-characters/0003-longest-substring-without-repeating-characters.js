/**
 * @param {string} s
 * @return {number}
 */
// sloving this solution using set and map

var lengthOfLongestSubstring = function (s) {
    let store = new Set();
    let left = 0;
    let maxlen = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        while (store.has(char)) {
            store.delete(s[left])
            left++;
        }
        store.add(char);
        maxlen = Math.max(maxlen, right - left + 1);

    }
    return maxlen;

};


// var lengthOfLongestSubstring = function (s) {
//     let seen = new Map();
//     let left = 0;
//     let maxlen = 0;

//     for (let right = 0; right < s.length; right++) {
//         const char = s[right];
//         if (seen.has(char) && seen.get(char) >= left) {
//             left = seen.get(char) + 1;
//         }
//         seen.set(char, right);
//         maxlen = Math.max(maxlen, right - left + 1);

//     }
//     return maxlen;
// };


