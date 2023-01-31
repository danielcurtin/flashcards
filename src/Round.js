const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.currentCard = this.deck.cards[0];
        this.turns = 0;
        this.incorrectGuesses = [];
    };

    returnCurrentCard() {
        return this.currentCard;
    };

    takeTurn(guess) {
        const turn = new Turn(this.currentCard, guess);

        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id)
        };
        
        this.turns++;
        this.currentCard = this.deck.cards[this.turns];

        return turn.giveFeedback();
    };

    calculatePercentCorrect() {
        return Math.round((1 - (this.incorrectGuesses.length / this.deck.cards.length)) * 100);
    };

    endRound() {
        const results = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
        console.log(results);
        return results;
    };
};

module.exports = Round;