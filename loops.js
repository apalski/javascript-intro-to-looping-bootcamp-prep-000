function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    (i == 1) ? array.push("I am 1 strange loop.") : array.push("I am ${i} strange loops.");
  }
  return array;
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number);
  }
  return "done";
}
function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do {
    console.log("doo-bee-doo-bee-doo");
  }
  while (array.length > 0 && maybeTrue());
  array.shift();
  return array;
}
