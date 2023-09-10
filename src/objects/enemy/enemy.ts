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

}