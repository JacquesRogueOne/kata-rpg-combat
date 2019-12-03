import { Character, DEFAULT_HEALTH } from "./character";

describe("character should start", () => {
    const character = new Character();
    it("with 1000 health", () => {
        expect(character.health).toEqual(1000);
    });
    it("with level 1", () => {
        expect(character.level).toEqual(1);
    });
    it("being alive", () => {
        expect(character.alive).toBeTruthy();
    });
});

describe("character can receive damage", () => {
    let character: Character;

    beforeEach(() => {
        character = new Character();
    });

    it("then health should be substracted", () => {
        const damage = 300;
        const expectedHealth = DEFAULT_HEALTH - damage;

        character.deal(damage);

        expect(character.health).toBe(expectedHealth);
    });
    describe("and damage exceeds health", () => {
        it("then character should die", () => {
            const damage = DEFAULT_HEALTH + 1;

            character.deal(damage);

            expect(character.alive).toBeFalsy();
        });
        it("then character's health should be zero", () => {
            const damage = DEFAULT_HEALTH + 1;
            const expectedHealth = 0;

            character.deal(damage);

            expect(character.health).toBe(expectedHealth);
        });
    });
});

describe("character can receive heal", () => {
    it("then dead character cannot be healed", () => {
        const character = new Character();
        character.health = 0;
        character.alive = false;
        const healValue = 1;

        character.heal(healValue);

        expect(character.health).toBe(0);
        expect(character.alive).toBeFalsy();
    });
    it("then health increase by the amount healed", () => {
        const character = new Character();
        character.health = 500;
        const healValue = 100;
        const expectedHealth = 600;

        character.heal(healValue);

        expect(character.health).toBe(expectedHealth);
    });
    it("then health cannot be raised above 1000", () => {
        const character = new Character();
        const healValue = 100;
        const expectedHealth = DEFAULT_HEALTH;

        character.heal(healValue);

        expect(character.health).toBe(expectedHealth);
    });
});