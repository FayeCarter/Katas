const SCORING_SYSTEM = [0, 15, 30, 40];

export default class Game {
  constructor () {
    this.score = 0;
    this.count = 0;
  };

  addScore() {
    this.count += 1;
    return this.score = SCORING_SYSTEM[this.count];
  }
};