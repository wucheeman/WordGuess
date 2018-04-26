/*

**HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)

*/
const Letter = function(letter) {
  this.letter = letter;
  this.placeholder = '_';
  this.guessed = false;
  this.getLetter = function() {
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

// function Letter(letter) {
//   this.letter = letter;
//   this.placeholder = '_';
//   this.guessed = false;
//   this.getLetter = function() {
//     if (this.guessed) {
//       return this.letter;
//     }
//     return this.placeholder;
//   };
//   this.checkGuess = function(guess) {
//     if (this.letter === guess) {
//       this.guessed = true;
//     }
//   };
// }