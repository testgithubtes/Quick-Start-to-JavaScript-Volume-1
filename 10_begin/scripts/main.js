/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var favAnimal = prompt("what is your fav animal?");
if (favAnimal === "cat"){
  alert("Cats are cute");
}
else if(favAnimal === "dog"){
  alert("Dogs are awesome");
}
else {
  alert("your choose "+favAnimal+" is good");
}

var randomNumber = Math.round(Math.random()*5);
if(randomNumber %3 === 0){
  alert("fizz");
}
else if(randomNumber %5 === 0){
  alert("buzz");
}
else {
  console.log(randomNumber);
}