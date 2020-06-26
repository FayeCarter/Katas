import Game from "../src/Game";

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
})