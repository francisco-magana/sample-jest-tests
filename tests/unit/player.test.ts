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

    let damage;
    let life_points;

    beforeAll(() => {
      damage = faker.number.int({ min: 1, max: 50 });
      life_points = faker.number.int({ min: 1, max: 10 });
    })

    it('receives damage', () => {
        let initialLife = fakePlayer.life;
        expect(fakePlayer.takeDamage(damage)).toBe(initialLife - damage)
    })

    it('heal', () => {
        let initialLife = fakePlayer.life;
        fakePlayer.takeDamage(damage);
        expect(fakePlayer.heal(life_points)).toBe(initialLife - damage + life_points)
    })

})