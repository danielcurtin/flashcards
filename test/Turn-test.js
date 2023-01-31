const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

    it('should be a function', () => {
        const turn = new Turn();

        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', () => {
        const turn = new Turn();

        expect(turn).to.be.an.instanceOf(Turn);
    });

    it('should store a guess and a card', () => {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn(card, 'array');

        expect(turn.currentCard).to.equal(card);
        expect(turn.guess).to.equal('array');
    });

    it('should be able to return the guess', () => {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn(card, 'array');

        const guess = turn.returnGuess();

        expect(guess).to.equal('array');
    });

    it('should be able to return the card', () => {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn(card, 'array');

        expect(turn.currentCard).to.equal(card);
    });

    it('should be able to check if the guess is correct', () => {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        let turn = new Turn(card, 'array');

        expect(turn.evaluateGuess()).to.equal(false);

        turn = new Turn(card, 'object');

        expect(turn.evaluateGuess()).to.equal(true);
    });

    it('should give feedback on the guess', () => {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        let turn = new Turn(card, 'array');

        expect(turn.giveFeedback()).to.equal('incorrect!');

        turn = new Turn(card, 'object');

        expect(turn.giveFeedback()).to.equal('correct!');
    });
});