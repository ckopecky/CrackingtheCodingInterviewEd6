const unique = require("./Unique");
const permutation = require("./Permutation");
const urlify = require("./urlify");
const palindromePermutation = require("./PalindromePermutation");


//unique

test('unique function exists', () => {
    expect(typeof unique).toEqual('function');
});

test('"abcdefghijklmnopqrstuvwxyz" is full of unique characters', () => {
    expect(unique("abcdefghijklmnopqrstuvwxyz")).toBeTruthy();
});

test('"aardvark" is not full of unique characters', () => {
    expect(unique("aardvark")).toBeFalsy();
});

test('works with numbers and spaces', () => {
    expect(unique(" 1952cmvnk ")).toBeTruthy();
});

test('works with numbers and spaces', () => {
    expect(unique("01021982ccmmvvnnkk")).toBeFalsy();
});


// Permutation

test('unique function exists', () => {
    expect(typeof permutation).toEqual('function');
});

test('works with numbers and spaces', () => {
    expect(permutation(" 1952cmvnk ", "1925kvncm  ")).toBeTruthy();
});

test('not a permutation', () => {
    expect(permutation("aardvark", "aadvar3ls")).toBeFalsy();
});

test('is a permutation', () => {
    expect(permutation("123456abcdef", "fedcba123654")).toBeTruthy();
});

//urlify

test('unique function exists', () => {
    expect(typeof urlify).toEqual('function');
});
test('urlify string', () => {
    expect(urlify("Mr John Smith    ", 13)).toEqual('Mr%20John%20Smith');
});

//palindrome permutation

test('unique function exists', () => {
    expect(typeof palindromePermutation).toEqual('function');
});

test('works on odd length string', () => {
    expect(palindromePermutation("ctacato")).toBeTruthy();
});

test('works on standard even length string', () => {
    expect(palindromePermutation("mamabcbc")).toBeTruthy();
});
//cbammabc

test('works on standard even length string that is a multiple instances of letters', () => {
    expect(palindromePermutation("mamababa")).toBeTruthy();
});

//abammaba

test('falsy on word that is not permutation of palindrome', () => {
    expect(palindromePermutation("hello")).toBeFalsy();
});









