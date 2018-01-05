// What is printed as a result of the following code? You must show your work
// and explain your thinking or else receive 0 points.

var g = f(10);
console.log( g() );
console.log( g() );
console.log( g() );

function f(start){
  var counter = start;
  return function(){
    counter++;
    return counter;
  }
}

// Answer:
you will be adding 1 to the var g since your created a function with and incrementor ++ if we console log
we should get 11-12-13 since f function will start at 10
