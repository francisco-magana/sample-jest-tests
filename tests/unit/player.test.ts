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

    let damage: number;
    let life_points: number;
    let full_life: number = 100;
    let test_defense: number = 5;

    beforeAll(() => {
      fakePlayer.defense = test_defense;
      fakePlayer.life = full_life
    })

    it('receives damage', () => {
        let initialLife = fakePlayer.life;
        expect(fakePlayer.takeDamage(10)).toBe(initialLife - 5)
    })

    it('heal', () => {
        let initialLife = fakePlayer.life;
        fakePlayer.takeDamage(damage);
        expect(fakePlayer.heal(life_points)).toBe(initialLife - damage + life_points)
    })

    it('calculate damage if is greather than defense', () => {
        expect(fakePlayer.calculateDamage(10)).toBe(5);
    })

    it('calculate damage if is less than defense', () => {
        expect(fakePlayer.calculateDamage(4)).toBe(0);
    })

    it('calculate damage if is equal to defense', () => {
        expect(fakePlayer.calculateDamage(test_defense)).toBe(0);
    })

})