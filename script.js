const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    if (e.inputType === "insertText" && e.data && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (input.value === '') {
        if (index > 0) {
          inputs[index - 1].focus();
        }
      } else {
        input.value = ''; // clear value if not already empty
      }
    }
  });
});

// Auto focus first input on load
window.addEventListener('DOMContentLoaded', () => {
  inputs[0].focus();
});
