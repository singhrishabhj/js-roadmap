/*
Step 21: Modifying Array Elements (Mutable Arrays)

Question:
Arrays are **mutable**, meaning you can change the value at a specific index directly.

Example:
let array = [1, 2, 3];
array[1] = 25;
console.log(array); // prints [1, 25, 3]

Task:
Update the third element of your `rows` array to be the number 10.  
Then print the `rows` array to the console.
*/

// Solution:
let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]); // prints 'Naomi'

rows[2] = 10; // change third element
console.log(rows); // prints ['Naomi', 'Quincy', 10]

/*
Notes / Learning:
- Arrays are mutable, so individual elements can be changed using their index.
- Indexing starts at 0: rows[2] refers to the third element.
- Mutating arrays is useful for dynamically updating data, e.g., in a pyramid generator or loops.
*/
