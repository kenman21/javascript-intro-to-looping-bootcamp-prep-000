<<<<<<< HEAD
function forLoop(array) {
  for (let i = 0; i<25; i++) {
    array.push(`I am ${i} strange loops.`); 
  }
  return array
}

function whileLoop(number) {
  while (number>0)
    console.log(--number)
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue());
  return array
  
}
  
=======

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array.push(console.log(`I am ${i} strange loop`));
}
}
>>>>>>> ea69c70283de438a18e2b199efbc3580e1c87141
