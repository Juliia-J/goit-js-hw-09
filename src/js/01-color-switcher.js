const refs = {
  start: document.querySelector("[data-start]"),
  stop: document.querySelector("[data-stop]"),
};

let interval = null;

function getRandomHexColor() {
  return document.body.style.backgroundColor =`#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
  
refs.start.addEventListener("click", () => {
  interval = setInterval(() => getRandomHexColor(), 1000);
  refs.stop.removeAttribute('disabled');
  refs.start.setAttribute('disabled', true);
});

refs.stop.addEventListener("click", () => {
  clearInterval(interval);
  refs.start.removeAttribute('disabled');
  refs.stop.setAttribute('disabled', true);
});