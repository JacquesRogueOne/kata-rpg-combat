export const DEFAULT_HEALTH = 1000;

export class Character {
    health: number;
    level: number;
    alive: boolean;
    
    private readonly DEFAULT_LEVEL = 1;
    private readonly DEFAULT_LIFE = true;
    
    constructor() {
        this.health = DEFAULT_HEALTH;
        this.level = this.DEFAULT_LEVEL;
        this.alive = this.DEFAULT_LIFE;
    }
    
    deal(damage: number): void {
        this.health -= damage;
        if (this.health < 0) {
            this.alive = false;
            this.health = 0;
        }
    }

    heal(healValue: number): void {
        if(this.isDead()) {
            return;
        }
        this.health += healValue;
        if( this.health > DEFAULT_HEALTH) {
            this.health = DEFAULT_HEALTH;
        }
    }

    private isDead() {
        return !this.alive;
    }
}
