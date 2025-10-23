/*
Step 31: Using `const` for Immutable Variables

Task:
1. Replace your `let` keywords with `const` for variables that should not change.
2. Understand that `const` variables:
   - Must be **initialized** at the time of declaration.
   - **Cannot be reassigned** later in the program.
3. Declare and initialize your constants properly.
*/

//  Corrected Solution:
const character = "Hello";
const count = 8;
const rows = [];

/*
Notes / Learning:
- `const` is used for variables that should **not be reassigned**.
- Key rules for `const`:
  → Must be initialized when declared (cannot leave it undefined).
  → The variable identifier (name) cannot be reassigned.
  → However, if the value is **non-primitive** (like arrays or objects), 
    you can still modify its *contents* (e.g., push, pop), but not reassign it.
- Example:
    const name = "Rishabh";
    name = "Veera"; //  Error – reassignment not allowed

    const arr = [1, 2];
    arr.push(3); // Allowed – modifying contents
    arr = [4, 5]; // Error – reassignment not allowed
- Use `const` for values that remain constant throughout the program — it makes your code safer and more predictable.
*/
