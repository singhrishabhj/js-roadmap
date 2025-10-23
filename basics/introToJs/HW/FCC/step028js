/*
Step 28: Understanding What .push() Returns

Task:
1. Assign the result of `rows.push("freeCodeCamp")` to a new variable named `pushed`.
2. Log `pushed` to see what `.push()` returns.
3. Continue to log `popped` and `rows` as before to compare the behaviors of `.push()` and `.pop()`.
*/

// Solution:
let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];

let pushed = rows.push("freeCodeCamp"); // adds "freeCodeCamp" and returns new length of array
console.log(pushed); // prints 4

let popped = rows.pop(); // removes last element and returns it
console.log(popped); // prints "freeCodeCamp"
console.log(rows);   // prints ["Naomi", "Quincy", "CamperChan"]

/*
Notes / Learning:
- `.push()` and `.pop()` are complementary array methods.
- `.push(value)`:
  → Adds a value to the **end** of an array.
  → Returns the **new length** of the array.
- `.pop()`:
  → Removes the **last element**.
  → Returns the **removed element**.
- Example:
    let arr = [1, 2];
    let pushed = arr.push(3); // arr = [1, 2, 3], pushed = 3
    let popped = arr.pop();   // arr = [1, 2], popped = 3
*/
