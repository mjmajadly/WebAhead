const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const addingstring = (a, b) => a.concat(b);

function calculate(a, sign, b) {
  if (typeof a === 'string' || typeof b === 'string') {
    switch (sign) {
      case "+":
      case "-":
      case "*":
      case "/":
        return addingstring(a, b);
    }
  }
  else {
    switch (sign) {
      case "+":
        return add(a, b);
      case "-":
        return subtract(a, b);
      case "*":
        return multiply(a, b);
      case "/":
        return divide(a, b);
      default:
        return "Please enter a valid sign (+, -, *, /)";
    }
  }
}

document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();
  const a = event.target.elements.a.value;
  const sign = event.target.elements.sign.value;
  const b = event.target.elements.b.value;
  const answer = calculate(a, sign, b);
  document.querySelector("#result").textContent = answer;
  event.target.reset();
});
