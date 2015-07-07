

var number="73"
while (numberGuess !== number) {
    var numberGuess = prompt("Best number needed, please enter you're answer of best number", "ask Shelly");
    if(numberGuess === number){
      alert("You knew that: 'The best number is 73. Why? 73 is the 21st prime number. Its mirror, 37, is the 12th and its mirror, 21, is the product of multiplying 7 and 3... and in binary 73 is a palindrome, 1001001, which backwards is 1001001.'");
    }
  }
   