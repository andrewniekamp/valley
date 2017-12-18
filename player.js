const isRequired = (field) => { throw new Error(`${field} is required`); };

class Player {
  constructor(name) {
    this.name = name || isRequired('Name');
    this.health = 50;
    this.energy = 50;
  }
}

module.exports = Player;
