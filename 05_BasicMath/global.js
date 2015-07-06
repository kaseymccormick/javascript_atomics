//setting variable using a propt of the user//
var userInput1 = prompt("Please enter your first number");
var userInput2 = prompt("Please enter your second number");
var userInput3 = prompt("Please enter your third number");


//iterating the user data back in prompts and via console
alert("your numbers are" + userInput1 + userInput2 + userInput3);
console.log ("users numbers are" + userInput1 + userInput2 + userInput3);

var userNumber1 = parseInt(userInput1, 10);
var userNumber2 = parseInt(userInput2, 10);
var userNumber3 = parseInt(userInput3, 10);

var sum = (userNumber1 + userNumber2 + userNumber3);
var difference = (userNumber1 - userNumber2 - userNumber3);
console.log(userInput1 + "+" userInput2 + "+" userInput3 + "=" + sum);

console.log(userInput1 + "-" userInput2 + "-" userInput3 + "=" + (userInput1 - userInput2 - userInput3));