/* 
Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 
*/


function palindromePermutation(str) {

    let cache = {}; //establish a hash object
    let count = 1; //initialize count to 1

    for(let i = 0; i < str.length; i++ ){
        if(!cache[str[i]]) { //if str[i] doesn't exist in cache
            cache[str[i]] = count; //add to cache

        } 
        else {
            cache[str[i]] += 1; // it's already in cache. Increment by 1
        }
    }
    let values = Object.values(cache); //grab all the values
    if(str.length % 2 === 0) { //if the string length is even all letters with be a multiple of two
        console.log(values);
        for(let i = 0; i < values.length - 1; i++) {
            if(values[i] % 2 !== 0){
                return false
            } 
        }
        return true; 
    } else {
        //string length is odd
        let i = 0;
        let count = 0;
        while(values[i] < values.length) {
            if(values[i] % 2 !== 0) {
                count += 1;
            }
            i++
        }
        if(count > 1) {
            return false;
        }
        return true;


    }

}


module.exports = palindromePermutation;