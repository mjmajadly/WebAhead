# Learn Integration Testing

Integration tests check that whole features of your code work correctly. This usually involves checking several _units_ of code at once.

## Testing application logic

Usually some of your code is devoted to "application logic". This is where you coordinate several other bits of code, possibly with branching logic depending on some conditions. Imagine we were building a calculator:

```js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function calculate(a, sign, b) {
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
```

We could individually unit test all the small math functions, but by writing tests for `calculate` we're not only testing those smaller functions, we're testing how our application _integrates_ them together. If we only unit tested our maths functions we could have a totally broken application, if there was a mistake in our `switch` for example.

### Challenge

1. Open `workshop/index.js` in your editor and read the `calculate` function
1. Open `workshop/index.test.js` and write tests for the `calculate` function.
   - You should have one test for each branch of the switch statement.
   - Open `workshop/index.html` and check the console to see your test results
   - Don't worry about the UI on the page for now
1. What happens if we provide non-numerical input?
   - Write a test that calls `calculate` with strings instead of numbers.
1. Change `calculate` so that it can handle numbers passed as strings
   - hint: have a look at [`parseFloat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

## Testing UI logic

Integration tests can also check where our code integrates with other people's. For example web apps often have to update the DOM to show results to the user.

We can write our tests to simulate a real user browsing the site. For example if we have a form that uppercases the user input:

```html
<form>
  <label for="text">Enter text to be uppercased</label>
  <input type="text" id="text" name="text" />
  <button type="submit">Submit</button>
  <output id="result"></output>
</form>
<script>
  document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    const uppercased = event.target.elements.text.value.toUpperCase(); // uppercase the value of the name="text" input
    result.textContent = uppercased; // update the result element
    event.target.reset(); // reset the form inputs
  });
</script>
```

We can write an automated test that does exactly what we would do manually:

1. Find the input we want
1. Change the input's value
1. Click the submit button
1. Check the result on the page is what we expect

```js
test("Uppercase feature correctly changes the user's input and updates the page", t => {
  const input = document.querySelector("input"); // step 1
  input.value = "hello world"; // step 2
  const submitButton = document.querySelector("button[type='submit']");
  submitButton.click(); // step 3
  const result = document.querySelector("#result");
  t.equal(result.textContent, "HELLO WORLD"); // step 4
  result.textContent = ""; // reset so it doesn't affect the page/other tests
});
```

### Challenge

1. Open `workshop/index.html` in your editor. You should see a rudimentary calculator form.
1. Add a test to `workshop/index.test.js` that checks the form works correctly, just like the example above.
