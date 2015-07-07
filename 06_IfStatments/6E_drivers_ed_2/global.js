var userInputAge = prompt("how old are you?");
console.log("user is " + userInputAge + " years old");

var userAge = parseInt(userInputAge)
console.log("user is " + userAge + " years old");


if (userAge >= 25) {
  console.log("You can rent a car")
} 

else if ( 24 >= userAge && userAge >= 21) {
  console.log("Please don't drink and drive");
}

else if ( 20 <= userAge && userAge >= 16) {
  console.log("You're eligible for a driver's license");
}

else if (15 >= userAge && userAge > 0){
  console.log("You can't drive yet, but you'll be able to in a few years");
}

else if (isNaN(userAge) == true) {
  alert("Sorry, that's not a number")
}

else if (userAge <= 0){
  console.log("User is not born yet... ");
}

else if (userAge === 0){
  console.log("user is just a baby");
}

