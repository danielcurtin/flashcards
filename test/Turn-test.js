const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
    let card, turn;

    beforeEach(() => {
        card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        turn = new Turn(card, 'array');
    });

    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', () => {
        expect(turn).to.be.an.instanceOf(Turn);
    });

    it('should store a guess and a card', () => {
        expect(turn.currentCard).to.equal(card);
        expect(turn.guess).to.equal('array');
    });

    it('should be able to return the guess', () => {
        const guess = turn.returnGuess();

        expect(guess).to.equal('array');
    });

    it('should be able to return the card', () => {
        expect(turn.currentCard).to.equal(card);
    });

    it('should be able to check if the guess is correct', () => {
        expect(turn.evaluateGuess()).to.equal(false);

        turn = new Turn(card, 'object');

        expect(turn.evaluateGuess()).to.equal(true);
    });

    it('should give feedback on the guess', () => {
        expect(turn.giveFeedback()).to.equal('incorrect!');

        turn = new Turn(card, 'object');

        expect(turn.giveFeedback()).to.equal('correct!');
    });
});