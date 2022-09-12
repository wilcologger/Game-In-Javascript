/**
 * Object summary
 * 
 * Objects are associative arrays with several special features.
 * 
 * They store properties (key-value pairs), where:
 * - Property keys must be strings or symbols (usually strings).
 * - Values can be of any type.
 * 
 * To access a property, we can use:
 * - The dot notation: obj.property.
 * - Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].
 * 
 * Additional operators:
 * - To delete a property: delete obj.prop.
 * - To check if a property with the given key exists: "key" in obj.
 * - To iterate over an object: for (let key in obj) loop.
 * 
 * What we’ve studied in this chapter is called a “plain object”, or just Object.
 * 
 * There are many other kinds of objects in JavaScript:
 * - Array to store ordered data collections,
 * - Date to store the information about the date and time,
 * - Error to store the information about an error.
 * - …And so on.
 * 
 * They have their special features that we’ll study later. Sometimes people say something like “Array type” or “Date type”, but formally they are not types of their own, but belong to a single “object” data type. And they extend it in various ways.
 * 
 * Objects in JavaScript are very powerful. Here we’ve just scratched the surface of a topic that is really huge. We’ll be closely working with objects and learning more about them in further parts of the tutorial.
 */

let objOne = new Object(); // "object constructor" syntax
let objTwo = {};  // "object literal" syntax

/**
 * TASK 1
 * Write the code, one line for each action:
 *  1. Create an empty object user.
 *  2. Add the property name with the value John.
 *  3. Add the property surname with the value Smith.
 *  4. Change the value of the name to Pete.
 *  5. Remove the property name from the object.
 * 
 * SOLUTION:
 * let user = {};
 * user.name = "John";
 * user.surname = "Smith";
 * user.name = "Pete";
 * delete user.name;
 */

let user = {
    name: "John",
    surname: "Smith"
}
user.name = "Pete";
delete user.name;

/**
 * TASK 2
 * Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
 * Should work like that:
 * let schedule = {};
 * alert( isEmpty(schedule) ); // true
 * schedule["8:30"] = "get up";
 * alert( isEmpty(schedule) ); // false
 * 
 * SOLUTION:
 * function isEmpty(obj) {
 *   for (let key in obj) {
 *    // if the loop has started, there is a property
 *    return false;
 *   }
 *   return true;
 * }
 */

function isEmpty(obj) {
   let schedule = {};

   if (schedule["8:30"]) {
      console.log("get up!");
   } else {
      console.log("sleep");
   }
}

isEmpty();

/**
 * TASK 3
 * We have an object storing salaries of our team:
 * 
 *  let salaries = {
 *      John: 100,
 *      Ann: 160,
 *      Pete: 130
 *  }
 * 
 * Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
 * If salaries is empty, then the result must be 0.
 * 
 * SOLUTION:
 *  let salaries = {
 *    John: 100,
 *    Ann: 160,
 *    Pete: 130
 *  };
 *  
 *  let sum = 0;
 *  for (let key in salaries) {
 *    sum += salaries[key];
 *  }
 *  
 *  alert(sum); // 390
 */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = (salaries.John + salaries.Ann + salaries.Pete);

if (sum) {
   console.log(sum);
} else {
   console.log("0");
}

/**
 * TASK 4
 * Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
 * For instance:
 * 
 * // before the call
 * let menu = {
 *  width: 200,
 *  height: 300,
 *  title: "My menu"
 * };
 *
 * multiplyNumeric(menu);
 *
 * // after the call
 * menu = {
 *  width: 400,
 *  height: 600,
 *  title: "My menu"
 * };
 * 
 * Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
 * P.S. Use typeof to check for a number here.
 * 
 * SOLUTION:
 * function multiplyNumeric(obj) {
 *   for (let key in obj) {
 *     if (typeof obj[key] == 'number') {
 *       obj[key] *= 2;
 *     }
 *   }
 * }
 */

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
// console.log(menu.width * 2 );

for (let item in menu) {
   console.log(menu[item] *= 2);
}

multiplyNumeric(menu);

