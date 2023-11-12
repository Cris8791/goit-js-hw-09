function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

let intervalId;

function startColorChange() {
  // Dezactivează butonul "Start"
  document.querySelector('[data-start]').disabled = true;

  // Activează butonul "Stop"
  document.querySelector('[data-stop]').disabled = false;

  // Schimbă culoarea de fundal o dată pe secundă
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColorChange() {
  // Activează butonul "Start"
  document.querySelector('[data-start]').disabled = false;

  // Dezactivează butonul "Stop"
  document.querySelector('[data-stop]').disabled = true;

  // Oprește schimbarea culorii de fundal
  clearInterval(intervalId);
}

// Adaugă evenimente pentru butoane
document
  .querySelector('[data-start]')
  .addEventListener('click', startColorChange);
document
  .querySelector('[data-stop]')
  .addEventListener('click', stopColorChange);
