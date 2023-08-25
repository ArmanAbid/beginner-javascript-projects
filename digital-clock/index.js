const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

const updateClock = () => {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  if (hour > 12) {
    ampmEl.innerText = "PM";
  }
  if (hour > 12) {
    hour = hour - 12;
  }
  hour < 10 ? (hour = "0" + hour) : hour;
  minute < 10 ? (minute = "0" + minute) : minute;
  second < 10 ? (second = "0" + second) : second;

  hourEl.innerText = hour;
  minuteEl.innerText = minute;
  secondEl.innerText = second;
  setTimeout(() => {
    updateClock();
  }, 1000);
};
updateClock();
