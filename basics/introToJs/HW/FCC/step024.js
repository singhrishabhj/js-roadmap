/*
Step 24: Array Review – Access and Mutation

Task:
1. Declare and initialize arrays `rows` and `cities`.
2. Log `cities` to the console.
3. Update the last element of `cities` to "Mexico City".
4. Log `cities` again.
5. Log `rows` for reference.
*/

// Solution:
let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
let cities = ["London", "New York", "Mumbai"];

console.log(cities); // prints ["London", "New York", "Mumbai"]

cities[cities.length - 1] = "Mexico City";
console.log(cities); // prints ["London", "New York", "Mexico City"]

console.log(rows); // prints ["Naomi", "Quincy", "CamperChan"]

/*
Notes / Learning:
- Arrays are mutable; you can change elements by index.
- Use `.length - 1` to access the last element dynamically.
- Logging arrays helps track the changes and verify updates.
*/
