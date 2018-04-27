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
// console.log(mysteryWord);
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

console.log('Testing mysteryWord.getWord(c)');
const letterC = new Letter('c');
mysteryWord.checkUserGuess(letterC);
console.log("Expected: c _ _ ; actual: " +  mysteryWord.currentDisplayState);
console.log('Testing mysteryWord.getWord(t)');
const letterT = new Letter('t');
mysteryWord.checkUserGuess(letterT);
console.log("Expected: c _ t ; actual: " +  mysteryWord.currentDisplayState);
const letterA = new Letter('a');
mysteryWord.checkUserGuess(letterA);
console.log("Expected: c a t ; actual: " +  mysteryWord.currentDisplayState);
console.log("");

console.log('Testing again for word with two of the same letter');
console.log("Testing starting display state: " +  doubleEWord.currentDisplayState);
doubleEWord.checkUserGuess(letterC);
console.log("Guessing letter c: " +  doubleEWord.currentDisplayState);
const letterE = new Letter('e');
doubleEWord.checkUserGuess(letterE);
console.log("Guessing letter e: " +  doubleEWord.currentDisplayState);
mysteryWord.checkUserGuess(letterT);
console.log("Guessing letter t: " +  doubleEWord.currentDisplayState);
mysteryWord.checkUserGuess(letterA);
console.log("Guessing letter a: " +  doubleEWord.currentDisplayState);
const letterN = new Letter('n');
doubleEWord.checkUserGuess(letterN);
console.log("Guessing letter n: " +  doubleEWord.currentDisplayState);
const letterV = new Letter('v');
doubleEWord.checkUserGuess(letterV);
console.log("Guessing letter v: " +  doubleEWord.currentDisplayState);
const letterI = new Letter('i');
doubleEWord.checkUserGuess(letterI);
console.log("Guessing letter i: " +  doubleEWord.currentDisplayState);
const letterD = new Letter('d');
doubleEWord.checkUserGuess(letterD);
console.log("Guessing letter d: " +  doubleEWord.currentDisplayState);
console.log('');
