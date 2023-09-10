# Sample jest testing

This is a practice project about testing. I want to explore the useful tools that jest provide us for unit and integration tests.

## What I am testing?

Is a sample collection of classes about videogames (like Player or Enemy) that are designed to interact between them. For example, a player can take damage and an enemy can attack.

The test classes at the moment are:

* Player:
    
    A simple representation of a player object in a videogame that has the next properties:
    ```ts
    name: string; // The name of the player
    life: number; // The life/health of the player
    stamina: number; // (for actions)
    mana: number; // (spells)
    attack: number; // to do damage
    defense: number; // to reduce damage received
    ```

    A player can perform the next actions:

    `takeDamage(damage: number)` : Receive damage from other object and substract the damage calculated to the player life points.

    `heal(life_points: number)` : Allows a player to recover a specific amount of life points.

    `calculateDamage(damage: number)` : A helper function that return the damage calculated with the damage received and the defense attribute.
* Enemy:
    
    A simple representation of an Enemy object in a videogame that has the next properties:
    ```ts
    name: string; // the name of the enemy
    life: number; // The life/health points of the enemy
    attack: number; // to do damage
    defense: number; // To reduce damage received
    is_defeated: boolean; // To know if an enemy has been defeated
    ```

    An Enemy can perform the next actions:

    `takeDamage(damage: number)` : Receive damage from other object and substract the damage calculated to the player life points.

    `calculateDamage(damage: number)` : A helper function that return the damage calculated with the damage received and the defense attribute.

## Requirements
`nodejs` V16.20.0

`tsc` V5.2.2

## Install dependencies

To install dependencies only run:

```bash
npm install
```

## Run tests

Run the `test` script defined in `package.json`

```bash
npm run test
```

You will se an output like this:

