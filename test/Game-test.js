const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');


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
});
