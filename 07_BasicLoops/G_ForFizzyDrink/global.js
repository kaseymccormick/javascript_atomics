
var bottles = 99

for (;bottles > 0;) {
    console.log(bottles + " bottles of beer in the fridge\n" + bottles + " bottles of beer!\nYou take one out, pass it around,\n")
    --bottles
    if (bottles == 1) {
      console.log(bottles + " bottles of beer in the fridge\n" + bottles + " bottle of beer in the fridge!\n" + bottles + " bottle of beer!\nYou take it out, and drink it down.")
      bottles--
    }
    if (bottles > 1) {
      console.log(bottles + " bottles of beer in the fridge!")
    }
}

