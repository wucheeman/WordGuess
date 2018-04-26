// crude unit tests for Word Guess game

const Letter = require('../letter.js');
console.log(typeof Letter);

const letter = new Letter('a');
console.log(letter);
console.log();

console.log("Calling letter.getLetter()");
console.log("Expected: _ ; actual: " + letter.getLetter() + '\n');

console.log("Calling letter.checkGuess('b')");
letter.checkGuess('b');
console.log("Calling letter.getLetter()");
console.log("Expected: _ ; actual: " + letter.getLetter() + '\n');

console.log("Calling letter.checkGuess('a')");
letter.checkGuess('a');
console.log("Calling letter.getLetter('a')");
console.log("Expected: a ; actual: " + letter.getLetter() + '\n');