## An Analogy
------
File on a hard drive that needs to be sent to a friend across the country. A couple of scenarios could be created from the initial idea:

* Small file? YES
```
electronic transfer would be 
the cheapest and fastest way 
to transfer that data. 

The 5-10 hours it would take
to go to airport, 
fly across the country, 
and drive to friend 
would be slower and 
less cost-effective.
```

* Large file? YES
```
It is possible that hopping a flight
to deliver to friend is a lot faster
than electronically transferring it. 

If the file is urgent and cost is not
an issue, than you might want to do
that. 

```

------

### Time Complexity

Asymptotic runtime -- let's break it down:

* __Asymptotic__ describes limiting behavior

* __Runtime__ describes the period during which a computer program is executing

So asymptotic runtime would be the upper and lower limits of what it would take to execute programs. 

We use __Big O__ mainly to describe _Time Complexity_ in __Best Case__, __Worst Case__, and __Expected Case__ scenarios. 

------

#### Back to the Analogy for a Sec:

We could describe the data transfer of the file we are transporting as:

`O(s)` - where _s_ is the size of the file. This means that with any file increase, the time it takes to transfer will also increase. This is described as being linear. 

`O(1)` - if we were to transport the file via airplane to our friend, the time spent transferring it would be constant. No matter how big the file, it won't take any longer to get it to your friend. 

-------
__Best Case__, __Worst Case__, __Expected Case__

* __Best Case__ - occurs when an algorithm would traverse through itself only once...thus the time complexity would be a best case scenario. 

* __Worst Case__ - occurs when an algorithm has to traverse through itself the maximum number of times to solve the problem...thus the time complexity would be a worst case scenario...it would take the longest time to complete. 

* __Expected Case__ - most times, the expected case would not be the worst, nor will it be the best case scenario, but somewhere in between. 

In most cases, the expected case and the worst case scenario are one and the same. So what is the _relationship_ between best/worst/expected case and big O?

* The answer really is that there is no relationship. Best, worst and expected cases describe the __Big O__ time for particular scenarios...__Big O__ describes the upper bound of the runtime. 
------
### Space Complexity

Time Complexity is one side of the coin...as a programmer, we also care about the amount of memory (the amount of space) required by an algorithm. 

Space complexity is a parallel concept to time complexity. They can have the same values or different values. 

```c
int sum(int n) {
    if(n <= 0) {
        return 0;
    }
    return n + sum(n-1);
}
```

The preceding code takes _O(n)_ runtime and _O(n)_ space. Each runthrough adds a level to our `call stack`, making the algorithm linear...in both time and in space complexity. As the stack grows, the time it takes to run grows and the space/memory it takes up grows at the same rate. 

```c
int pairSumSequence(int n) {
    int sum = 0;
    for(int i = 0; i < n; i++) {
        sum += pairSum(i, i + 1);
    }
    return sum;
}

int pairSum(int a, int b) {
    return a + b;
}
```

On the above code, there will be `O(n)` calls on _pairSum()_, but those calls do not exist simultaneously on the call stack, so you only need `O(1)` space. 

-------

#### Drop the Constants

According to page 41, it is very possible for `O(n)` code to run faster than `O(1)` code for specific inputs. Big O just describes the rate of increase. 

__WE DROP CONSTANTS IN RUNTIME FOR THIS REASON__

#### Drop the non-dominant terms

`O(nˆ2 + n)` is the same as `O(nˆ2)`
`O(n + log n)` is the same as `O(n)`
`O(5 * 2ˆn + 10000nˆ100)` is the same as `O(2ˆn)`

Big O (rate of increase) of common big O times, in order of complexity:

```
O(log x) 
    has slowest rate of increase 
    (smallest slope)
O(x)
O(x log x)
O(xˆ2)
O(2ˆx)
O(x!)
    has largest rate of increase
    (largest slope)
```

There are other big O times, but these are the most common

--------

#### Multipart Algorithms

```c
//Example 1

for (int a : arrA) {
    print(a);
}

for (int b: arrB) {
    print(b);
}

//Example 2

for (int a: arrA) {
    for(int b: arrB) {
        print(a + "," + b)
    }
}
```

In example 1, we do A chunks work and then we do B chunks of work. Therefore, the amount of work is `O(A + B)`.

In example 2, we do B chunks of work for each element in A. Therefore, the amount of work is `O(A * B)`.

So:

* if your algorithm is in the form "do this, then when you're all done, do that"  ===> __ADD__
* if your algorithm is in the form "do this for _each_ time you do that" ===> __MULTIPLY__

----------------

#### Amortized Time

Amortized analysis considers both the costly and less costly operations of an algorithm together over the whole series of operations. This may include accounting for different types of input, length of the input, and other factors that affect its performance.

```js
class ArrayList {
    constructor(capacity) {
        super(props);
        this.capacity = capacity

    }
}

pushArr(){
    if (capacity < 5) {
        ArrayList.push(newArr);
    }
    //this is O(1) runtime because no matter the size of the array, it will always take up the same amount of time to push to the arrayList

    else {
        let newArrList = new ArrayList(10) 
        //create new ArrayList
        newArrList.push(ArrayList);
        newArrList.push(newArr);
    }
    //this is what happens when the original arrayList is full. A new arrayList is created that is double the size and everything is copied over. Since everything is touched at least once, this is O(n) runtime. 
}

```

Amortized time allows us to describe that worst case scenarios happen every once in a while, but that once it happens, it won't happen again for another long while (so that cost is 'amortized').

-------
#### `O(log n)` runtime

When you see a problem where the number of elements gets halved each time, that will likely be `O(log n) ` runtime