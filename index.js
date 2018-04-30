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
  this.numGuesses = 3; // increase for testing; set to 10 for game?
  this.gameOver = false;
  this.makeWordObject = function() {
    // makes an object using Word for this round of the game
    // TODO make this a random pick
    this.word = new wordMaker(dictionary[0]);
    console.log(this.word);
  }
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
        const guess = inquirerResponse.guess.trim();
        // need to validate and normalize user guess
        // TODO: this is causing the game to loop infinitely, fix
        // if (!letter) {
        //   // ask again
        // } else {
          const guessOutcome = that.word.checkUserGuess(guess);
          console.log(guessOutcome);
          if (guessOutcome) {
            that.word.updateDisplayState();
          } else {
            that.numGuesses--;
            console.log(that.numGuesses);
          }
          if (that.numGuesses === 0) {
              console.log('Sorry, you have run out of guesses!');
              that.gameOver = true
          } else {
            that.playGame(); // recursion
          }
//      }; end of commented-out if... else delete?
      });
    }; // end of if loop
  }; // end of playGame method
  this.updateDisplay = function() {
    // updates display after each letter has been guessed
    console.log('this.word');
  };
  this.makeWordObject();
} // end of Game

const game = new Game(dictionary); // remove dictionary as argument
game.makeWordObject();
game.playGame();


// RESUME
// build inquirer prompt, then show word and obscured word on screen, then get the loop going



