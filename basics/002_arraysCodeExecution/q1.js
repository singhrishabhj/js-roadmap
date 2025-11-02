// Write a JS function called `advancedManipulation` that performs the following operations on an array of strings:

/**
 * 1. Insert the string "new" at the second position of the array using shift() and unshift().
 * 2. Remove the third element from the array.
 * 3. Join all the elements of the array into a single string separated by commas.
 */

function advancedManipulation(words) {
  // Step 1️⃣: Use shift() and unshift() to insert "new" at the second position
  // Remove the first element and store it
  let firstWord = words.shift();

  // Add "new" at the beginning
  words.unshift("new");

  // Add back the first word at the beginning again
  words.unshift(firstWord);

  // Step 2️⃣: Remove the third element (index 2)
  words.splice(2, 1);

  // Step 3️⃣: Join all elements into a single string separated by commas
  let joinedStr = words.join(", ");

  return joinedStr;
}

// Example
let words = ["apple", "banana", "cherry", "date"];
let result = advancedManipulation(words);

console.log("Result:", result); // Output: "apple, new, cherry, date"
