const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');


describe('Game', () => {
    let game;

    beforeEach(() => {
        game = new Game();
    });

    it('should be a function', () => {
        expect(Game).to.be.a('function');
    });

    it('should be an instance of Game', () => {
        expect(game).to.be.an.instanceOf(Game);
    });

    it('should be able to keep track of the current round', () => {
        expect(game).to.have.property('currentRound');
    });

    it('should be able to make new cards', () => {
        game.createCards().forEach(card => expect(card).to.be.an.instanceOf(Card));
    });

    it('should be able to make a new deck', () => {
        expect(game.createDeck()).to.be.an.instanceOf(Deck);
    });

    it('should be able to start a new round', () => {
        expect(game.createRound()).to.be.an.instanceOf(Round);
    });
});
