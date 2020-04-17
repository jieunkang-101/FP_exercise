// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"
// Output: false

// Input: "copyright"
// Output: true

function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char, i + 1) > -1) {
      return false;
    }
  }
  return true;
}

//const strArr = string.toString().split("");

const recursiveUnique = (string, index =0, elements = []) => {
  const currentElement = string[index];
  if (index >= string.length) {
    return true;
  } else {
    if (elements[string[index]]) {
      return false;
    }
    elements[currentElement] = true;
    return isUnique(string, index +1, elements);
  }
}

console.log(isUnique("hello"));
console.log(isUnique("copyright"));
console.log(recursiveUnique("hello"));
console.log(recursiveUnique("copyright"));

