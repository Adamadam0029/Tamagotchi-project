// Startwaarden
let hunger = 50;
let energy = 50;
let happiness = 50;

// HTML elementen
const hungerEl = document.getElementById("hunger");
const energyEl = document.getElementById("energy");
const happinessEl = document.getElementById("happiness");
const petEl = document.querySelector(".pet");

// Update stats + emoji
function updateStats() {
  hungerEl.textContent = hunger;
  energyEl.textContent = energy;
  happinessEl.textContent = happiness;

  // Emoji logica (prioriteit is belangrijk)
  if (hunger > 90) {
    petEl.textContent = "🤢"; // te vol / misselijk
  } 
  else if (energy < 20) {
    petEl.textContent = "😴"; // moe
  } 
  else if (happiness < 20) {
    petEl.textContent = "😞"; // depressief
  } 
  else {
    petEl.textContent = "😊"; // normaal
  }
}

// 🍎 Eten
function feed() {
  hunger = Math.min(hunger + 10, 100);
  updateStats();
}

// 🎮 Spelen
function play() {
  happiness = Math.min(happiness + 15, 100);
  energy = Math.max(energy - 15, 0);
  updateStats();
}

// 💤 Slapen
function sleep() {
  energy = Math.min(energy + 25, 100);
  happiness = Math.max(happiness - 10, 0);
  hunger = Math.max(hunger - 10, 0);
  updateStats();
}

// Eerste keer updaten
updateStats();
