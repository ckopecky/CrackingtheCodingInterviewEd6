### Example 1

```c
void foo(int[] array) {
    int sum = 0;
    int product = 1;
    for(int i = 0; i < array.length; i++) {
        sum += array[i];
    }
    for(int i = 0; i < array.length; i++) {
        product *= array[i];
    }
    system.out.printIn(sum + "," + product);
}

```

line 7 (first for loop) === `O(n)`

line 10 (second for loop) === `O(n)`

line 13 === (print statement) `O(1)`

for loops are not nested, so we do not multiply the runtimes...we add. 

`O(2n)` ===> `O(n)`

------
### Example 2

```c
    void printPairs(int[] array) {
        for(int i = 0; i < array.length; i++){
            for(int j = 0; j < array.length; j++) {
                System.out.printIn(array[i] + "," + array[j]);
            }
        }
    }

```


 nested for loops indicate we multiply the runtime...
    
`O(n)` * `O(n)` === `O(nˆ2)`

---------------------
### Example 3

```c
    void printPairs(int[] array) {
        for(int i = 0; i < array.length; i++) {
            for(int j = i + 1; j < array.length; j++) {
                System.out.printIn(array[i] + "," + array[j]);
            }
        }
    }
```

for each i, we have a j complement that runs half the time ===> `O(nˆ2)`

--------------------

### Example 4

```c
void printUnOrderedPairs(int[] arrayA, int[] arrayB) {
    for(int i = 0; i < arrayA.length; i++) {
        for(int j = 0; j < arrayB.length; j++) {
            if(arrayA[i] < arrayB[j]) {
                System.out.println(arrayA[i] + "," + arrayB[j]);
            }
        }
    }
}

```

line 68 - we touch each i in ArrayA ... O(ArrayA.length)
line 69 - for each index in ArrayA, we loop through ArrayB, ArrayB.length times

runtime is `O(ArrayA.length * ArrayB.length)` ... or `O(ab)` if we `let a = ArrayA.length, b = ArrayB.length`

----------

#### Example 5

```c 

void printUnorderedPairs(int[] arrayA, int[] arrayB) {
    for(int i = 0; i < arrayA.length; i++) {
        for(int j = 0; j < arrayB.length; j++){
            for (int k = 0; k < 100000; k++) {
                System.out.println(arrayA[i] + "," + arrayB[j]);
            }
        }
    }
}

```

line 91 - we touch each i in Array A ... `O(arrayA.length)`
line 92 - for each index in Array A, we iterate arrayB.length times through the second for loop
`O(arrayB.length)`
line 93 - for each index in Array B, we iterate a constant amount of time... `O(1)`

so total runtime is `O(arrayA.length * arrayB.length)`

--------------------

### Example 6

```c

void reverse(int[] array) {
    for(int i = 0; i < array.length/2; i++){
        int other = array.length - i - 1;
        int temp = array[i];
        array[i] = array[other];
        array[other] = array[temp];
    }
}

```

doesn't necessarily matter what we are doing inside the for loop unless we are iterating over another loop...the loop indicates a `O(n)` runtime, even when the array length is divided in half. 


-----------

### Example 7


a. `O(N + P)`, where P < (N/2)
    - since we know that P is at most (N/2), N is the dominant term - we can drop the P. 

b. `O(2N)`
    - we drop constants
c. `O(N + log N)`
    - drop the non-doms

the last one - there is no established relationship between N and M, so we have to keep both. All but the last one are O(n);

-------------

### Example 8

Algorithm (["array", "of", "strings"])
we have an array of strings that needs to each be sorted, and then sort the full array. What would that runtime be?

```js
let arr = ["array", "of", "strings"];
arr.forEach(str => { // big-O runtime here is O(a), where a is length of array, because we are touching each index of the array
    str.sort(); //big-O runtime here is O(s log s), where s is the longest string. V8 uses Quicksort as the default sorting mechanism. 
});
arr.sort(); //big-O runtime here is O(a*s log a), where a is the length of the array and s is the length of the string...we need to compare the strings in order to sort the array and that is O(s) runtime. 

//How do we figure out the overall runtime then?
//forEach block first....

    //O(a * s log s);

//then arr.sort
    //O(a * s log a);


//for...then...means we add the two runtimes together...
// O(a * s log s) + O(a * s log a);
// O(2(a * s) log s + log a);
// don't need the coefficient
// O( a * s (log s + log a)); <=== runtime

```

### Example 9 

```c
int sum(Node node) {
    if(node == null) {
        return 0;
    }
    return sum(node.left) + node.value + sum(node.right);
}

```

You touch each node, so the runtime is O(n); No matter if it is recursive or not. 

### Example 10;

```c
boolean isPrime(int n) {
    for(int x = 2; x * x <= n; x++) {
        if (n % x == 0) {
            return false;
        }
    }
    return true;
}

```

the runtime on the above is almost linear...the only difference is that the limiter in the middle of the for loop. So the run time would be the square root of the limiter. `O(√n)`

