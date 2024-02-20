// Given an integer n, return a counter function. 
// This counter function initially returns n and then returns 1 more
// than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

var createCounter = function(n) {
    if (typeof n !== 'number' || isNaN(n) || !Number.isInteger(n)) {
   throw new TypeError('n must be a valid integer');
 }
 let counter = n-1;
 return function() {
   counter++;
   return counter;
 };
};

/** 
* const counter = createCounter(10)
* counter() // 10
* counter() // 11
* counter() // 12
*/