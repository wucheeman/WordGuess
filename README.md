# Word Guess!

## What the project does
This is an implementation of the Word Guess game, done as homework for the February 2018 UNC Coding Boot Camp. It is a variant of Hangman, except without a corpse at the end if you guess wrong too many times.

## How to get started with the game
To enjoy searching with Liri, you must have Node.js installed on your computer. Once that tasks are done, download the application from GitHub and open a terminal window in the same directory. The command prompt is shown as '$'. Enter:

  $ npm install

NPM will install required modules. After this is completed, you're ready to go! Enter:

  $ node index.js

and start guessing. Word Guess will only accept single letters; no numbers or symbols, please. The game ends after guessing the entire word or making three incorrect guesses. Repeated guesses of the same letter are treated as incorrect. If you'd like to have more guesses before losing, edit the variable 'Game.numGuesses' in index.js to whatever value suits you best.

## Authors
This game was built and will be maintained by Mark Hainline. Help should not be needed, and will not be available.
