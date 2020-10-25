const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function calculate(a, sign, b) {
  const numA = parseFloat(a);
  const numB = parseFloat(b);
  switch (sign) {
    case "+":
      return add(numA, numB);
    case "-":
      return subtract(numA, numB);
    case "*":
      return multiply(numA, numB);
    case "/":
      return divide(numA, numB);
    default:
      return "Please enter a valid sign (+, -, *, /)";
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
