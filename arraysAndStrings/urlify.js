
/*

Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters and that you are given the "true" length of the string. 

EXAMPLE:

Input: "Mr John Smith      ", 13 <= this is the true length
Output: "Mr%20John%20Smith"
*/

function urlify(str, int) {
    if(str.length > int) {
        str = str.trim();
    }

    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        if(str[i] === " ") {
            newStr += "%20";
        }
        else {
            newStr += str[i];
        }
    }
    return newStr;


    
}






module.exports = urlify;