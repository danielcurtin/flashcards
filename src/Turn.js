class Turn {
    constructor(currentCard, guess) {
        this.currentCard = currentCard;
        this.guess = guess;
    };

    returnGuess() {
        return this.guess;
    };

    returnCard() {
        return this.currentCard;
    };

    evaluateGuess() {
        if (this.guess === this.currentCard.correctAnswer) {
            return true;
        } else {
            return false;
        };
    };

    giveFeedback() {
        if (this.evaluateGuess()) {
            return 'correct!';
        } else {
            return 'incorrect!';
        };
    };
};

module.exports = Turn;