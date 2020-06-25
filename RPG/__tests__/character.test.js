import Character from "../src/Character";

describe("Character", () => {
  
  let player1;
  let player2;

  beforeEach(() => {
    player1 = new Character();
    player2 = new Character();
  })

  test("Characters start with Health at 1000", () => {
    expect(player1.health).toBe(1000)
  });

  test("Characters start at level 1", () => {
    expect(player1.level).toBe(1)
  });

  test("Characters start at level 1", () => {
    expect(player1.alive).toBe(true)
  });

  test("character have a range attribute", () => {
    expect(player1.range).toBeDefined()
  })


  test("character has a start location of 0", () => {
    expect(player1.location).toBe(0)
  })

  describe("dealDamage", () => {

    test("dealDamage reduces health by 1", () => {
      player1.dealDamage(player2);
      expect(player2.health).toBe(998)
    })

    test("when dealDamage cannot reduces health past 0", () => {
      for(let i = 0; i < 501 ; i++ ) {
        player1.dealDamage(player2);
      }
      expect(player2.health).toBe(0)
    })

    test("when dealDamage cannot reduces health past 0", () => {
      for(let i = 0; i < 500 ; i++ ) {
        player1.dealDamage(player2);
      }
      expect(player2.health).toBe(0)
      expect(player2.alive).toBe(false)
    })

    test("character cannot deal damage to themselves", () => {
      player1.dealDamage(player1);
      expect(player1.health).toBe(1000)
    })
    
  })

  describe("heal", () => {

    test("heal increases health by 1", () => {
      player1.dealDamage(player2);
      expect(player2.health).toBe(998)
      player1.heal(player2);
      expect(player2.health).toBe(999)
    });

    test("heal cannot increase health past 1000", () => {
      player1.heal(player2);
      expect(player2.health).toBe(1000)
    });

    test("dead characters cannot be healed", () => {
      for(let i = 0; i < 500 ; i++ ) {
        player1.dealDamage(player2);
      }
      expect(player2.alive).toBe(false)
      player1.heal(player2);
      expect(player2.health).toBe(0)
    });

    test("character cannot heal themselves", () => {
      player1.dealDamage(player2);
      player2.heal(player2);
      expect(player2.health).toBe(998)
    });
  });

  describe("High level players", () => {

    let highLevelPlayer;
    let lowLevelPlayer;
  
    beforeEach(() => {
      highLevelPlayer = new Character();
      lowLevelPlayer = new Character();

      highLevelPlayer.level = 7;
    });
  
    test("Damage is reduced by 50% if player is 5 or more levels lower than opponent", () => {
      lowLevelPlayer.dealDamage(highLevelPlayer)
      expect(highLevelPlayer.health).toBe(999)
    });

    test("Damage is increased by 50% if player is 5 or more higher lower than opponent", () => {
      highLevelPlayer.dealDamage(lowLevelPlayer)
      expect(lowLevelPlayer.health).toBe(996)
    });
  });

  describe("Character types", () => {

    test("Melee characters have a range of 2 meters", () => {
      let meleeCharacter = new Character("melee");
      expect(meleeCharacter.range).toBe(2)
    })

    test("Ranged characters have a range of 20 meters", () => {
      let rangedCharacter = new Character("ranged");
      expect(rangedCharacter.range).toBe(20)
    })

  })

  describe("Move", () => {

    test("Moving a character right increases their location by 1", () => {
      let character = new Character();
      character.move("right")
      expect(character.location).toBe(1)
    })
  })
});