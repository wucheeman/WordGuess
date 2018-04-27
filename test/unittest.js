// crude unit tests for Word Guess game

// INITIALILZATIONS
//==========================================================================
//
const Letter = require('../letter.js');
const Word = require('../word.js');

// LETTER UNIT TESTS
//==========================================================================
/*
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

// WORD UNIT TESTS
//==========================================================================
//
const mysteryWord = new Word ('cat');
console.log(mysteryWord);
console.log('');

console.log('Accessing mysteryWord.letterArray');
console.log("Expected: c, a, t; actual: " +
             mysteryWord.letterArray[0].letter + ', ' +
             mysteryWord.letterArray[1].letter + ', ' +
             mysteryWord.letterArray[2].letter );
console.log('');

console.log('Calling mysteryWord.checkUserGuess(a)');
const testLetterOne = new Letter('a');
console.log("Expected: true; actual: " + mysteryWord.checkUserGuess(testLetterOne));
console.log('Calling mysteryWord.checkUserGuess(z)');
const testLetterTwo = new Letter('z')
console.log("Expected: false; actual: " + mysteryWord.checkUserGuess(testLetterTwo));
console.log('');

console.log('Testing for word with two of the same letter');
const doubleEWord = new Word ('evidence');
console.log(doubleEWord);
const testLetterThree = new Letter('e')
console.log("Expected: true; actual: " + doubleEWord.checkUserGuess(testLetterThree));
console.log('');