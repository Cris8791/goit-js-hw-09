function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequire7bc7;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=i),i.register;// Cerinta o regasesti in fisierul cerinte_teme
// Notiflix este o librarie folosita pt funcționalitatile de notificare
var r=i("7Y9D8");// adaugare handler pt evenimentul DOMContentLoaded, care este declansat
// cand documentul HTML a fost complet incarcat si parsat.
document.addEventListener("DOMContentLoaded",function(){// adaugare handler pt evenimentul "submit" al formularului.
let t=document.querySelector(".form");t.addEventListener("submit",function(n){n.preventDefault();// extragere valori introduse in campurile formularului:
// întârzierea(delay), pas(step) și cantitate(amount).
let o=parseInt(t.elements.delay.value,10),i=parseInt(t.elements.step.value,10),l=parseInt(t.elements.amount.value,10);// bucla for care rulează de la 1 până la amount
for(let t=1;t<=l;t++){let n=t,l=o+(t-1)*i;// pt fiecare promisiune, se adauga un handler then pentru rezolvare si
// un handler catch pentru respingere si se afișează notificari
// corespunzatoare cu ajutorul Notiflix
// definire functie createPromise care intoarce o promisiune.
(function(e,t){return new Promise((n,o)=>{// se decide aleatoriu daca promisiunea  ar trebui sa fie rezolvata sau respinsa;
// promisiunea este rezolvata daca valoarea generata aleatoriu este mai mare decat 0.3, altfel este respinsă
let i=Math.random()>.3;setTimeout(()=>{i?n({position:e,delay:t}):o({position:e,delay:t})},t)})})(n,l).then(({position:t,delay:n})=>{/*@__PURE__*/e(r).Notify.success(`\u{2705} Fulfilled promise ${t} in ${n}ms`)}).catch(({position:t,delay:n})=>{/*@__PURE__*/e(r).Notify.failure(`\u{274C} Rejected promise ${t} in ${n}ms`)})}})});//# sourceMappingURL=03-promises.48a1a50f.js.map

//# sourceMappingURL=03-promises.48a1a50f.js.map
