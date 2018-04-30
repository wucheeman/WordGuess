// @ts-check
// This turns on type checking in VS Code

/*
**HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)
*/

const Letter = require('./letter.js');

const Word = function(word) {
  this.word = word; // not sure if this is needed
  this.letterArray = [];
  this.currentDisplayState = '';
  this.makeLetterArray = function() {
    // creates array of Letter objects matching word
    for (let letter of this.word) {
      let letterObj = new Letter(letter);
      this.letterArray.push(letterObj);
    }
    this.updateDisplayState();
  };
  this.updateDisplayState = function() {
    this.currentDisplayState = '';
    for (let letterObject of this.letterArray) {
      this.currentDisplayState = this.currentDisplayState +
                                 letterObject.getDisplayLetter() + ' ';
    }
  };
  this.checkUserGuess = function(letter) {
    let outcome = false;
    for (let letterObject of this.letterArray) {
      // console.log('letter is ' + letter + "letterObject.letter is " + letterObject.letter);
      if (letterObject.letter === letter) {
        letterObject.guessed = true;
        outcome = true;
        this.updateDisplayState();
        return outcome;
      }
    }
    return outcome;
  };
  this.makeLetterArray();
}
module.exports = Word;