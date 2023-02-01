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
    this.currentRound = this.createRound();
    this.printMessage(this.currentRound.deck);
    this.printQuestion(this.currentRound);
  };
  
  createRound() {
    return new Round(this.createDeck());
  };
    
  createDeck() {
    return new Deck(this.createCards());
  };
    
  createCards() {
    return data.prototypeData.map(element => new Card(element.id, element.question, element.answers, element.correctAnswer));
  };
};

module.exports = Game;