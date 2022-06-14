const refs = {
  start: document.querySelector("#data-start"),
  stop: document.querySelector("#data-stop"),
};

let interva = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

setRandomColor = () => {
  const color = colors[getRandomHexColor(colors.length - 1)];
  console.log(color);
  document.body.style.backgroundColor = color;
}
  
refs.start.addEventListener("click",  e => interval = interval ?
  interval : setInterval(() => setRandomColor(), 1000));

refs.stop.addEventListener("click", () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
});