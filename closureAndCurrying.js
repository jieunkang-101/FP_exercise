// Problem #1
// Use a closure to create multiple functions for adding a prefix to a name. The prefix could be Doctor, Duchess, Sir, and so on.

const addPrefix = (prefix) => {
  return (name) => {
      return prefix + name;
  }
} 

const prefixSir = addPrefix("Sir ");
const prefixDr = addPrefix("Dr. ");

console.log(prefixSir("Claire"));
console.log(prefixSir("Joyce"));
console.log(prefixDr("Claire"));
console.log(prefixDr("Joyce"));


// Problem #2
// Use a closure to create multiple functions for making various animal noises.

function soundMaker(sound) {
  return function(animal) {
    return `${animal} says ${sound}~`;
  }
}

const lionSound = soundMaker("roar");
const mouseSound = soundMaker("squeak");
console.log(lionSound("Lion"));
console.log(mouseSound("Mouse"));


// Problem #3 (Harder)
// Use closures to create multiple functions for adding both a prefix and a suffix to a name. 

function nameEnhancer(prefix) {
  return function(suffix) {
    return function(name) {
      return `${prefix} ${name} ${suffix}`;
    }
  }
}

const misterJunior = nameEnhancer("Mister")("Junior");
const duchessThird = nameEnhancer("Duchess")("The Third");

console.log(misterJunior("Claire"));
console.log(duchessThird("Claire"));


// Problem #4 (Harder)
// Use closures to create multiple functions to first add to and then multiply a value. 

const addaMult = (addition) => {
  return (multiplier) => {
    return (input) => {
      // return (input + addition) * multiplier;
      return `${input} added to ${addition} is equal to ${input + addition}, and ${input} multiplied by 3 is equal to ${input * multiplier}`;
    } 
  }
}

const addTwo = addaMult(2);
const multiplyByThree = addTwo(3);
console.log(multiplyByThree(5));


const addTwoMultiplyByThree = addaMult(2)(3);
//const addFiveMultiplyByNine = addaMult(5)(9);
console.log(addTwoMultiplyByThree(5));
console.log(addaMult(2)(3)(5));
// console.log(addFiveMultiplyByNine(2));
// console.log(addaMult(5)(9)(2));

