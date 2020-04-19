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

// console.log(isUnique("hello"));
// console.log(isUnique("copyright"));

const recursiveIsUnique = (string, index =0, elements = {}) => {
  //console.log(elements);
  const currentElement = string[index];
  if (!currentElement) {
    return true;
  } else {
    if (elements[currentElement]) {
      return false;
    }
    elements[currentElement] = true;    
    return recursiveIsUnique(string, index +1, elements);
  }
}

console.log(recursiveIsUnique("hello"));
console.log(recursiveIsUnique("copyright"));


