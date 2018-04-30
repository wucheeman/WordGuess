// @ts-check
// This turns on type checking in VS Code

// require inpuirer
const inquirer = require('inquirer');
const wordMaker = require('./word.js');
// npm install random-words - package generating a random word

// Create dictionary
// TODO: extend dictionary
// TODO: use file to hold big dictionary or try random-word
// console.log(randomWords());
const dictionary = ['cat'];

const Game = function(dictionary) { // remove dictionary as argument?
  this.dictionary = dictionary;
  this.word = {};
  this.numGuesses = 3; // TODO set to 10 for game
  this.gameOver = false;
  this.makeWordObject = function() {
    // makes an object using Word for this round of the game
    // TODO make this a random pick
    this.word = new wordMaker(dictionary[0]);
    //console.log(this.word);
  };
  this.playGame = function() {
    // main loop of the game
    const that = this; // TODO: use a less smelly fix to the scope issue
    if (!this.gameOver ) {
      console.log(' ' + this.word.currentDisplayState);
      inquirer
      .prompt([{
        type: 'input',
        message: 'Guess a letter please',
        name: 'guess'
      }])
      .then(function(inquirerResponse) {
        let guess = inquirerResponse.guess.trim();
        guess = that.validateAndNormalize(guess);
        if (!guess) {
          console.log('Please input a single letter only');
          // TODO: refactor; not DRY
          that.numGuesses--;
          console.log(that.numGuesses);
          if (that.numGuesses === 0) {
            console.log('Sorry, you have run out of guesses!');
            that.gameOver = true;
          } else {
            that.playGame(); // recursion
          }
        } else {
          const guessOutcome = that.word.checkUserGuess(guess);
          console.log(guessOutcome);
          if (guessOutcome) {
            that.word.updateDisplayState();
            if (that.word.checkIfFullyGuessed()) {
              console.log(' ' + that.word.currentDisplayState);
              console.log("Congrats! You've guessed the word!");
              that.gameOver = true;
            }
          } else {
            that.numGuesses--;
            console.log(that.numGuesses);
          }
          if (that.numGuesses === 0) {
              console.log('Sorry, you have run out of guesses!');
              that.gameOver = true;
          } else {
            that.playGame(); // recursion
          }
        } // end of else input is valid processing loop KEEP
      }); // end of .then callback
    } // end of if game not over loop
  }; // end of playGame method
  this.validateAndNormalize = function(guess) {
    // rejects multiple characters
    const alphabet = /[a-z]/;
    guess = guess.toLowerCase();
    // console.log('the input is normalized to: ' + guess);
    // console.log('alphabet.test(guess) says ' + alphabet.test(guess));
    if (alphabet.test(guess) && guess.length == 1) {
      return guess;
    } else {
      return ('');
    }
  };
  this.updateDisplay = function() {
    // updates display after each letter has been guessed
    // TODO: unused: delete?
    console.log('this.word');
  };
  this.makeWordObject();
} // end of Game
// TODO: remove when unit test is complete
//module.exports = Game;

const game = new Game(dictionary); // remove dictionary as argument
game.makeWordObject();
game.playGame();

// RESUME: reject input with multiple characters
