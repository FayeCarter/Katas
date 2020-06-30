import Player from "./Player";
import Scorecard from "./Scorecard";

export default class Game {
  constructor(
    player = new Player(),
    scorecard = new Scorecard()
  ) {
    this.complete = false;
    this.scorecard = scorecard;
    this.player1 = player;
    this.player2 = player;
  };

  scorePoint(player) {
    if ( player === "player1" ) {
      let gamePoint = this.player1.addScore();
      this.scorecard.addScore( gamePoint , 0 )
    } else if ( player === "player2" ) {
      let gamePoint = this.player2.addScore();
      this.scorecard.addScore( 0, gamePoint )
    }
  }

  showScore() {
    return this.scorecard.score
  }
};