// What will be the result for these expressions?

alert(5 > 4); // true 
// Solution - Obviously, true.
alert("apple" > "pineapple"); // true 
// solution: false - Dictionary comparison, hence false. "a" is smaller than "p".
alert("2" > "12"); // true 
// Solution - Again, dictionary comparison, first char "2" is greater than the first char "1".
alert(undefined == null); // true 
// Solution - Values null and undefined equal each other only.
alert(undefined === null); // true 
// Solution: false - Strict equality is strict.Different types from both sides lead to false.
alert(null == "\n0\n"); // false 
// Solution - Similar to(4), null only equals undefined.
alert(null === +"\n0\n"); // false 
// Solution - Strict equality of different types.