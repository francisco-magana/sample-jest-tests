import { faker } from '@faker-js/faker';
import { fakePlayer } from "../fake/player";

describe('Player creation', () => {

    it('has valid data', () => {
        expect(typeof (fakePlayer.name)).toBe("string");
        expect(typeof (fakePlayer.life)).toBe("number");
        expect(typeof (fakePlayer.stamina)).toBe("number");
        expect(typeof (fakePlayer.mana)).toBe("number");
    })

})

describe('Player actions', () => {

    it('receives damage', () => {
        let initialHealth = fakePlayer.life;
        let damage = faker.number.int({ min: 1, max: 10 });
        expect(fakePlayer.takeDamage(damage)).toBe(initialHealth - damage)
    })

})