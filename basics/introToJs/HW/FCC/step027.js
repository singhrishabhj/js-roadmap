/*
Step 27: Using the .pop() Method

Task:
1. Learn how to remove the last element from an array using the `.pop()` method.
2. Store the removed element in a new variable `popped`.
3. Log both the removed element and the updated array to the console.
*/

// Solution:
let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];

rows.push("freeCodeCamp"); // adds "freeCodeCamp" to the end of the array

let popped = rows.pop(); // removes and returns the last element

console.log(popped); // prints "freeCodeCamp"
console.log(rows);   // prints ["Naomi", "Quincy", "CamperChan"]

/*
Notes / Learning:
- The `.pop()` method:
  → Removes the **last element** from an array.
  → **Returns** the removed element (unlike `.push()` which returns the new length).
  → Mutates (changes) the original array.
- Example:
    let arr = [1, 2, 3];
    let last = arr.pop(); // arr = [1, 2], last = 3
- Useful when you need to access and remove data simultaneously from an array’s end.
*/
