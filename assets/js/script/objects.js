/**
 * Coling and merging, Object.assign
 * https://javascript.info/object-copy#cloning-and-merging-object-assign
 */

/**
 * We can also use the method Object.assign. The syntax is:
 * Object.assign(dest, src1[, src2, src3...])
 * - The first argument dest is a target object.
 * - Further arguments src1, ..., srcN (can be as many as needed) are source objects.
 * - It copies the properties of all source objects src1, ..., srcN into the target dest. In other words, properties of all arguments starting from the second are copied into the first object.
 * - The call returns dest.
 */

/**
 * The call structuredClone(object) clones the object with all nested properties.
 * https://javascript.info/object-copy#structuredclone
 */

/**
 * Object methods, "this"
 * In JavaScript, keyword this behaves unlike most other programming languages. It can be used in any function, even if it’s not a method of an object.
 */

/**
 * TASK 1 - using this in object literal
 * Here the function makeUser returns an object.
 * What is the result of accessing its ref? Why?
 * 
 * function makeUser() {
 *    return {
 *     name: "John",
 *     ref: this
 *   };
 * }
 * 
 * let user = makeUser();
 * 
 * alert( user.ref.name ); // What's the result?
 * 
 * SOLUTION:
 * Error: Cannot read property 'name' of undefined
 */

// Error

/**
 * TASK 2 - create a calculator
 * Create an object calculator with three methods:
 * * read() prompts for two values and saves them as object properties with names a and b respectively.
 * * sum() returns the sum of saved values.
 * * mul() multiplies saved values and returns the result.
 * 
 * let calculator = {
 *   // ... your code ...
 * };
 * 
 * calculator.read();
 * alert( calculator.sum() );
 * alert( calculator.mul() );
 * 
 * SOLUTION:
 */

function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

/**
 * TASK 3 - chaining
 * There’s a ladder object that allows to go up and down:
 * 
 * let ladder = {
 *   step: 0,
 *   up() {
 *     this.step++;
 *   },
 *   down() {
 *     this.step--;
 *   },
 *   showStep: function() { // shows the current step
 *     alert( this.step );
 *   }
 * };
 * 
 * Now, if we need to make several calls in sequence, can do it like this:
 * 
 * ladder.up();
 * ladder.up();
 * ladder.down();
 * ladder.showStep(); // 1
 * ladder.down();
 * ladder.showStep(); // 0
 * 
 * Modify the code of up, down and showStep to make the calls chainable, like this:
 * 
 * ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
 * 
 * Such approach is widely used across JavaScript libraries.
 * 
 * SOLUTION:
 */

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

/**
 * Constructor, operator "new"
 * https://javascript.info/constructor-new
 */

/**
 * TASK 4 - two functions one object
 * Is it possible to create functions A and B so that new A() == new B()?
 * 
 * function A() { ... }
 * function B() { ... }
 * 
 * let a = new A;
 * let b = new B;
 * 
 * alert( a == b ); // true
 * 
 * If it is, then provide an example of their code.
 * 
 * SOLUTION:
 */

// Yes, it’s possible.
// If a function returns an object then new returns it instead of this.
// So they can, for instance, return the same externally defined object obj:

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true

/**
 * TASK 5 - create new calculator
 * Create a constructor function Calculator that creates objects with 3 methods:
 * * read() asks for two values using prompt and remembers them in object properties.
 * * sum() returns the sum of these properties.
 * * mul() returns the multiplication product of these properties.
 * 
 * For instance:
 * let calculator = new Calculator();
 * calculator.read();
 * 
 * alert( "Sum=" + calculator.sum() );
 * alert( "Mul=" + calculator.mul() );
 * 
 * SOLUTION:
 */

function Calculator() {
    this.obj = obj;

    this.read = function () {
        prompt("Value one" + this.obj);
    };
}

/**
 * TASK 6 - create new accumulator
 * Create a constructor function Accumulator(startingValue).
 * Object that it creates should:
 * * Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
 * * The read() method should use prompt to read a new number and add it to value.
 * 
 * In other words, the value property is the sum of all user-entered values with the initial value startingValue.
 * 
 * Here’s the demo of the code:
 * let accumulator = new Accumulator(1); // initial value 1
 * 
 * accumulator.read(); // adds the user-entered value
 * accumulator.read(); // adds the user-entered value
 * 
 * alert(accumulator.value); // shows the sum of these values
 * 
 * SOLUTION:
 */

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);