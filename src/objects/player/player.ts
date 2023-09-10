export class Player {
    
    name: string;
    life: number;
    stamina: number;
    mana: number;

    constructor(name: string, life: number, stamina: number, mana:number) {
        this.name = name;
        this.life = life;
        this.stamina = stamina;
        this.mana = mana;
    }

    takeDamage(damage: number): number {
        this.life -= damage;
        return this.life;
    }

    heal(life_points: number): number {
        this.life += life_points;
        return this.life;
    }

}