// crude unit tests for Word Guess game

// INITIALILZATIONS
//==========================================================================
//
const Letter = require('../letter.js');
const Word = require('../word.js');
const Game = require('../index.js');

// LETTER UNIT TESTS
//==========================================================================

// console.log(typeof Letter);

// const letter = new Letter('a');
// console.log(letter);
// console.log();

// console.log("Calling letter.getDisplayLetter()");
// console.log("Expected: _ ; actual: " + letter.getDisplayLetter() + '\n');

// console.log("Calling letter.checkGuess('b')");
// letter.checkGuess('b');
// console.log("Calling letter.getDisplayLetter()");
// console.log("Expected: _ ; actual: " + letter.getDisplayLetter() + '\n');

// console.log("Calling letter.checkGuess('a')");
// letter.checkGuess('a');
// console.log("Calling letter.getDisplayLetter('a')");
// console.log("Expected: a ; actual: " + letter.getDisplayLetter() + '\n');


// WORD UNIT TESTS
//==========================================================================
//
const mysteryWord = new Word ('cat');
// console.log(mysteryWord);
console.log('');

// console.log('Accessing mysteryWord.letterArray');
// console.log("Expected: c, a, t; actual: " +
//              mysteryWord.letterArray[0].letter + ', ' +
//              mysteryWord.letterArray[1].letter + ', ' +
//              mysteryWord.letterArray[2].letter );
// console.log('');

// console.log('Calling mysteryWord.checkUserGuess(a)');
// const testLetterOne = new Letter('a');
// console.log("Expected: true; actual: " + mysteryWord.checkUserGuess(testLetterOne.letter));
// console.log('Calling mysteryWord.checkUserGuess(z)');
// const testLetterTwo = new Letter('z')
// console.log("Expected: false; actual: " + mysteryWord.checkUserGuess(testLetterTwo.letter));
// console.log('');

// console.log('Testing for word with two of the same letter');
const doubleEWord = new Word ('evidence');
// console.log(doubleEWord);
// const testLetterThree = new Letter('e')
// console.log("Expected: true; actual: " + doubleEWord.checkUserGuess(testLetterThree.letter));
// console.log('');

// console.log('Testing mysteryWord.getWord(c)');
// const letterC = new Letter('c');
// mysteryWord.checkUserGuess(letterC.letter);
// console.log("Expected: c _ _ ; actual: " +  mysteryWord.currentDisplayState);
// console.log('Testing mysteryWord.getWord(t)');
// const letterT = new Letter('t');
// mysteryWord.checkUserGuess(letterT.letter);
// console.log("Expected: c _ t ; actual: " +  mysteryWord.currentDisplayState);
// const letterA = new Letter('a');
// mysteryWord.checkUserGuess(letterA.letter);
// console.log("Expected: c a t ; actual: " +  mysteryWord.currentDisplayState);
// console.log("");

// console.log('Testing again for word with two of the same letter');
// console.log("Testing starting display state: " +  doubleEWord.currentDisplayState);
// const letterC = new Letter('c');
// doubleEWord.checkUserGuess(letterC.letter);
// console.log("Guessing letter c: " +  doubleEWord.currentDisplayState);
// const letterE = new Letter('e');
// doubleEWord.checkUserGuess(letterE.letter);
// console.log("Guessing letter e: " +  doubleEWord.currentDisplayState);
// const letterT = new Letter('t');
// mysteryWord.checkUserGuess(letterT.letter);
// console.log("Guessing letter t: " +  doubleEWord.currentDisplayState);
// const letterA = new Letter('a');
// mysteryWord.checkUserGuess(letterA.letter);
// console.log("Guessing letter a: " +  doubleEWord.currentDisplayState);
// const letterN = new Letter('n');
// doubleEWord.checkUserGuess(letterN.letter);
// console.log("Guessing letter n: " +  doubleEWord.currentDisplayState);
// const letterV = new Letter('v');
// doubleEWord.checkUserGuess(letterV.letter);
// console.log("Guessing letter v: " +  doubleEWord.currentDisplayState);
// const letterI = new Letter('i');
// doubleEWord.checkUserGuess(letterI.letter);
// console.log("Guessing letter i: " +  doubleEWord.currentDisplayState);
// const letterD = new Letter('d');
// doubleEWord.checkUserGuess(letterD.letter);
// console.log("Guessing letter d: " +  doubleEWord.currentDisplayState);
// console.log('');

// console.log('Setting up test of checkIfFullyGuessed');
// mysteryWord.letterArray[0].guessed = false;
// mysteryWord.letterArray[1].guessed = false;
// mysteryWord.letterArray[2].guessed = true;
// console.log("Expected: false; actual: " + mysteryWord.checkIfFullyGuessed());
// console.log('');

// console.log('Setting up 2nd test of checkIfFullyGuessed');
// mysteryWord.letterArray[0].guessed = true;
// mysteryWord.letterArray[1].guessed = false;
// mysteryWord.letterArray[2].guessed = true;
// console.log("Expected: false; actual: " + mysteryWord.checkIfFullyGuessed());
// console.log('');

// console.log('Setting up 3rd test of checkIfFullyGuessed');
// mysteryWord.letterArray[0].guessed = true;
// mysteryWord.letterArray[1].guessed = true;
// mysteryWord.letterArray[2].guessed = true;
// console.log("Expected: true; actual: " + mysteryWord.checkIfFullyGuessed());
// console.log('');

// GAME UNIT TESTS
//==========================================================================
// 

// *** REQUIRES that index.js be updated:
//      - comment out code at bottom file that starts game up
//      - adds 'module.exports = Game' at bottom of file

let game = new Game();

// console.log('Test #1 of random word generation. The next word is ' + game.word.word)
// game = new Game();
// console.log('Test #2 of random word generation. The next word is ' + game.word.word)
// game = new Game();
// console.log('Test #3 of random word generation. The next word is ' + game.word.word)
// game = new Game();
// console.log('Test #4 of random word generation. The next word is ' + game.word.word)
// game = new Game();
// console.log('Test #5 of random word generation. The next word is ' + game.word.word)
// game = new Game();
// console.log('Test #6 of random word generation. The next word is ' + game.word.word)
// game = new Game();
// console.log('Test #7 of random word generation. The next word is ' + game.word.word)
// game = new Game();
// console.log('Test #8 of random word generation. The next word is ' + game.word.word)
// game = new Game();
// console.log('Test #9 of random word generation. The next word is ' + game.word.word)
// game = new Game();
// console.log('Test #10 of random word generation. The next word is ' + game.word.word)



console.log('Testing validateAndNormalize(a)');
console.log('Expected: a; actual: ' + game.validateAndNormalize('a'));
console.log('Testing validateAndNormalize(A)');
console.log('Expected: a; actual: ' + game.validateAndNormalize('A'));
console.log('Testing validateAndNormalize(m)');
console.log('Expected: m; actual: ' + game.validateAndNormalize('m'));
console.log('Testing validateAndNormalize(X)');
console.log('Expected: x; actual: ' + game.validateAndNormalize('X'));
console.log('Testing validateAndNormalize(1)');
console.log('Expected: \'\'; actual: ' + game.validateAndNormalize('1'));
console.log('Testing validateAndNormalize(,)');
console.log('Expected: \'\'; actual: ' + game.validateAndNormalize(','));