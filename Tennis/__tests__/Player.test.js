import Player from "../src/Player";

describe("Player", () => {
  test("has a starting score of 0", () => {
    let player = new Player();
    expect(player.score).toBe(0);
  });
});