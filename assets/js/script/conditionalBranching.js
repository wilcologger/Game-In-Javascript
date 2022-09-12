/*
    Task 1: Will alert be shown?

    if ("0") {
        alert( 'Hello' );
    }

    Solution: Yes, it will. Any string except an empty one (and "0" is not empty) becomes true in the logical context.
*/

/*
    Task 2: 
    Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
    If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
*/

let name = prompt('What is the “official" name of javascript', '');

if (name == 'ECMAScript') {
  alert('Right!');
} else {
  alert('You don\'t know "ECMAScript"!');
}

/* 
    Task 3:
    Using if..else, write the code which gets a number via prompt and then shows in alert:
        * 1, if the value is greater than zero,
        * -1, if less than zero,
        * 0, if equals zero.
    
    In this task we assume that the input is always a number.
*/

let number = prompt('is number greater or lesser than 0', '');

if (number >= 1) {
    alert('Your greater than zero');
} else if (number < 0) {
    alert('Your less than zero');
} else {
    alert('equal to zero');
}

/*
    Task 4: 
    Rewrite this if using the conditional operator '?':

        let result;

        if (a + b < 4) {
        result = 'Below';
        } else {
        result = 'Over';
        }
*/

let result = (a + b < 4) ? 'Below' : 'Over';

/*
    Task 5: 
    Rewrite if..else using multiple ternary operators '?'.
    For readability, it’s recommended to split the code into multiple lines.

    let message;

    if (login == 'Employee') {
    message = 'Hello';
    } else if (login == 'Director') {
    message = 'Greetings';
    } else if (login == '') {
    message = 'No login';
    } else {
    message = '';
    }

    Solution:
    let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
    '';
*/

let login = prompt('name', '');

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  'no login';

alert(message);
