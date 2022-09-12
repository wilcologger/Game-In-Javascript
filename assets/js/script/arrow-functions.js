/**
 * Arrow functions
 */

let sum = (a, b) =>  a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3

/**
 * TASK 1: 
 * 
 * Replace Function Expressions with arrow functions in the code below:
 * 
 * 
 * function ask(question, yes, no) {
 *  if (confirm(question)) yes();
 *  else no();
 * }
 * 
 * ask(
 *  "Do you agree?",
 *  function() { alert("You agreed."); },
 *  function() { alert("You canceled the execution."); }
 * );
 * 
 * SOLUTION:
 * function ask(question, yes, no) {
 *  if (confirm(question)) yes();
 *  else no();
 * }
 * 
 * ask(
 *  "Do you agree?",
 *  () => alert("You agreed."),
 *  () => alert("You canceled the execution.")
 * );
 * 
 */

let ask = (question, yes, no) => confirm(question) ? yes(alert("You agreed.")) : no(alert("You canceled the execution."));

alert("Do you agree?", ask());

// oefenen wat het verschil is.
let wilco = (a, b) => a + b; console.log( wilco(1,2) );
let wilco = (a, b) => { return a + b }; console.log( wilco());
