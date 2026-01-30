let hunger = 50;
let energy = 50;
let happiness = 50;

const hungerBar = document.getElementById("hungerBar");
const energyBar = document.getElementById("energyBar");
const happinessBar = document.getElementById("happinessBar");

const hungerPercent = document.getElementById("hungerPercent");
const energyPercent = document.getElementById("energyPercent");
const happinessPercent = document.getElementById("happinessPercent");

const petEl = document.querySelector(".pet");
const speech = document.getElementById("tamaSpeech");
const bgMusic = document.getElementById("bgMusic");

function updateStats() {
  hungerBar.style.width = hunger + "%";
  energyBar.style.width = energy + "%";
  happinessBar.style.width = happiness + "%";

  hungerPercent.textContent = hunger + "%";
  energyPercent.textContent = energy + "%";
  happinessPercent.textContent = happiness + "%";

  if (hunger > 90) {
    petEl.src = "nooo.png";
    speech.textContent = "Ik voel me misselijk 🤢";
  } else if (hunger < 25) {
    petEl.src = "Adam.png";
    speech.textContent = "Ik heb honger 🍎";
  } else if (energy < 25) {
    petEl.src = "slapen.png";
    speech.textContent = "Ik ben moe 😴";
  } else if (happiness < 25) {
    petEl.src = "dam.png";
    speech.textContent = "Ik ben verdrietig 😢";
  } else {
    petEl.src = "Adamm.png";
    speech.textContent = "Alles gaat goed 😊";
  }
}

function feed() {
  hunger = Math.min(hunger + 15, 100);
  happiness = hunger > 90
    ? Math.max(happiness - 10, 0)
    : Math.min(happiness + 5, 100);
  updateStats();
}

function play() {
  happiness = Math.min(happiness + 15, 100);
  energy = Math.max(energy - 15, 0);
  hunger = Math.max(hunger - 10, 0);
  updateStats();
}

function sleepPet() {
  energy = Math.min(energy + 25, 100);
  hunger = Math.max(hunger - 10, 0);
  updateStats();
}

setInterval(() => {
  hunger = Math.max(hunger - 1, 0);
  energy = Math.max(energy - 1, 0);
  happiness = Math.max(happiness - 1, 0);
  updateStats();
}, 4000);

document.addEventListener("click", () => {
  bgMusic.volume = 0.3;
  bgMusic.play();
}, { once: true });

updateStats();
