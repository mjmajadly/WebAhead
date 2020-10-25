test("Can add numbers", t => {
  t.equal(calculate(1, "+", 2), 3);
  t.equal(calculate(100000, "+", 27.5), 100027.5);
});

test("Can subtract numbers", t => {
  t.equal(calculate(3, "-", 2), 1);
  t.equal(calculate(100000, "-", 27.5), 99972.5);
});

test("Can multiply numbers", t => {
  t.equal(calculate(4, "*", 3), 12);
  t.equal(calculate(10.5, "*", 27.5), 288.75);
});

test("Can divide numbers", t => {
  t.equal(calculate(4, "/", 2), 2);
  t.equal(calculate(10.5, "/", 2.5), 4.2);
});

test("Errors for invalid sign", t => {
  t.equal(calculate(4, "$", 2), "Please enter a valid sign (+, -, *, /)");
});

test("Can add string numbers", t => {
  t.equal(calculate("1", "+", "2"), 3);
});

test("titleCase feature correctly changes the user's input and updates the page", t => {
  const aInput = document.querySelector("input[name='a']");
  aInput.value = "2";
  const signInput = document.querySelector("select");
  signInput.value = "*";
  const bInput = document.querySelector("input[name='b']");
  bInput.value = "3";
  const submitButton = document.querySelector("button[type='submit']");
  submitButton.click();
  const result = document.querySelector("#result");
  t.equal(result.textContent, "6");
  result.textContent = "";
});
