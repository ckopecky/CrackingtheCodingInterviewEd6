/* 

Given two strings, write a method to decide if one is a permutation of the other

permutation -- a way, especially one of several possible variations, in which a set or number of things can be ordered or arranged.

*/

function permutation(str1, str2) {
    //sort it
    str1 = str1.split("").sort().join("");
    str2 = str2.split("").sort().join("");

    return str1 === str2;
}



module.exports = permutation;

