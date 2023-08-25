const trailerEl = document.querySelector(".trailer-container");
const btnEl = document.querySelector("button");
const iconEl = document.querySelector("i");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", () => {
  trailerEl.classList.remove("active");
});
iconEl.addEventListener("click", () => {
  trailerEl.classList.add("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});
