/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

alert("it is the zombie apocalypse.You are looting a store and suddenly a zombie bursts through the door!");
// declaration variable
var weapon = prompt("Choose your weapon");
var randomNumber = Math.round(Math.random());
alert("you attack the zombie with "+weapon);

if(randomNumber === 0){
  alert("Zombie bites you,Sorry you lose!!!")
} else if (randomNumber === 1){
  alert("You win,nice choose of weapon "+weapon);
}