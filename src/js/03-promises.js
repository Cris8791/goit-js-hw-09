// Cerinta o regasesti in fisierul cerinte_teme

// Notiflix este o librarie folosita pt funcționalitatile de notificare
import Notiflix from 'notiflix';

// adaugare handler pt evenimentul DOMContentLoaded, care este declansat
// cand documentul HTML a fost complet incarcat si parsat.
document.addEventListener('DOMContentLoaded', function () {
  // adaugare handler pt evenimentul "submit" al formularului.
  const form = document.querySelector('.form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // extragere valori introduse in campurile formularului:
    // întârzierea(delay), pas(step) și cantitate(amount).
    const delay = parseInt(form.elements['delay'].value, 10);
    const step = parseInt(form.elements['step'].value, 10);
    const amount = parseInt(form.elements['amount'].value, 10);

    // bucla for care rulează de la 1 până la amount
    for (let i = 1; i <= amount; i++) {
      const position = i;
      const currentDelay = delay + (i - 1) * step;

      // pt fiecare promisiune, se adauga un handler then pentru rezolvare si
      // un handler catch pentru respingere si se afișează notificari
      // corespunzatoare cu ajutorul Notiflix
      createPromise(position, currentDelay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          // Folosește direct Notiflix.Notify.Failure pentru tratarea eșecului
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
    }
  });

  // definire functie createPromise care intoarce o promisiune.
  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      // se decide aleatoriu daca promisiunea  ar trebui sa fie rezolvata sau respinsa;
      // promisiunea este rezolvata daca valoarea generata aleatoriu este mai mare decat 0.3, altfel este respinsă
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
