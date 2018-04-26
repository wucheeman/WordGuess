// crude unit tests for Word Guess game

// LETTER UNIT TESTS
//==========================================================================
/*
const Letter = require('../letter.js');
console.log(typeof Letter);

const letter = new Letter('a');
console.log(letter);
console.log();

console.log("Calling letter.getDisplayLetter()");
console.log("Expected: _ ; actual: " + letter.getDisplayLetter() + '\n');

console.log("Calling letter.checkGuess('b')");
letter.checkGuess('b');
console.log("Calling letter.getDisplayLetter()");
console.log("Expected: _ ; actual: " + letter.getDisplayLetter() + '\n');

console.log("Calling letter.checkGuess('a')");
letter.checkGuess('a');
console.log("Calling letter.getDisplayLetter('a')");
console.log("Expected: a ; actual: " + letter.getDisplayLetter() + '\n');
*/

// LETTER UNIT TESTS
//==========================================================================

const Word = require('../word.js');
console.log(typeof Word);

const word = new Word('cat');
console.log(word);