export class Player {
    
    name: string;
    life: number;
    stamina: number;
    mana: number;
    attack: number;
    defense: number;

    constructor(name: string, life: number, stamina: number, mana:number) {
        this.name = name;
        this.life = life;
        this.stamina = stamina;
        this.mana = mana;
    }

    takeDamage(damage: number): number {
        this.life -= this.calculateDamage(damage);
        return this.life;
    }

    heal(life_points: number): number {
        this.life += life_points;
        return this.life;
    }

    calculateDamage(damage: number): number {
        return damage <= this.defense ? 0 : damage - this.defense;
    }

}