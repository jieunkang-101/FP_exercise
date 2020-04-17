// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%Jones"

// =====================================
// =======recursive approach============
const recursiveURLs = function(string, urlArr = [], index = 0) {
  // edge case
  if (string == null) {
    return "Please enter a valid input";
  }
  
  const stringArr = string.toString().split(' ');                  // edge case("toString") -> number 
  const lastWord = string.toString().split(' ').pop();

  if (index === stringArr.length-1) {                                // base case
    return urlArr.join('') + lastWord;
  } else {                                                          // terminateion case
    const newStringArr = [...urlArr, stringArr[index], "%20"];
    return recursiveURLs(string, newStringArr, index + 1);
  }
}

console.log(recursiveURLs("Jasmine Ann Jones"));
console.log(recursiveURLs());
console.log(recursiveURLs(123));



// =====================================
// ===========Using for loop============

const loopURLs = (string) => {
  if (string == null) {
    return "Please enter a valid input";
  }

  const stringArr = string.toString().split(' ');
  const lastWord = string.toString().split(' ').pop();
  const urlArr = [];
  for (let i = 0; i < stringArr.length-1; i++) {
    urlArr.push(stringArr[i] + "%20");
  }
  return urlArr.join('') + lastWord;
}

console.log(loopURLs("Jasmine Ann Jones"));
console.log(loopURLs());
console.log(loopURLs(123));