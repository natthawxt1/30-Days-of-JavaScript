/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) { //keep n 
    
    return function() { //give it return back first and then go return +1 in n++
        return n++; // n = counter
    }
};
 
const counter = createCounter(10);

console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12


const counter2 = createCounter(-2);

console.log(counter2()); // -2
console.log(counter2()); // -1
console.log(counter2()); // 0
console.log(counter2()); // 1
console.log(counter2()); // 2