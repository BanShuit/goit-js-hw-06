function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
    const amount = input.value;
    const boxes = [];
    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        const size = boxesContainer.children.length * 10 + 30 + "px";
        box.style.width = size;
        box.style.height = size;
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.append(box);
    }
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}

