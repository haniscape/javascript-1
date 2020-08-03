/****************************************************************************
 *  -1- Variables and data types
 ****************************************************************************/

var firstName = 'Hany';
var age = 39;
var fullAge = true;

console.log(firstName);
console.log(fullAge);

// you can declare a variable and not assign a value to it
var job;
// if you console log job:  it will return undefined
console.log(job);
// however we can assign a value to it later
var job = 'Teacher';
console.log(job);

// Variable naming rules:
// - the convention is to use the camelCase notation
// - start a variable with a letter, _underScore , or $dollarSign
// - variable name cannot start with numbers, or symbols except for $ and underscore
// - variables name cannot have a symbol in the middle
// - variable name cannot be reserved KEYWORDS
var johnMark = 'John and Mark';
var _underScore;
// var 3years = 3;
// var john/mark;   <--- this will return an error
// var if = 23;   <--- this will return an error

/****************************************************************************
 *  -2- Variable mutation and type coercion
 ****************************************************************************/

var firstName = 'Hany';
var age = 41;

// coercion  /kəʊɜːʃən/ = javascript automatically convert a datatype to
// fit in with other datatypes

// age as a number is converted into a string
console.log(firstName + ' ' + age);

// you can declare MULTIPLE variables in one var xxxx; and then give each variable its value
var job, isMarried;
job = 'web developer';
isMarried = true;

// Type coercion
// isMarried type was boolean but coerced into string
// also if we dont give it a value at all it will be coerced into 'undefined' string
console.log(
  firstName +
    'is a  ' +
    age +
    ' years old ' +
    job +
    '. Is he Married? ' +
    isMarried
);

// Variable mutation
// age was a number but if you give it string value, it will mutate
age = 28;
console.log(age);
age = 'twenty eight';
console.log(age);

// use alert to create a popup with a message
alert(
  firstName +
    ' is a ' +
    age +
    ' years old ' +
    job +
    '. Is he Married? ' +
    isMarried
);

// use prompt to collect value for a variable
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

// We can have as many statements in our code as we want.
// Statements can be separated with a semicolon, so it loads with the web page
alert('Hello');
alert('World');
alert('again');
alert('and again');
