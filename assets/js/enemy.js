// object constructor
let enemy; // Global scope

function Enemy(enemyType, health, mana, strenght, agility, speed) {
    this.enemyType = enemyType;
    this.health = health;
    this.mana = mana;
    this.strenght = strenght;
    this.agility = agility;
    this.speed = speed;
}