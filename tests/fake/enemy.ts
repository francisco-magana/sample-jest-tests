import { faker } from '@faker-js/faker';
import { Enemy } from "../../src/objects/enemy/enemy";

export const fakeEnemy = new Enemy(
    faker.lorem.word(),
    faker.number.int({min: 90, max: 100}),
    faker.number.int({min: 1, max: 10}),
    faker.number.int({min: 1, max: 10}),
    false
);
