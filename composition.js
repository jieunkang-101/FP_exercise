// Problem #1
// Compose a function called paint() and then add it to three different painters. Each painter can only paint with one color. 
// > painter1.paints()
// "Paints green!"
// > painter2.paints()
// "Paints yellow!"
// > painter3.paints()
// "Paints red!"

const paint = () => ({
  paint: (color) => {
    return `Paints ${color}!`
  }
});

const painter1 = paint();
console.log(painter1.paint("green"));
const painter2 = paint();
console.log(painter2.paint("yellow"));
const painter3 = paint();
console.log(painter3.paint("red"));


// Problem #2
// Compose a function called sound().
// > faucet.sound()
// "Drip drip drip."
// > oldCar.sound()
// "Grumble grumble"
// > sleepyBear.sound()
// "Grrr...yawn" 



//Problem #3
// Compose a function called throw(). The throw() function should determine the distance and speed a battle robot can throw a spear. This function should be unary, so you will need to use currying.
// Next, add the throw() function to multiple battle robots. A result might look something like this:
// > battleRobot1.throw();
// "The battle robot throws the spear 100 yards at 200 miles per hour!"



// Problem #4
// First use closures to create three dance moves. For instance, a dancer should be able to do the following:
// > dancer.samba()
// "The dancer sambas!"
// > dancer.tango()
// "The dancer tangos!"
// Then add the dance moves to a dancer.