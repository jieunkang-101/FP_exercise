// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

function stringCompression (str) {
  if (str == null) {
    return "Please enter a valid input";
  }

  let output = '';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count += 1;
    if (str[i] != str[i+1]) {
      if (count !== 1) {
        output += count + str[i];
      } else {
        output += str[i];
      }
      count = 0;
    }
  }
  return output;
}
// console.log(stringCompression("aaabccdddda"));
// console.log(stringCompression());

function recurviseCompression (string, index = 0, count = 1, result = []) {
  if (string == null) {
    return "Please enter a valid input";
  }

  if (index >= string.length) {
    return result.join('');
  } else {
    if (string[index] !== string[index +1]) {
      const newResult = [...result, string[index]];
      return recurviseCompression(string, index +1, 1, newResult );
    } else {
      const newResult = [...result, count + string[index]];
      return recurviseCompression(string, index +1, count +1, newResult );
    } 
  }
}
console.log(recurviseCompression("aaabccdddda"));
console.log(recurviseCompression());

