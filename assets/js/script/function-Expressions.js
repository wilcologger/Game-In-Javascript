/**
 * Function
 */
sayHi("John"); // Hello, John

function sayHi(name) { // (1) create
  alert( `Hello, ${name}` );
}

let func = sayHi;    // (2) copy

func(); // Hello John    // (3) run the copy (it works)!
sayHi(); // Hello John   //     this still works too (why wouldn't it)

/**
 * Function Expressions
 */
sayHi("John"); // error!

let sayHi = function(name) { // (1) no magic any more
  alert( `Hello, ${name}` );
};

let func = sayHi;    // (2) copy

func(); // Error!
sayHi(); // Error!

/**
 *  Callback functions
 * 
 *  Waarom hebben ze hier 3 functions van gemaakt?
 */

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

/**
 * What can we do to make function visible outside of if?
 */

let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now