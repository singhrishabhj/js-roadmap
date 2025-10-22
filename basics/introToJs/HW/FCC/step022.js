/*
Step 22: Accessing the Last Element of an Array Dynamically

Question:
Notice how the value inside your `rows` array has been changed directly? This is called **mutation**.  

- Sometimes, you may not know how many elements are in an array, but still want to access the last one.
- Use the `.length` property of an array to get the number of elements.
- To access the last element dynamically: array[array.length - 1]

Task:
Update your `rows[2]` to dynamically access the **last element** in the `rows` array.
*/

// Solution:
let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]); // prints 'Naomi'

rows[rows.length - 1] = 10; // dynamically access and update last element
console.log(rows); // prints ['Naomi', 'Quincy', 10]

/*
Notes / Learning:
- Mutation allows changing array elements directly.
- Using `.length - 1` dynamically finds the last index, making code adaptable to arrays of different sizes.
- Useful for loops, stacks, queues, and when building the pyramid dynamically.
*/
