import { faker } from '@faker-js/faker';
import { Player } from "../../src/objects/player/player";

export const fakePlayer = new Player(
    faker.person.firstName('male'),
    faker.number.int({min: 1, max: 100}),
    faker.number.int({min: 1, max: 100}),
    faker.number.int({min: 1, max: 100}),
);
