// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi", 7, 53]

// Output: [7, 9, "hi", 12, 53]


const recursiveDedupe = (arr, dedupedArr = [], index = 0) => {
  if (!(toString.call(arr) === "[object Array]")) {
    return "Please enter a valid input";
  }

  if (index >= arr.length) {
    return dedupedArr;
  } else {
    if (!dedupedArr.includes(arr[index])) { 
      const newArr = [...dedupedArr, arr[index]];
      return recursiveDedupe(arr, newArr, index + 1);
    } else {
      const newArr = [...dedupedArr];
      return recursiveDedupe(arr, newArr, index + 1);
    }  
  }
}
console.log(recursiveDedupe("string"));
console.log(recursiveDedupe([7, 9, "hi", 12, "hi", 7, 53]));
console.log(recursiveDedupe(["cat", "dog", "cat", "bat", "dog", "bat", "cow"]));



function removeDuplicates(arr) {
  if (!(toString.call(arr) === "[object Array]")) {
    return "Please enter a valid input";
  }

  let dedupe = [];
  arr.forEach(element => {
    if(!dedupe.includes(element)) {
      dedupe.push(element)
    }
  });
  return dedupe;
}
console.log(removeDuplicates("string"));
console.log(removeDuplicates([7, 9, "hi", 12, "hi", 7, 53]));
console.log(removeDuplicates(["cat", "dog", "cat", "bat", "dog", "bat", "cow"]));







// function removeDuplicates(data) {
//   return data.filter((value, index) => data.indexOf(value) === index);
// }

// function getDuplicates(data) {
//   return data.filter((value, index) => data.indexOf(value) !== index);
// }