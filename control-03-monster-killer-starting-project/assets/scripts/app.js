// Global variables
const PLAYER_ATTACK_VALUE = 10;
const PLAYER_STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
const STRONG_ATTACK_AMOUNT = 2;
const HEALING_POTION_AMOUNT = 5;

const MODE = ['ATTACK', 'STRONG_ATTACK']
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

// const enteredValue = prompt('Maximum life for you & the monster.', '100');
const enteredValue = 100;

let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let currentStrongAttackAmount = STRONG_ATTACK_AMOUNT;
let currentHealingPotionAmount = HEALING_POTION_AMOUNT;
let hasBonusLife = true;
let hasStrongAttacks = true;
let hasHealingPotions = true;

adjustHealthBars(chosenMaxLife);
setStrongAttackAmount(STRONG_ATTACK_AMOUNT);
setHealingPotionAmount(HEALING_POTION_AMOUNT);

// Game functions
function createLogEntry(ev, val, monsterHealth, playerHealth) {
    let logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
};
    if (ev === LOG_EVENT_PLAYER_ATTACK) {
        logEntry.target = 'MONSTER';
    } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry = {
            event: ev,
            value: val,
            target: 'MONSTER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
        logEntry = {
            event: ev,
            value: val,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    } else if (ev === LOG_EVENT_PLAYER_HEAL) {
        logEntry = {
            event: ev,
            value: val,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    } else if (ev === LOG_EVENT_GAME_OVER) {
        logEntry = {
            event: ev,
            value: val,
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
        
    }
    battleLog.push(logEntry);
}
function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}
function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    createLogEntry(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth);

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        presentInfoModal('Your lucky day!', `Just in the nick of time! That bonus life gave you a second chance. Don't waste it, you jammy git!`);
    }
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        presentInfoModal('Player won!', `Well done, you little hero! That monster'll think twice before messing with you again, the daft bugger.`);
        reset();
        createLogEntry(LOG_EVENT_GAME_OVER, 'PLAYER WON', currentMonsterHealth, currentPlayerHealth);
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        presentInfoModal('Player lost!', `Game over! Don't fret, even the best heroes have shite days.`);
        reset();
        createLogEntry(LOG_EVENT_GAME_OVER, 'PLAYER WON', currentMonsterHealth, currentPlayerHealth);
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
        presentInfoModal(`Draw!`, `It's a tie! That monster's as tough as you are. Now go hit the gym, you little beastie!`);
        reset();
        createLogEntry(LOG_EVENT_GAME_OVER, 'PLAYER WON', currentMonsterHealth, currentPlayerHealth);
    }
}
function attackMonster(mode) {
    const maxDamage = mode === MODE[0] ? PLAYER_ATTACK_VALUE : PLAYER_STRONG_ATTACK_VALUE;
    const logEvent = mode === MODE[0] ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;
    // if (mode === MODE[0]) {
    //     maxDamage = PLAYER_ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_ATTACK;
    // } else if (mode === MODE[1]) {
    //     maxDamage = PLAYER_STRONG_ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    // }
    const monsterDamage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= monsterDamage;

    createLogEntry(logEvent, monsterDamage, currentMonsterHealth, currentPlayerHealth);
    endRound();
}

// Handler functions
function attackHandler() {
    attackMonster(MODE[0]);
}
function strongAttackHandler() {
    if (hasStrongAttacks) {
        if (currentStrongAttackAmount > 1) {
            --currentStrongAttackAmount;
            setStrongAttackAmount(currentStrongAttackAmount);
            attackMonster(MODE[1]);
        } else if (currentStrongAttackAmount == 1) {
            --currentStrongAttackAmount;
            setStrongAttackAmount(currentStrongAttackAmount);
            disableStrongAttackButton();
            hasStrongAttacks = false;
        }
    }
}
function healPlayerHandler() {
    let healValue;
    if (hasHealingPotions) {
        if (currentHealingPotionAmount > 1) {
            --currentHealingPotionAmount;
            setHealingPotionAmount(currentHealingPotionAmount);
        } else if (currentHealingPotionAmount == 1) {
            --currentHealingPotionAmount;
            setHealingPotionAmount(currentHealingPotionAmount);
            disableHealingButton();
            hasHealingPotions = false;
        }
        if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
            presentInfoModal('Healing not possible!', `Slow down, champ! You're already maxed out on health. Save some healing for later, you greedy sod!`);
            healValue = chosenMaxLife - currentPlayerHealth;
        } else {
            healValue = HEAL_VALUE;
        }
        increasePlayerHealth(healValue);
        currentPlayerHealth += healValue;
        createLogEntry(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth);
        endRound();
    }
}
function logHandler() {
    console.log(battleLog);
}

// Event listeners
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', logHandler);