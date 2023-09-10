export class Enemy {

    name: string;
    life: number;
    attack: number;
    defense: number;
    is_defeated: boolean;

    constructor(name: string, life: number, attack: number, defense: number, is_defeated: boolean) {
        this.name = name;
        this.life = life;
        this.attack = attack;
        this.defense = defense;
        this.is_defeated = is_defeated;
    }

    takeDamage(damage: number): number {
        this.life -= this.calculateDamage(damage);
        return this.life;
    }

    calculateDamage(damage: number): number {
        return damage <= this.defense ? 0 : damage - this.defense;
    }

}