// Global variables
const PLAYER_ATTACK_VALUE = 10;
const PLAYER_STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

// Game functions
function endRound() {
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        presentInfoModal('Player won!', 'Well done! That monster will think twice before picking a fight with you again.');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        presentInfoModal('Player lost!', `Game Over! Don't worry, even the best heroes have bad days.`);
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
        presentInfoModal(`Draw!`, `It's a tie! The monster's as tough as you are. Now go hit the gym.`);
    }
}
function attackMonster(mode) {
    let maxDamage;
    if (mode === 'ATTACK') {
        maxDamage = PLAYER_ATTACK_VALUE;
    } else if (mode === 'STRONG_ATTACK') {
        maxDamage = PLAYER_STRONG_ATTACK_VALUE;
    }
    const monsterDamage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= monsterDamage;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    endRound();
}

// Handler functions
function attackHandler() {
    attackMonster('ATTACK');
}
function strongAttackHandler() {
    attackMonster('STRONG_ATTACK');
}
function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        presentInfoModal('Healing not possible!', `Slow down, champ! You’re already maxed out on health. Save some healing for later.`);
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    endRound();
}
function logHandler() {
    return;
}

// Event listeners
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', logHandler);