document.addEventListener('DOMContentLoaded', () => {
  const rangeInput = document.getElementById('font-size-control');
  const textSpan = document.getElementById('text');


  function setInitialFontSize() {
    textSpan.style.fontSize = rangeInput.value + 'px';
  }

  setInitialFontSize();

  rangeInput.addEventListener('input', () => {
    textSpan.style.fontSize = rangeInput.value + 'px';
  });
});