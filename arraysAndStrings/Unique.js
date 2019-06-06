/*
Implement an algorithm to determine if a string has all unique characters. What if you could not use additional data structures? 



if I couldn't use a data structure, I would probably sort the string and then loop over the string and check to see if i === i + 1 at any point. If so, then it's not unique...if we get to end, it's unique. 
*/

function unique(str) {
    let regex = /[^ *]/g
    const spaceFree = str.match(regex);
    const sorted = spaceFree.sort().join('');

    for(let i = 0; i < sorted.length; i++){
        if(sorted[i] === sorted[i + 1]) {
            return false;
        }
        return true;
    }
    
}


module.exports = unique;


