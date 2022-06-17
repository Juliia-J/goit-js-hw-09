import Notiflix from 'notiflix';

const form = document.querySelector(".form");

form.addEventListener("submit", event => {
  const {
    elements: { delay, step, amount }
  } = event.currentTarget;

  console.log(`delay: ${delay.value}, step: ${step.value}, amount: ${amount.value}`);
  event.preventDefault()

  for (let i = 0; i < amount.value; i += 1) {
    // let delay = delay.value + step.value;
    createPromise(i, delay = delay.value + step.value)
      .then(value => {
        Notiflix.Notify.success(value);
      })
      .catch(error => {
        Notiflix.Notify.failure(error);
      });
  }
}
);

  
function createPromise(position, delay) {
return new Promise((resolve, reject) => {
  setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
});
}
