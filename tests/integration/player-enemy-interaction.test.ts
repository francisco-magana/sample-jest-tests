import { fakePlayer } from "../fake/player";
import { fakeEnemy } from "../fake/enemy";

describe('Enemy attacks player', () => {
    
    const FULL_LIFE: number = 100;
    const POWERFULL_ATTACK: number = 20;
    const WEAK_ATTACK: number = 10;
    const LOW_DEFENSE: number = 5;

    beforeEach(() => {
        fakePlayer.life = FULL_LIFE;
        fakePlayer.defense = LOW_DEFENSE;
    })
    
    it('with powerful attack', () => {
        fakeEnemy.attack = POWERFULL_ATTACK;
        fakePlayer.takeDamage(fakeEnemy.attack);
        expect(fakePlayer.life).toBe(85);
    })

    it('with weak attack', () => {
        fakeEnemy.attack = WEAK_ATTACK;
        fakePlayer.takeDamage(fakeEnemy.attack);
        expect(fakePlayer.life).toBe(95);
    })

})

describe('Player attacks enemy', () => {
    
    const FULL_LIFE: number = 100;
    const POWERFULL_ATTACK: number = 20;
    const WEAK_ATTACK: number = 10;
    const LOW_DEFENSE: number = 5;

    beforeEach(() => {
        fakeEnemy.life = FULL_LIFE;
        fakeEnemy.defense = LOW_DEFENSE;
    })
    
    it('with powerful attack', () => {
        fakePlayer.attack = POWERFULL_ATTACK;
        fakeEnemy.takeDamage(fakePlayer.attack);
        expect(fakeEnemy.life).toBe(85);
    })

    it('with weak attack', () => {
        fakePlayer.attack = WEAK_ATTACK;
        fakeEnemy.takeDamage(fakePlayer.attack);
        expect(fakeEnemy.life).toBe(95);
    })

})