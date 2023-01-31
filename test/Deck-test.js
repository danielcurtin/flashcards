const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Deck', () => {

    it('should be a function', () => {
        const deck = new Deck();

        expect(Deck).to.be.a('function');
    });

    it('should be an instance of Deck', () => {
        const deck = new Deck();

        expect(deck).to.be.an.instanceOf(Deck);
    });

    it('should store an array of objects', () => {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');

        const deck = new Deck([card1, card2, card3]);

        expect(deck.cards).to.deep.equal([card1, card2, card3]);
    });

    it('should be able to count the number of cards in the deck', () => {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');

        const deck = new Deck([card1, card2, card3]);

        expect(deck.countCards()).to.equal(3);
    });
});