export default class Character {
  constructor() {
    this.health = 1000;
    this.level = 1;
    this.alive = true;
  };

  dealDamage () {
    if (this.health > 0 ) {
      this.health -= 1;
      this._checkForDead()
    }
  };

  _checkForDead () {
    this.health === 0 ? this.alive = false : this.alive;
  }
};