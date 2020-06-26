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
};