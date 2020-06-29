import Player from "./Player";

export default class Game {
  constructor(
    player = new Player()
  ) {
    this.complete = false;
    this.score = "0:0";
    this.player1 = player;
    this.player2 = player;
  };

  scorePoint(player) {

    if ( player === "player1" ) {
      let gamePoint = this.player1.addScore();
      this.score = `${gamePoint}:0`
    } else if ( player === "player2" ) {
      let gamePoint = this.player2.addScore();
      this.score = `0:${gamePoint}`
    }
  }
};