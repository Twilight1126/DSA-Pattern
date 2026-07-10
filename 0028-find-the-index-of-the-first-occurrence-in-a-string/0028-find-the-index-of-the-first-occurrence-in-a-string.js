/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
     
     // outer loop
     for(let  i = 0 ; i <= haystack.length - needle.length; i++){
        let count = 0;
        // Inner loop
        for(let  j = 0 ; j < needle.length; j++){
            if(haystack[i+j] === needle[j]){
               count++; 
            }
            else {
                break;  // break statement is come out of the inner loop
            }
            if(count === needle.length){   // condtion is to come out of the outer loop and  return i
                return i;
            }
        }
     }
     return -1; // when you don't find the any Index of the First Occurrence in a String return -1
};
