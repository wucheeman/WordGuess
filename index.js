// @ts-check
// This turns on type checking in VS Code

// require inpuirer
const inquirer = require('inquirer');
// require Word
// npm install random-words - package generating a random word

// Create dictionary
// TODO: extend dictionary
// TODO: use file to hold big dictionary or try random-word
// console.log(randomWords());
const dictionary = ['cat'];

const Game = function(dictionary) {
  this.dictionary = dictionary;
  this.word = this.dictionary[0]; // TODO make this a random pick from dictionary
  this.numGuesses = 5;
  this.gameOver = false;
  this.updateDisplay = function() {
    // updates display after each letter has been guessed
    // TODO
  };
  this.playGame = function() {
    // main loop of the game
    const that = this;
    if (!this.gameOver ) {
      inquirer
      .prompt([{
        type: 'input',
        message: 'Guess a letter please',
        name: 'letter'
      }])
      .then(function(inquirerResponse) {
        const letter = inquirerResponse.letter.trim();
        // need to validate and normalize user input
        // TODO: this is causing the game to loop infinitely, fix
        // if (!letter) {
        //   // ask again
        // } else {
          // TODO: build required functionality to replace this scaffolding
          that.numGuesses--;
          console.log(letter, that.numGuesses);
          if (that.numGuesses === 0) {
            console.log('Sorry, you have run out of guesses!');
            that.gameOver = true
          } else {
            that.playGame(); // recursion
          }
//      };
      });
    }; // end of if loop
  }; // end of playGame()
} // end of Game

const game = new Game(dictionary);
game.playGame();


// RESUME
// build inquirer prompt, then show word and obscured word on screen, then get the loop going



