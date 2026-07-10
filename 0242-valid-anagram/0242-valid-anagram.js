/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let store = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        let index = s[i].charCodeAt(0) - 97;
        store[index]++;
    }
    for (let i = 0; i < t.length; i++) {
        let index = t[i].charCodeAt(0) - 97;
        store[index]--;
    }
    for (let i = 0; i < 26; i++) {
        if (store[i] !== 0) {
            return false;
        }
    }
    return true;
};
