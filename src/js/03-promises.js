import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector(".form"),
  delay: document.querySelector(".form delay"),
  amount: document.querySelector(".form amount"),
  step: document.querySelector(".form step"),
}

let delayUse = Number(refs.delay.value);
const amountUse = refs.amount.value;
const stepUse = refs.step.value;

refs.form.addEventListener("submit", event => {
  const {
    elements: { delay, step, amount }
  } = event.currentTarget;

  console.log(`delay: ${delay.value}, step: ${step.value}, amount: ${amount.value}`);
  event.preventDefault()

  for (let position = 1; position <= amountUse; position ++) {
    createPromise(position, delayUse)
      .then(value => {
        Notiflix.Notify.success(value);
      })
      .catch(error => {
        Notiflix.Notify.failure(error);
      });
    delayUse += stepUse;
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
