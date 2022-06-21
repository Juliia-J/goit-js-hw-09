import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    timer: document.querySelector(".timer"),
    startButton: document.querySelector("[data-start]"),
    input: document.querySelector("#datetime-picker"),
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]"),
}

let timerId = null;
let turgetDate = 0;
let selectedDates = 0;
refs.startButton.disabled = true;

refs.startButton.setAttribute('disabled', 'disabled');
refs.startButton.addEventListener('click', () => {
 return timer.start();
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
     console.log(selectedDates);
      if (selectedDates[0] < options.defaultDate) {
        window.alert("Please choose a date in the future");
        return;
      } else {
        refs.startButton.removeAttribute('disabled');
        turgetDate = selectedDates[0];
    }
  },
};

flatpickr('#datetime-picker', options);
   
const timer = {
  isActiv: false,
  start() {
    if (this.isActiv) {
      return
    }
    this.isActiv = true;

   this.timerId = setInterval(() => {
      const ms = turgetDate - Date.now();
      const msComponents = convertMs(ms);
      timerUpdate(msComponents);
      console.log(msComponents);
    }, 1000);
  },
};

function timerUpdate(ms) {
  refs.days.textContent = convertMs(ms).days;
  refs.hours.textContent = convertMs(ms).hours;
  refs.minutes.textContent = convertMs(ms).minutes;
  refs.seconds.textContent = convertMs(ms).seconds;
}

function convertMs(ms) {
  ms = selectedDates - Date.now();
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
