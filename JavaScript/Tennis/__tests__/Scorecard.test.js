import Scorecard from "../src/Scorecard";

describe("Scorecard", () => {
  test("has a starting score of 0", () => {
    let scorecard = new Scorecard();
    expect(scorecard.score).toBe("0:0");
  });

  test("addScore() increases the score", () => {
    let scorecard = new Scorecard();
    scorecard.addScore(15, 0)
    expect(scorecard.score).toBe("15:0");
  })


  test("addScore() can increases other player score", () => {
    let scorecard = new Scorecard();
    scorecard.addScore(0, 15)
    expect(scorecard.score).toBe("0:15");
  })
});