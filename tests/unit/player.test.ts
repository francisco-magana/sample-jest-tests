import { fakePlayer } from "../fake/player";

describe('Player creation', () => {

    it('has valid data', () => {
        expect(typeof(fakePlayer.name)).toBe("string");
        expect(typeof(fakePlayer.life)).toBe("string");
        expect(typeof(fakePlayer.stamina)).toBe("number");
        expect(typeof(fakePlayer.mana)).toBe("number");
    })

})