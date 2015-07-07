

var password="timey wimey"
while (passwordGuess !== password) {
    var passwordGuess = prompt("password needed, please enter password", "enter password guess here");
    if(passwordGuess === password){
      alert("you guessed the password!");
    }
  }
   