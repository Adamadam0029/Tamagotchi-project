// Startwaarden
let hunger = 50;
let energy = 50;
let happiness = 50;

// HTML elementen
const hungerEl = document.getElementById("hunger");
const energyEl = document.getElementById("energy");
const happinessEl = document.getElementById("happiness");
const petEl = document.querySelector(".pet");
const speech = document.getElementById("tamaSpeech");

// Update stats + emoji + speech
function updateStats() {
  hungerEl.textContent = hunger;
  energyEl.textContent = energy;
  happinessEl.textContent = happiness;

  // Emoji logica
  if (hunger < 20) {
    petEl.textContent = "😋"; 
  } 
  else if (energy < 20) {
    petEl.textContent = "😴";
  } 
  else if (happiness < 20) {
    petEl.textContent = "😞";
  } 
  else {
    petEl.textContent = "😊";
  }

  updateSpeech();
}

// 🗣️ Automatisch praten
function updateSpeech() {
  if (hunger < 30) {
    speech.textContent = "Ik heb honger 🍎";
  } 
  else if (energy < 30) {
    speech.textContent = "Ik ben moe 😴";
  } 
  else if (happiness < 30) {
    speech.textContent = "Ik ben verdrietig 😢";
  } 
  else {
    speech.textContent = "Ik voel me goed 😊";
  }
}

// 🍎 Eten
function feed() {
  hunger = Math.min(hunger + 10, 100);
  happiness = Math.min(happiness + 5, 100);
  updateStats();
}

// 🎮 Spelen
function play() {
  happiness = Math.min(happiness + 15, 100);
  energy = Math.max(energy - 15, 0);
  hunger = Math.max(hunger - 5, 0);
  updateStats();
}

// 💤 Slapen
function sleepPet() {
  energy = Math.min(energy + 25, 100);
  hunger = Math.max(hunger - 10, 0);
  updateStats();
}

// Eerste update
updateStats();

const bgMusic = document.getElementById("bgMusic");

document.addEventListener("click", () => {
    bgMusic.volume = 0.3;
    bgMusic.play();
  }, { once: true });

