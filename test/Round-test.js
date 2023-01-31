const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Round', () => {
    let card1, card2, card3, deck, round, guess;

    beforeEach(() => {
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
        guess = 'array';
    });

    it('should be a function', () => {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of round', () => {
        expect(round).to.be.an.instanceOf(Round);
    });

    it('should store the current deck', () => {
        expect(round.deck).to.equal(deck);
    });

    it('should be able to return the current card', () => {
        expect(round.currentCard).to.equal(card1);
        expect(round.returnCurrentCard()).to.equal(card1);
    });

    it('should update the turns count when a turn is taken', () => {
        round.takeTurn(guess);

        expect(round.turns).to.equal(1);

        round.takeTurn(guess);
        round.takeTurn(guess);

        expect(round.turns).to.equal(3);
    });

    it('should record the id of incorrect guesses in an array', () => {
        round.takeTurn(guess);

        guess = 'object';

        round.takeTurn(guess);

        expect(round.incorrectGuesses).to.deep.equal([1, 2]);
    });

    it('should give feedback on the guess when a turn is taken', () => {
        expect(round.takeTurn(guess)).to.equal('incorrect!');
        expect(round.takeTurn(guess)).to.equal('correct!');
    });

    it('should be able to calculate the percent of correct answers', () => {
        round.takeTurn(guess);
        round.takeTurn(guess);

        guess = 'mutator method';

        round.takeTurn(guess);

        expect(round.calculatePercentCorrect()).to.equal(67);
    });

    it('should be able to calculate the percent of correct answers', () => {
        round.takeTurn(guess);
        round.takeTurn(guess);

        guess = 'mutator method';

        round.takeTurn(guess);

        expect(round.endRound()).to.deep.equal('** Round over! ** You answered 67% of the questions correctly!');
    });
});