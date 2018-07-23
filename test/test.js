const assert = require('assert');
const betterdungeons = require('../better-dungeons');

describe('Dungeon correct', () => {
	it('should be the correct size', async () => {
		const dungeon = await betterdungeons(10, 10, 0.3, 3, 3, 'randomseed');
		let counter = 0;
		for (let row = 0; row < dungeon.gridSizeLength; row++) {
			for (let column = 0; column < dungeon.gridSizeWidth; column++) {
				counter++;
			}
		}
		assert.equal(counter, 100);
	});
	it('should have contains rooms', async () => {
		const dungeon = await betterdungeons(100, 10, 0.3, 3, 3, 'randomseed');
		assert.ok(dungeon.rooms.length > 0);
	});
});
