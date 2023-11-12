// Cerinta o regasesc in fisierul cerinte_teme

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate > new Date()) {
      document.querySelector('[data-start]').disabled = false;
    } else {
      document.querySelector('[data-start]').disabled = true;
      // window.alert('Please choose a date in the future');
      notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimer(ms) {
  const { days, hours, minutes, seconds } = convertMs(ms);

  document.querySelector('[data-days]').textContent = addLeadingZero(days);
  document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('[data-minutes]').textContent =
    addLeadingZero(minutes);
  document.querySelector('[data-seconds]').textContent =
    addLeadingZero(seconds);
}

document.querySelector('[data-start]').addEventListener('click', function () {
  this.disabled = true;

  let timeDiff =
    new Date(document.querySelector('#datetime-picker').value) - new Date();

  const timerInterval = setInterval(function () {
    updateTimer(timeDiff);

    if (timeDiff <= 0) {
      clearInterval(timerInterval);
      notiflix.Notify.success('Countdown has ended!');
    }

    timeDiff -= 1000;
  }, 1000);
});
