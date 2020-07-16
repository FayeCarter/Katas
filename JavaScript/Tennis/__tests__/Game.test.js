import Game from "../src/Game";
import Player from "../src/Player";
import Scorecard from "../src/Scorecard";

describe("Game", () => {
  test("A new Game is not complete", () => {
    let game = new Game();
    expect(game.complete).toBe(false);
  });

  test("Has a Player1", () => {
    let game = new Game();
    expect(game.player1).toBeDefined();
  })

  test("Has a Player2", () => {
    let game = new Game();
    expect(game.player2).toBeDefined();
  })

  test("Has a Starting Score of 0:0", () => {
    let game = new Game();
    expect(game.showScore()).toBe("0:0");
  })

  describe("Players", () => {
    test("Uses the Player Class", () => {
      let game = new Game();
      expect(game.player1).toBeInstanceOf(Player);
      expect(game.player2).toBeInstanceOf(Player);
    });
  });

  describe("Scorecard", () => {
    test("Uses the Scorecard Class", () => {
      let game = new Game();
      expect(game.scorecard).toBeInstanceOf(Scorecard);
    });

    test("scorePoint() increases the score", () => {
      let game = new Game();
      game.scorePoint("player1")
      expect(game.showScore()).toBe("15:0");
    })

    test("scorePoint('player2')increases the score", () => {
      let game = new Game();
      game.scorePoint("player2")
      expect(game.showScore()).toBe("0:15");
    })
  })
})