const { expect, assert } = require('chai');

const Player = require('../player');

describe('Player class', () => {

  // beforeEach( () => {

  // });

  describe('Creation', () => {
    it('Creates a player with a name', () => {
      let player = new Player('Test Player');
      expect(player.name).to.be.equal('Test Player');
    });
    it('Doesn\'t create a player if no name is given', () => {
      let noName = function() { return new Player() }
      assert.throws(noName, Error, 'Name is required');
    });
  });
});
