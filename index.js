// @ts-check
// This turns on type checking in VS Code

const inquirer = require('inquirer');
const wordMaker = require('./word.js');
// TODO (future)
// npm install random-words - package generating a random word

const dictionary = ['cat', 'activities', 'sleep', 'studying', 'eating', 'drinking', 'walk', 'running', 'swimming', 'fly', 'drive', 'listen', 'thinking', 'sneezing', 'cough', 'disagree', 'diving', 'skiing', 'sledding', 'climb', 'bat', 'battlement', 'lemming', 'zebra', 'automobile', 'computer', 'shown', 'background', 'game', 'mother', 'all', 'showcase', 'essentially', 'elements', 'modern', 'personal', 'computing', 'including', 'mouse', 'windows', 'video', 'conferencing', 'organizing', 'talent', 'behind', 'famous', 'polymath', 'two', 'inventors', 'calculus', 'area', 'critical', 'study', 'magnetism', 'binary', 'numbers', 'electricity', 'phosphorescence', 'programming', 'found', 'company', 'later', 'grew', 'produced', 'tabulating', 'machinery', 'process',' data', 'record', 'punched', 'cards', 'direct', 'precursor', 'important', 'way', 'compiling', 'railroad', 'timetable', 'census', 'counting', 'vote', 'congress', 'controlling', 'immigration', 'quotas', 'running', 'factory', 'mathematician', 'cryptographer', 'language', 'complete', 'hogwash', 'specialized', 'code', 'break', 'incomprehensible', 'infinite', 'paper', 'tapes', 'many', 'people', 'enjoy', 'without', 'knowing', 'debt', 'apple', 'bell', 'one', 'foremost', 'pioneers', 'control', 'weaving', 'looms', 'art', 'works', 'draft', 'soldiers', 'canal', 'gates', 'history', 'analytic', 'engine', 'intended', 'numbers', 'play', 'solitaire', 'ballistic', 'trajectories', 'money', 'trained', 'poet', 'foresaw', 'virtual', 'accident', 'fundamental', 'architecture', 'manage', 'early', 'projects'];

const randomWord = () => {
  var randomIndex=Math.floor(Math.random() * dictionary.length);
  return dictionary[randomIndex];
}

const Game = function() {
  this.word = {};
  this.numGuesses = 3; // TODO set to 10 for game
  this.gameOver = false;
  this.alreadyGuessed = [];
  this.makeWordObject = function() {
    this.word = new wordMaker(randomWord());
    // console.log(this.word.word);
    // uncomment line above for UI test
  };
  this.playGame = function() {
    // main loop of the game
    const that = this; // TODO: (future) use a less smelly fix to the scope issue
    if (!this.gameOver ) {
      console.log(' ' + this.word.currentDisplayState + '\n');
      inquirer
        .prompt([{
          type: 'input',
          message: 'Guess a letter. You have ' + this.numGuesses + ' bad guesses left.\n\n',
          name: 'guess'
        }])
        .then(function(inquirerResponse) {
          let guess = inquirerResponse.guess.trim();
          guess = that.validateAndNormalize(guess);
          if (!guess) {
            console.log('\nI only accept single letters as input!\n');
            that.updateAfterBadGuess();
          } else {
            if (that.alreadyGuessed.includes(guess)) {
              console.log('\nYou guessed that already!\n');
              that.updateAfterBadGuess();
            } else {
              that.alreadyGuessed.push(guess);
              const guessOutcome = that.word.checkUserGuess(guess);
              if (guessOutcome) {
                that.word.updateDisplayState();
                if (that.word.checkIfFullyGuessed()) {
                  console.log(' ' + that.word.currentDisplayState);
                  console.log("\nCongrats! You've guessed the word!");
                  that.gameOver = true;
                } else {
                  that.playGame(); // recursion
                }
              } else {
                console.log('\nThat letter is not in the word!\n');
                that.updateAfterBadGuess();
              }
            } // end of else that processes first time letter is guessed
          } // end of else input is valid processing loop KEEP
        }); // end of .then callback
    } // end of if game not over loop
  }; // end of playGame method
  this.updateAfterBadGuess = function() {
    this.numGuesses--;
    if (this.numGuesses === 0) {
      console.log('Sorry, you have run out of guesses!');
      this.gameOver = true;
    } else {
      this.playGame(); // recursion
    }
  };
  this.validateAndNormalize = function(guess) {
    // rejects multiple characters
    const alphabet = /[a-z]/;
    guess = guess.toLowerCase();
    if (alphabet.test(guess) && guess.length == 1) {
      return guess;
    } else {
      return ('');
    }
  };
  this.makeWordObject();
} // end of Game
// uncomment when needed for unit test
// module.exports = Game;

// comment out when unit testing
const game = new Game();
game.playGame();
