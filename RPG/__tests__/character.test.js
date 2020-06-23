import Character from "../src/Character";

describe("Character", () => {
  
  test("Characters start with Health at 1000", () => {
    const character = new Character()
    expect(character.health).toBe(1000)
  });

  test("Characters start at level 1", () => {
    const character = new Character()
    expect(character.level).toBe(1)
  });

});