// Define a function
function func1 () {
    console.log("Hello, World!");
    console.log("Hello, universe!");
}

// call the function
func1();
func1();

// return
function func2 () {
    return "This is another message";
    console.log("This code will not work");
}

console.log(func2());

// Define a function with parameters
function func3 (name = "World") {
    return  "Hello, " + name + "!";
}

console.log(func3("Alice"));
console.log(func3("Bob"));
console.log(func3());

// Define a function with multiple parameters
function func4 (name = "World", age = 0) {
    return "Hello, " + name + "! You are " + age + " years old.";
}

console.log(func4("Alice", 30));
console.log(func4("Bob", 25));
console.log(func4());
console.log(func4("David"));

// Define a function expression
const func5 = function () {
    return "Hello, world!";
}
console.log(func5());

// Define an arrow function
const func6 = () => {
    return "Hello, world!";
}
console.log(func6());

// Define an arrow function with parameters
const func7 = name =>  name;
console.log(func7("Alice"));

// hoisting example
console.log(func8()); // This will work due to hoisting
function func8() {
    return "Hello, world!";
}

// recursion example
const factorial = n => {
    if (n <= 1) {
        return 1;
    }
    return  n * factorial(n - 1);
}

console.log(factorial(5)); 

// recursion example with zero to nine
const zero2nine = (n = 0) => {
    if (n > 9) {
        return;
    }
    console.log(n);
    zero2nine(n + 1);
}
zero2nine(); // This will print numbers from 0 to 9

// Callback function example
const greet = (name, callback) => {
    console.log("Hello, " + name + "!");
    callback();
}

const farewell = () => {
    console.log("Goodbye!");
}

greet("Alice", farewell); 
greet("Bob", () => {
    console.log("See you later!");
});
