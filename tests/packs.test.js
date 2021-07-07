const packs = require('../src/packs');

describe("sendSweets", () => {

    let pack;
    let order;
    test('should return the minimum pack there is 1 order of sweets', () => {
        pack = [250, 500, 1000, 2000, 5000];
        order = 1;
        expect(packs.sendSweets(pack, order)).toEqual([250]);
    });
    test('should return the exact pack of sweet if order is exactly that', () => {
        pack = [250, 500, 1000, 2000, 5000];
        order = 5000;
        expect(packs.sendSweets(pack, order)).toEqual([5000]);
    });
    test('should return whole pack of sweets needed to fulfil an order', () => {
        pack = [250, 500, 1000, 2000, 5000];
        order = 501;
        expect(packs.sendSweets(pack, order)).toEqual([500, 250]);
    });
});

