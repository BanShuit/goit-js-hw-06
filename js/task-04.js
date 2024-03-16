let counterValue = 0;

const valueSpan = document.getElementById('value');
const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');

incrementButton.addEventListener('click', () => {

    counterValue++;
    valueSpan.textContent = counterValue;
});

decrementButton.addEventListener('click', () => {

    counterValue--;
    valueSpan.textContent = counterValue;
});
