// Problem #1
// Compose a function called paint() and then add it to three different painters. Each painter can only paint with one color. 
// > painter1.paints()
// "Paints green!"
// > painter2.paints()
// "Paints yellow!"
// > painter3.paints()
// "Paints red!"

const painter = (color) => ({
  paints: () => {
    return `Paints ${color}!`
  }
});

const painter1 = painter("green");
//console.log(painter1.paints());
const painter2 = painter("yellow");
//console.log(painter2.paints());
const painter3 = painter("red");
//console.log(painter3.paints());


// Problem #2
// Compose a function called sound().
// > faucet.sound()
// "Drip drip drip."
// > oldCar.sound()
// "Grumble grumble"
// > sleepyBear.sound()
// "Grrr...yawn" 

const soundMaker = (sound) => ({
  sound: () => {
    return `${sound}!`
  }
});
const faucet = soundMaker("Drip drip drip.");
//console.log(faucet.sound());
const oldCar = soundMaker("Grumble grumble.");
//console.log(oldCar.sound());
const sleepyBear = soundMaker("Grrr....yawn");
//console.log(sleepyBear.sound());


//Problem #3
// Compose a function called throw(). The throw() function should determine the distance and speed a battle robot can throw a spear. This function should be unary, so you will need to use currying.
// Next, add the throw() function to multiple battle robots. A result might look something like this:
// > battleRobot1.throw();
// "The battle robot throws the spear 100 yards at 200 miles per hour!"

const recursiveThrow = (distance) => {
  return (speed) => ({
    throw: () => {
      return `The battle robot throws the spear ${distance} yards at ${speed} miles per hour!`
    }
  });
}

const battleRobot1 = recursiveThrow(100)(200);
//console.log(battleRobot1.throw());

// Problem #4
// First use closures to create three dance moves. For instance, a dancer should be able to do the following:
// > dancer.samba()
// "The dancer sambas!"
// > dancer.tango()
// "The dancer tangos!"
// Then add the dance moves to a dancer.

const recursiveDancer = (name) => ({
  samba: () => {
    return `${name} sambas!`;
  },
  tango: () => {
    return `${name} tangos!`;
  }
});

const dancer1 = recursiveDancer("Claire");
const dancer2 = recursiveDancer("Steve");
console.log(dancer1.samba());
console.log(dancer1.tango());
console.log(dancer2.samba());
console.log(dancer2.tango());