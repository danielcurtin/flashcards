const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');
const { prototype } = require('mocha');

class Game {
  constructor(currentRound) {
    this.currentRound = currentRound;
  };

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  };

  printQuestion(round) {
      util.main(round);
  };

  start() {
    const newCards = data.prototypeData.map((element) => {
      return new Card(element.id, element.question, element.answers, element.correctAnswer);
    });
    const newDeck = new Deck(newCards);
    const newRound = new Round(newDeck);

    this.printMessage(newRound.deck);
    this.printQuestion();
  };
};

module.exports = Game;