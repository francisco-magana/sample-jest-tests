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

}