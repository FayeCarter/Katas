import Player from "../src/Player";

describe("Player", () => {
  test("has a starting score of 0", () => {
    let player = new Player();
    expect(player.score).toBe(0);
  });

  describe("Scoring", () => {
    test("first score, increases to 15", () => {
      let player = new Player();
      player.addScore();
      expect(player.score).toBe(15);
    });

    test("second score, increases to 30", () => {
      let player = new Player();
      player.addScore();
      player.addScore();
      expect(player.score).toBe(30);
    });
  });
});