// Define variable
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "orange", "guvava"];
// Test for Equality and inequality with string
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple");
console.log(apple != "apple");
// Tests using Lowercase function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numerical testes
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
//Not equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
// Greater than
console.log("\nIs ten is greater than zero");
console.log(ten > 0);
// Less than
console.log("\nIs twenty is less than 10");
console.log(twenty < 10);
// Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);
// Less than or equal to
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty <= 10);
// tests using "and" & "or" operators
// Using && (and)
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// Using || (OR)
console.log("\ntwenty is greater than is 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\ntwenty is greater than is 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 != 20);
// Test weather an item is include in array
console.log("\nIs Orange include my fruits array");
console.log(fruits.includes("orange"));
console.log("\nIs Orange not include my fruits array");
console.log(!fruits.includes("orange"));
