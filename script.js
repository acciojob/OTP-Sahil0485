window.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.code');

  inputs[0].focus(); // focus first input on page load

  inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      const value = e.target.value;
      if (value && index < inputs.length - 1) {
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
          input.value = ''; // clear current field first
        }
        e.preventDefault(); // prevent default behavior
      } else if (e.key >= '0' && e.key <= '9') {
        // Allow number input only (optional improvement)
        input.value = ''; // clear current before typing
      } else if (e.key !== 'Tab') {
        e.preventDefault(); // block other keys like letters
      }
    });
  });
});
