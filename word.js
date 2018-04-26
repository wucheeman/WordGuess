/*
**HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)
*/

const Letter = require('./letter.js');

const Word = function(word) {
  this.word = word; // not sure if this is needed
  this.makeLetterArray = function(word) {
    // creates array of Letter objects matching word
  };
  this.letterArray = this.makeLetterArray(word);
  this.getWord = function() {
    // calls each letter object's getDisplayLetter() and concatenates the response.
  };
  this.displayStateOfGame = function() {
    // returns concatentated response from this.getWord
  }; 
  this.checkUserGuess = function(letter) {
    // checks user guess using each Letter
  };
}
module.exports = Word;