const HIGH_DAMAGE = 4;
const REGULAR_DAMAGE = 2;
const LOW_DAMAGE = 1;

export default class Character {
  constructor() {
    this.health = 1000;
    this.level = 1;
    this.alive = true;
  };

  dealDamage (character) {
    if (character.health > 0  && character !== this ) {
      character.health -= this._getDamageValue(character)
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

  _getDamageValue(defendingPlayer) {
    const levelDifference = this.level - defendingPlayer.level;
    if (levelDifference >= 5 ) {
      return HIGH_DAMAGE;
    } else if (levelDifference <= -5 ) {
      return LOW_DAMAGE;
    } else {
      return REGULAR_DAMAGE;
    }
  }
};