/*
    TASK 1: What is the last value alerted by this code? Why?

    let i = 3;

    while (i) {
    alert( i-- );
    }

    SOLUTION: 1

    let i = 3;
    alert(i--); // shows 3, decreases i to 2
    alert(i--) // shows 2, decreases i to 1
    alert(i--) // shows 1, decreases i to 0
    // done, while(i) check stops the loop

*/

/*
    TASK 2: For every loop iteration, write down which value it outputs and then compare it with the solution.
    Both loops alert the same values, or not?

    1. The prefix form ++i:

    let i = 0;
    while (++i < 5) alert( i );

    2. The postfix form i++:

    let i = 0;
    while (i++ < 5) alert( i );

    SOLUTION:
    1. from 1 to 4

    2. form 1 to 5
*/

/* 
    TASK 3: For each loop write down which values it is going to show. Then compare with the answer.
    Both loops alert same values or not?

    1. The postfix form:
    for (let i = 0; i < 5; i++) alert( i );

    2. The prefix form:
    for (let i = 0; i < 5; ++i) alert( i );

    SOLUTION:
    both cases are from 1 to 4
*/

/* 
    TASK 4: Use the for loop to output even numbers from 2 to 10.

    SOLUTION:
    for (let i = 2; i <= 10; i++) {
        if (i % 2 == 0) {
            alert( i );
        }
    }
    We use the “modulo” operator % to get the remainder and check for the evenness here.
*/

for (let index = 0; index < 10; index++) {
    alert(index);
}

/* 
    TASK 5: Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

    for (let i = 0; i < 3; i++) {
        alert( `number ${i}!` );
    }

    SOLUTION:
    let i = 0;
    while (i < 3) {
        alert( `number ${i}!` );
        i++;
    }
*/

let i = 0;
while (i < 3) {
    alert('number ${i}!');
    i++;
}

/* 
    TASK 6:
    Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
    The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
    Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

    SOLUTION:
    let num;
    do {
        num = prompt("Enter a number greater than 100?", 0);
    } while (num <= 100 && num);
*/

let sum = 100;
while (true) {
    let value = +prompt("Enter a number", '');

    if (!value) break;

    sum += value;
}
alert('Sum: ' + sum);

/* 
    TASK 7:
    An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
    In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
    For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
    Write the code which outputs prime numbers in the interval from 2 to n.
    For n = 10 the result will be 2,3,5,7.

    P.S. The code should work for any n, not be hard-tuned for any fixed value.

    SOLUTION:
    let n = 10;

    nextPrime:
    for (let i = 2; i <= n; i++) { // for each i...

        for (let j = 2; j < i; j++) { // look for a divisor..
            if (i % j == 0) continue nextPrime; // not a prime, go next i
        }

        alert( i ); // a prime
    }
*/

for (let index = 0; index < 10; index++) {
    if (index % 1) {
        alert(index);    
    }
}