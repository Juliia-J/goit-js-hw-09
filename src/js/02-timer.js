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
let selectedTime = null;
let selectedDates = [];
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
  onClose(selectedDates, selectedTime) {
      if (selectedDates[0].getTime() <= options.defaultDate) {
          refs.startButton.disabled = true;
          window.alert("Please choose a date in the future");
      } else {
          refs.startButton.disabled = false;
          // console.log(selectedTime);
          return selectedTime;
    }
  },
};

flatpickr('#datetime-picker', options);
   
const timer = {
  isActiv: false,
  start() {
    if (this.isActiv) {
      return;
    }
    this.isActiv = true;

    setInterval(() => {
      const ms = selectedDates - Date.now();
      const msComponents = convertMs(ms);
      timerUpdate(msComponents);
      console.log(selectedTime);
    }, 1000);
  },
};

// function timerUpdate ({days, hours, minutes, seconds}){
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
