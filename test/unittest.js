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

const mysteryWord = new Word ('cat');
console.log(mysteryWord);
console.log('');
console.log('Calling mysteryWord.makeLetterArray');
mysteryWord.makeLetterArray();
console.log('Accessing mysteryWord.letterArray');
console.log("Expected: c, a, t; actual: " +
             mysteryWord.letterArray[0].letter + ', ' +
             mysteryWord.letterArray[1].letter + ', ' +
             mysteryWord.letterArray[2].letter );
console.log('');