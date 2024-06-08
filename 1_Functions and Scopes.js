// Question 1: Anonymous Function
// Write an anonymous function that takes two numbers as parameters and returns their sum.

/* We have to write the code for a function which will take two parameters 
    1. num 
    2. num 

    Operations: Addition of those numbers 
*/ 

var sum = function( a, b ){
       return a + b; 
} ; // sum will hold the addition of 2 numbers which are given as parameters

console.log( sum( 10, 50 ));        // output: 60

// Question 2: IIFE Function
// Write an IIFE (Immediately Invoked Function Expression) that prints "Hello, World!" to the console.
( function(){
    console.log("Hello World!");
} )();


// Question 3: Scope - Global and Local
// Write a function that demonstrates the concept of global and local scope. 
// The function should have a local variable and a global variable, and it should print 
// their values.

var globalVariable = "Global Variable Value "; 

function scopeDemo() {
    var localVariable = "Local Vriable Value ";
    console.log(globalVariable);
    console.log(localVariable);
}
scopeDemo();

// Question 4: Anonymous Function as a Parameter
// Write a function that takes an anonymous function as a parameter and invokes it.



// Question 5: IIFE Returning a Value
// Write an IIFE that returns the square of a number and assign the result to a variable.



// Question 6: Arrow functions
// Define an arrow function that returns the cube of a number and assign the returned 
// value to a variable.

// Solution 1 
var function_cube = (num) => {
    return num*num*num ;
}
console.log(function_cube(3)) ;

// Updated solution 1 
var numb = 3;

var cube = (numb) => {
    return numb * numb * numb;
}

console.log(cube); // output 27 

// solution 2 
var number = 6;
var cube = number => number * number * number;
console.log(cube(number)); // output: 216