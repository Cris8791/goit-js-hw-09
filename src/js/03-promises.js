import * as notiflix from 'notiflix';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('promiseForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const delay = parseInt(form.elements['delay'].value, 10);
    const step = parseInt(form.elements['step'].value, 10);
    const amount = parseInt(form.elements['amount'].value, 10);

    for (let i = 1; i <= amount; i++) {
      const position = i;
      const currentDelay = delay + (i - 1) * step;

      createPromise(position, currentDelay)
        .then(({ position, delay }) => {
          notiflix.Notify.Success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          notiflix.Notify.Failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
    }
  });

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;

      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }
});
