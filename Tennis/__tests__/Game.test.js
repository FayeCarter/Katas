import Game from "../src/Game";

describe("Game", () => {
  test("A new Game is not complete", () => {
    let game = new Game();
    expect(game.complete).toBe(false);
  })
})