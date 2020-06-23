import Character from "../src/Character";

describe("Character", () => {
  
  let character;

  beforeEach(() => {
    character = new Character();
  })

  test("Characters start with Health at 1000", () => {
    expect(character.health).toBe(1000)
  });

  test("Characters start at level 1", () => {
    expect(character.level).toBe(1)
  });

  test("Characters start at level 1", () => {
    expect(character.alive).toBe(true)
  });

});