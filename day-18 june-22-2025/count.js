// var $_myMsg123 = "Hello, World!";
// var $_myMsg123 = "Hello, Universe!";
let $_myMsg123 = "Hello, World!";
$_myMsg123 = "Hello, Universe!";
console.log($_myMsg123);

const studentName = "John Doe";
// studentName = "Kamal Khan";
console.log(studentName);

// Data types
// Primitive data types
/**
 * string
 * number
 * boolean
 * null
 * undefined
 */

// Non-primitive data types
/**
 * object
 * array
 * function
 */

// Operators
// Arithmetic Operators
/**
 * Addition: +
 * Subtraction: -
 * Multiplication: *
 * Division: /
 * Modulus: %
 * Exponentiation: **
 * Increment: ++
 * Decrement: --
 */

// Assignment Operators
/**
 * Assignment: =
 * Addition Assignment: +=
 * Subtraction Assignment: -=
 * Multiplication Assignment: *=
 * Division Assignment: /=
 * Modulus Assignment: %=
 * Exponentiation Assignment: **=
 */

// Comparison Operators
/**
 * Equal: ==
 * Strict Equal: ===
 * Not Equal: !=
 * Strict Not Equal: !==
 * Greater Than: >
 * Less Than: <
 * Greater Than or Equal: >=
 * Less Than or Equal: <=
 */

// Logical Operators
/**
 * AND: &&
 * OR: ||
 * NOT: !
 */


// nullish Coalescing Operator
/**
 * ?? (returns the right-hand operand when the left-hand operand is null or undefined)
 */

// Ternary Operator
/**
 * condition ? expressionIfTrue : expressionIfFalse
 */

// Template Literals
/**
 * `Hello, ${name}!`
 */

// Conditional Statements
// if, else if, else
// switch
const age = 0
if(age <= 0){
    console.log("You are not born yet.");
}else if(age < 13 && age >= 0){
    console.log("You are a child.");
}else if(age < 20 && age >= 13){
    console.log("You are a teenager.");
}else if(age < 30 && age >= 20){
    console.log("You are a young adult.");
}else if(age < 50 && age >= 30){
    console.log("You are a middle-aged adult.");
}else if(age < 150 && age >= 50){
    console.log("You are an old adult.");
}else{
    console.log("You are not a human.");
}

// Switch Statement
const day = "Sunday";
switch(day){
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    case "Wednesday":
        console.log("Today is Wednesday.");
        break;
    case "Thursday":
        console.log("Today is Thursday.");
        break;
    case "Friday":
        console.log("Today is Friday.");
        break;
    case "Saturday":
        console.log("Today is Saturday.");
        break;
    case "Sunday":
        console.log("Today is Sunday.");
        break;
    default:
        console.log("Invalid day.");
}

const result = 82;
switch(true) {
    case result > 80:
        console.log("A+");
        break;
    case result > 70:
        console.log("A");
        break;
    case result > 60:
        console.log("A-");
        break;
    case result > 50:
        console.log("B");
        break;
    case result > 40:
        console.log("C");
        break;
    case result > 33:
        console.log("D");
        break;
    default:
        console.log("F");
}