function add(first, second, callback) {
  console.log(first + second);
  // Fire the function that has been passed
  // Only fire callback if it was passed
  if(callback) {
    callback();
  }
}

/*
add(2,3, function() {
  console.log("done");
});
add(4,5, function() {
  console.log("done again");
});
*/

add(2, 3, logDone);
add(4,5);

// auch: if(callback) {callback();}
function logDone() {
  console.log("done");
}
