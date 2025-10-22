//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (input.value === '') {
        if (index > 0) {
          inputs[index - 1].focus();
          inputs[index - 1].value = '';
        }
      } else {
        input.value = '';
      }
    }
  });

  input.addEventListener('paste', (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').slice(0, 6);
    pasteData.split('').forEach((char, i) => {
      if (inputs[i]) {
        inputs[i].value = char;
      }
    });
    if (pasteData.length < 6) {
      inputs[pasteData.length].focus();
    }
  });
});

// Autofocus on first input on page load
window.addEventListener('load', () => {
  inputs[0].focus();
});
