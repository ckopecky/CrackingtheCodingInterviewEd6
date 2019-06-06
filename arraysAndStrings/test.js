const unique = require("./Unique");
const permutation = require("./Permutation");
const urlify = require("./urlify");


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








