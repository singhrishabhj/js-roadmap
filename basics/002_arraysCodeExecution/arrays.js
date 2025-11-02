console.log("JS Class - 2");

/**
 * 📘 Arrays
 * Arrays in JavaScript are dynamic — they don’t have a fixed size.
 * You can add or remove elements easily.
 */

let arr = [1, 2, 3, 4];
let arr2 = [];

// Print arrays
console.log("arr:", arr);
console.log("arr2:", arr2);

// Iterate through array
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

/****************** 🔹 Important Array Methods 🔹 ******************/

/**
 * 1. Add element at the end -> push()
 * 2. Remove element from the end -> pop()
 * 3. Add element at the beginning -> unshift()
 * 4. Remove element from the beginning -> shift()
 */

// 1. push() - adds an element at the end of the array
arr.push(50);
console.log("After push:", arr);

// 2. pop() - removes the last element
arr.pop();
console.log("After pop:", arr);

// 3. unshift() - adds an element at the start
arr.unshift(99000);
console.log("After unshift:", arr);

// 4. shift() - removes the first element
arr.shift();
console.log("After shift:", arr);

/**
 * 5. slice(start, end)
 * Returns a shallow copy of a portion of an array into a new array object.
 * Does NOT modify the original array.
 */
let slicedArr = arr.slice(1, 4);
console.log("Sliced array:", slicedArr); // Original array remains unchanged

/**
 * 6. splice(start, deleteCount)
 * Changes the contents of an array by removing or replacing elements.
 * Modifies the original array.
 */
arr.splice(3, 1); // Removes 1 element starting from index 3
console.log("After splice (delete):", arr);

// Example: splice(start, deleteCount)
// slice() → returns a copy (does NOT modify original)
// splice() → removes from original array

/**
 * 7. indexOf(element)
 * Returns the first index of the specified element, or -1 if not found.
 Returns the first index of the specified element, or -1 if not found.
 * 
 * Why -1?
 * Because -1 indicates that the element does NOT exist in the array.
 * It’s a standard JS convention — since valid indexes start from 0,
 * returning -1 makes it easy to check if an element is missing.
 */ 

console.log("Index of 4:", arr.indexOf(4));
console.log("Index of 90:", arr.indexOf(90));

/**
 * 8. includes(element)
 * Checks if an element exists in the array.
 * Returns true or false.
 */
console.log("Includes 10:", arr.includes(10));

// 9. join() - joins all array elements into a single string with the specified separator

let fruits = ["apple", "banana", "pineapple"];
let str = fruits.join("$");

console.log("String:", str); // Output: "apple$banana$pineapple"

/**
 * Explanation:
 * join() combines all elements of the array into a single string.
 * The argument (like "$", ",", "-", etc.) is used as a separator.
 * 
 * If no separator is given, it defaults to a comma (,)
 * Example:
 * fruits.join() → "apple,banana,pineapple"
 */