import Game from "../src/Game";
import Player from "../src/Player";

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
    expect(game.score).toBe("0:0");
  })

  describe("Players", () => {
    test("Uses the Player Class", () => {
      let game = new Game();
      expect(game.player1).toBeInstanceOf(Player);
      expect(game.player2).toBeInstanceOf(Player);
    })

    test("scorePoint() increases the score", () => {
      let game = new Game();
      game.scorePoint("player1")
      expect(game.score).toBe("15:0");
    })

    test("scorePoint('player2')increases the score", () => {
      let game = new Game();
      game.scorePoint("player2")
      expect(game.score).toBe("0:15");
    })
  })
})