export default class Scorecard {
  constructor() {
    this.score = "0:0";
    this.player1Score = 0;
    this.player2Score = 0;
  };

  addScore(a, b) {
    this.player1Score += a;
    this.player2Score += b;
    this._returnScore()
  }

  _returnScore() {
    this.score = `${this.player1Score}:${this.player2Score}` 
  }
};