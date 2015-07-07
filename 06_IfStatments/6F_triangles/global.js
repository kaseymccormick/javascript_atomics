

//collecting input//
var userInputSides = prompt("please enter three lengths of a triangle with a space in between each length.","12 17 36");
//verifying collected correctly//
console.log("the lengths are " + userInputSides);

//spliting the string putting into array//
var sides = userInputSides.split(" ");

//taking items out of array
console.log(sides[0])
console.log(sides[1])
console.log(sides[2])

//setting variables of side to the length given
var side1 = parseInt(sides[0])
var side2 = parseInt(sides[1])
var side3 = parseInt(sides[2])

//checking first set putting to console//
if (side1 + side2 > side3){
  console.log("first test pass")
}

//checking second set putting to console//
if (side2 + side3 > side1){
  console.log("second test pass")
}

//checking third set putting to console//
if (side1 + side3 > side2){
  console.log("third test pass")
}

//if all pass alert as such//
if ((side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2)){
  alert("valid triangle")
}

//if one set fails alert to sadness gap :( //
else {
  alert("has a sadness gap, no triangle for you")
}