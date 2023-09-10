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