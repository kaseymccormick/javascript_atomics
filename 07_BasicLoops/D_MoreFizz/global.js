
start = parseInt(prompt("what number should i start counting from?", "2"),10);
console.log("starting at " + start )

end = parseInt(prompt("what number am I stopping at?", "20"),10);
console.log("ending at " + end)

while (start < end) {
  if (start % 3 == 0 && start % 5 == 0) {
    console.log ("FizzBuzz")
  } else if (start % 3 == 0) {
    console.log ("Fizz")
  } else if (start % 5 == 0) {
    console.log ("Buzz")
  } else {
    console.log(start)
  }
  start += 1
}