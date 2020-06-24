export default class Character {
  constructor() {
    this.health = 1000;
    this.level = 1;
    this.alive = true;
  };

  dealDamage (character) {
    if (character.health > 0  && character !== this ) {
      if (this.level - character.level <= -5) {
        character.health -= 0.5;
      } else {
        character.health -= 1;
      }
      character._checkForDead()
    }
  };

  heal (character) {
    if (character.health < 1000 && character.alive && character !== this ) {
      character.health += 1;
    };
  };

  _checkForDead () {
    this.health === 0 ? this.alive = false : this.alive;
  }
};