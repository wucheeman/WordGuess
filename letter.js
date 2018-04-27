// @ts-check
// This turns on type checking in VS Code

const Letter = function(letter) {
  this.letter = letter;
  this.placeholder = '_';
  this.guessed = false;
  this.getDisplayLetter = function() {
    if (this.guessed) {
      return this.letter;
    }
    return this.placeholder;
  };
  this.checkGuess = function(guess) {
    if (this.letter === guess) {
      this.guessed = true;
    }
  };
}
module.exports = Letter;