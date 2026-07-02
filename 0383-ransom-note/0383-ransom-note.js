/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let store = new Array(26).fill(0);
    // first for loop to  iterate over magazine.length and update that place by index++
    for (let i = 0; i < magazine.length; i++) {
        let index = magazine[i].charCodeAt(0) - 97;
        store[index]++;
    }
    // second loop to  iterate over magazine.length and update that place by index--
    for (let i = 0; i < ransomNote.length; i++) {
        let index = ransomNote[i].charCodeAt(0) - 97;
        store[index]--;
        
        if (store[index] < 0) {
            return false;
        }

    }
    return true;

};