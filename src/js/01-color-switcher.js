// Cerinta o regasesti in fisierul cerinte_teme

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

let intervalId;

function startColorChange() {
  // dezactivez butonul "Start"
  document.querySelector('[data-start]').disabled = true;

  // activez butonul "Stop"
  document.querySelector('[data-stop]').disabled = false;

  // Schimb culoarea o data pe secunda
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColorChange() {
  // activez butonul "Start"
  document.querySelector('[data-start]').disabled = false;

  // dezactivez butonul "Stop"
  document.querySelector('[data-stop]').disabled = true;

  // opresc schimbarea culorii de fundal
  clearInterval(intervalId);
}

// adaug evenimente pentru butoane
document
  .querySelector('[data-start]')
  .addEventListener('click', startColorChange);
document
  .querySelector('[data-stop]')
  .addEventListener('click', stopColorChange);
