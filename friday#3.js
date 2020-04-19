// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

function loopCompression (str) {
  if (str == null || typeof str !== "string") {
    return "Please enter a valid input";
  }

  let result = '';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count += 1;
    if (str[i] !== str[i+1]) {
      if (count !== 1) {
        result += count + str[i];
      } else {
        result += str[i];
      }
      count = 0;
    }
  }
  return result;
}
//====================================

function recurviseCompression (string, index = 0, count = 1, result = "") {
  if (string == null || typeof string !== "string") {
    return "Please enter a valid input";
  }

  if (index >= string.length) {
    return result;
  } else {
    if (string[index] === string[index +1]) {
      return recurviseCompression(string, index +1, count +1, result );
    } 

    if (count === 1) {
      currentResult = string[index];
      return recurviseCompression(string, index +1, 1, result + currentResult );
    } else {
      currentResult = count + string[index];
      return recurviseCompression(string, index +1, 1, result + currentResult );
    }
  } 
}

console.log(recurviseCompression("aaabccdddda"));
console.log(recurviseCompression(111));
console.log(recurviseCompression());


