let currentInput = '';

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById("display").innerText = currentInput;
}

function calculateResult() {
  try {
    let result = eval(currentInput);
    document.getElementById("display").innerText = result;
    currentInput = '';
  } catch (error) {
    document.getElementById("display").innerText = 'Error';
    currentInput = '';
  }
}

function clearDisplay() {
  document.getElementById("display").innerText = '';
  currentInput = '';
}
