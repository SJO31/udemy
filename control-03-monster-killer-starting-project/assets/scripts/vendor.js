const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');
const strongAttackAmount = document.getElementById('strong-attack-amount');
const healPotionAmount = document.getElementById('heal-potion-amount');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');

const backdropElement = document.getElementById('backdrop');

function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}
function dealMonsterDamage(damage) {
  const dealtDamage = Math.random() * damage;
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  return dealtDamage;
}
function dealPlayerDamage(damage) {
  const dealtDamage = Math.random() * damage;
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  return dealtDamage;
}
function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}
function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}
function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}
function setPlayerHealth(health) {
  playerHealthBar.value = health;
}

// Custom functions
function removeStrongAttackAmount() {
  strongAttackAmount.parentNode.removeChild(strongAttackAmount);
}
function removeHealingPotions() {
  healPotionAmount.parentNode.removeChild(healPotionAmount);
}
function setStrongAttackAmount(amount) {
  strongAttackAmount.textContent = amount;
}
function setHealingPotionAmount(amount) {
  healPotionAmount.textContent = amount;
}
function toggleBackdrop() {
  backdropElement.classList.toggle('visible');
}
function presentInfoModal(title, message) {
  toggleBackdrop();
  infoModal = document.createElement('div');
  infoModal.classList.add('modal');
  infoModal.innerHTML = `
    <h2>${title}</h2>
    <p>${message}</p>
  `;
  const closeButton = document.createElement('button');
  closeButton.addEventListener('click', hideInfoModal);
  closeButton.textContent = 'Okay';
  infoModal.appendChild(closeButton);
  document.body.appendChild(infoModal);
}
function hideInfoModal() {
  toggleBackdrop();
  document.body.removeChild(infoModal);
}