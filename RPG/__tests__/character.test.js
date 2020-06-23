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

  describe("dealDamage", () => {

    test("dealDamage reduces health by 1", () => {
      character.dealDamage();
      expect(character.health).toBe(999)
    })

    test("when dealDamage cannot reduces health past 0", () => {

      for(let i = 0; i < 1001 ; i++ ) {
        character.dealDamage();
      }
      expect(character.health).toBe(0)
    })
  })

});