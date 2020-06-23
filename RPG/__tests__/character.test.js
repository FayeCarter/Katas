import Character from "../src/Character";

describe("Character", () => {
  
  test("Characters start with Health at 1000", () => {
    const character = new Character()
    expect(character.health).toBe(1000)
  });


});