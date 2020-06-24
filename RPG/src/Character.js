export default class Character {
  constructor() {
    this.health = 1000;
    this.level = 1;
    this.alive = true;
  };

  dealDamage (character) {
    if (this.health > 0  && character !== this ) {
      this.health -= 1;
      this._checkForDead()
    }
  };

  heal () {
    if (this.health < 1000 && this.alive) {
      this.health += 1;
    };
  };

  _checkForDead () {
    this.health === 0 ? this.alive = false : this.alive;
  }
};