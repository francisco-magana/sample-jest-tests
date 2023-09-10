import { faker } from '@faker-js/faker';
import { fakeEnemy } from "../fake/enemy";

describe('Enemy creation', () => {
    it('has valid data', () => {
        expect(typeof (fakeEnemy.name)).toBe("string");
        expect(typeof (fakeEnemy.life)).toBe("number");
        expect(typeof (fakeEnemy.attack)).toBe("number");
        expect(typeof (fakeEnemy.defense)).toBe("number");
        expect(typeof (fakeEnemy.is_defeated)).toBe("boolean");
    })
})

describe('Enemy actions', () => {

    let damage: number;
    let full_life: number = 100;
    let test_defense: number = 5;

    beforeAll(() => {
        damage = faker.number.int({min: 10, max: 20});
        fakeEnemy.life = full_life;
        fakeEnemy.defense = test_defense;
    })
  
    it('receives damage', () => {
        let expected_damage = fakeEnemy.life - (damage - fakeEnemy.defense);
        fakeEnemy.takeDamage(damage);
        expect(fakeEnemy.life).toBe(expected_damage);
    })

    it('calculate damage if is greather than defense', () => {
        expect(fakeEnemy.calculateDamage(10)).toBe(5);
    })

    it('calculate damage if is less than defense', () => {
        expect(fakeEnemy.calculateDamage(4)).toBe(0);
    })

    it('calculate damage if is equal to defense', () => {
        expect(fakeEnemy.calculateDamage(test_defense)).toBe(0);
    })

})