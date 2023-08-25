const colorContainerEl = document.querySelector(".color-container");

for (let i = 0; i < 54; i++) {
  const colorEl = document.createElement("div");
  colorEl.classList.add("color");
  colorContainerEl.appendChild(colorEl);
}
const colorEls = document.querySelectorAll(".color");

const randomColor = () => {
  const charLength = 6;
  const char = "123456789abcdef";
  let color = "";
  for (let i = 0; i < charLength; i++) {
    const randomNum = Math.floor(Math.random() * char.length);
    color += char.substring(randomNum, randomNum + 1);
  }
  return color;
};
const genarateColor = () => {
  colorEls.forEach((color) => {
    let newColor = randomColor();
    color.style.backgroundColor = "#" + newColor;
    color.innerText = "#" + newColor;
  });
};
genarateColor();
