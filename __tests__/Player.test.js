const Potion = require('../lib/Potion');
const Player = require('../lib/Player');

jest.mock('../lib/Potion');
console.log(new Potion());

test('creates a player object', () => {
    const player = new Player('Drizzt');

    expect(player.name).toBe('Drizzt');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});