const container = document.querySelector(".container");
var boxes = [];
const colors = [
  "9e1fde",
  "8bde1f",
  "f1e717",
  "f17e17",
  "28edf9",
  "284af9",
  "ef14ea",
  "ff8f87",
  "e93832",
  "ff8fc4",
  "14093c",
  "155541",
  "ef9b17",
];

const actions = () => {
  for (let i = 0; i < 13; i++) {
    var box = document.createElement("div");
    boxes[i] = box;
    boxes[i].style.backgroundColor = `#${colors[i]}`;
    box.classList.add("box");
    container.appendChild(box);

    let color = document.createElement("h2");
    boxes[i].appendChild(color);

    boxes[i].addEventListener("mouseover", () => {
      boxes[i].childNodes[0].innerHTML = `#${colors[i]}`;
    });

    boxes[i].addEventListener("mouseout", () => {
      boxes[i].childNodes[0].innerHTML = "";
    });

    boxes[i].addEventListener("mousedown", () => {
      navigator.clipboard.writeText(`#${colors[i]}`);
      boxes[i].childNodes[0].innerHTML = "Copied!";
    });

    boxes[i].addEventListener("mouseup", () => {
      boxes[i].childNodes[0].innerHTML = `#${colors[i]}`;
    });
  }
};

actions();
