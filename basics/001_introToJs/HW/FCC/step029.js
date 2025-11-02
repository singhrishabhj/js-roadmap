/*
Step 29: Understanding Method Return Values

Task:
1. Review what `.push()` and `.pop()` return:
   - `.push()` returns the new length of the array.
   - `.pop()` returns the removed element.
2. Experiment with them if needed.
3. Once done, remove all `.push()`, `.pop()`, and `console.log()` statements.
*/

// Solution:
let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];

/*
Notes / Learning:
- `.push()` and `.pop()` not only modify arrays but also **return useful values**.
- `.push()` → returns **new array length** after adding an element.
- `.pop()` → returns **removed element** from the array.
- Always understand what a method returns — this helps in debugging and chaining operations effectively.
- Example:
    let arr = [10, 20];
    console.log(arr.push(30)); // prints 3 (new length)
    console.log(arr.pop());    // prints 30 (removed element)
*/
