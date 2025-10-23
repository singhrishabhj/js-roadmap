/*
Step 26: Using the .push() Method

Task:
1. Learn about array methods — built-in functions for arrays.
2. Use the `.push()` method to add a new element to the end of an array.
3. Log the updated array to verify the change.
*/

// Solution:
let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];

rows.push("freeCodeCamp"); // adds "freeCodeCamp" to the end of the array

console.log(rows); // prints ["Naomi", "Quincy", "CamperChan", "freeCodeCamp"]

/*
Notes / Learning:
- A **method** is a function associated with an object or data type (e.g., `console.log()`).
- The `.push()` method:
  → Adds one or more elements to the **end** of an array.
  → **Mutates** the original array.
  → Returns the **new length** of the array.
- Example:
    let arr = [1, 2];
    arr.push(3);  // arr becomes [1, 2, 3]
- You can chain `.push()` to add multiple values at once.
*/

