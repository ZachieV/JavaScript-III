/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window, this is the global function.
 * 2. Implicit binding, whenever a function is called to the left of  the dot.
 * 3. New binding, referes the new object to the constructor funciton
 * 4. Explicit binding, whenever the function is called explicitly
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function payBills(money) {
  console.log(this);
  return money;
}
payBills(true);

// Principle 2

// code example for Implicit Binding

const myDance = {
  dance: '*Sick little boogie*',
  playFunk: function(music) {
    console.log(`${this.dance} to some sweet ${music}`);
    console.log(this);
  }
};
myDance.playFunk('Funk');

// Principle 3

// code example for New Binding

function GuitarSolo(shredder) {
  this.solo = "*Shreds Face*!!!!";
  this.shredder = shredder;
  this.faceMelter = function() {
    console.log(this.shredder + this.solo)
    console.log(this)
  };
}

const zach = new GuitarSolo('Zach ');
zach.faceMelter();




// Principle 4

// code example for Explicit Binding

zach.faceMelter.call(zach)
zach.faceMelter.apply(zach)