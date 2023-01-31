const data = require('./data');
const util = require('./util');

const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound = undefined;
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
    
    this.currentRound = newRound;
    
    this.printMessage(this.currentRound.deck);
    this.printQuestion(this.currentRound);
  };
};

module.exports = Game;