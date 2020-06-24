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

  describe("dealDamage", () => {

    test("dealDamage reduces health by 1", () => {
      player1.dealDamage(player2);
      expect(player2.health).toBe(999)
    })

    test("when dealDamage cannot reduces health past 0", () => {
      for(let i = 0; i < 1001 ; i++ ) {
        player1.dealDamage(player2);
      }
      expect(player2.health).toBe(0)
    })

    test("when dealDamage cannot reduces health past 0", () => {
      for(let i = 0; i < 1000 ; i++ ) {
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
      expect(player2.health).toBe(999)
      player2.heal();
      expect(player2.health).toBe(1000)
    });

    test("heal cannot increase health past 1000", () => {
      player2.heal();
      expect(player2.health).toBe(1000)
    });

    test("dead characters cannot be healed", () => {
      for(let i = 0; i < 1000 ; i++ ) {
        player1.dealDamage(player2);
      }
      expect(player2.alive).toBe(false)
      player2.heal();
      expect(player2.health).toBe(0)
    });

    test("character cannot heal themselves", () => {
      player1.dealDamage(player2);
      player2.heal(player2);
      expect(player2.health).toBe(999)
    });
  });
});