# TDD Array Methods

We're going to learn test-driven development _and_ practice JavaScript array methods.

## Test-driven development

Test-driven development (TDD) is a methodology where you write tests _before_ you write any code. This forces you to think through exactly how your code should behave. It's kind of like planning an essay before you start writing it. The iterative process of writing each test is supposed to help with solving a problem too.

### TDD process

TDD generally follows the "red, green, refactor" cycle.

1. #### Red
   Write a test that fails. This is important: if you never see your test fail you might have a false positive (a test that passes even if your code is broken).
1. #### Green
   Write as little code as possible to make the test pass. Make sure you don't break any existing tests.
1. #### Refactor
   Change your code to improve it (if necessary). You have passing tests to tell you if you break anything.
1. #### Repeat
   Go through the cycle until you think you have a complete working solution

### TDD example

Let's run through the process by creating a `double` function using TDD. First we write a failing test:

```js
test("double(2) should be 4", t => {
  t.equal(double(2), 4);
});
```

Then we write as little code as we need to make the test pass:

```js
function double(x) {
  return 4;
}
```

This will feel a bit contrived for a problem where we already know what the final code should be. The idea is not to try and solve the whole problem in one go—TDD is a way to help you solve a harder problem by iterating through solutions.

Then we refactor, if needed. Since we can't make this any simpler let's keep going and repeat the cycle. We need another failing test:

```js
test("double(4) should be 8", t => {
  t.equal(double(4), 8);
});
```

Once we see that fail we can amend our function to make it pass:

```js
function double(x) {
  if (x === 4) return 8;
  return 4;
}
```

Once the test passes we can try to refactor our function to remove repetition. Instead of listing every possible input/output, we can see that we need to return the input multiplied by two each time.

```js
function double(x) {
  return x * 2;
}
```

This solution looks complete, so we can end the cycle here. It might be worth adding more tests for edge-cases, but TDD has helped us solve the problem itself.

If you're confused about the TDD process at the end of the workshop you can check out the [tdd-explanation](./solution/tdd-explanation.js) solution for a step-by-step guide.

## Workshop

We're going to re-implement some useful JavaScript array methods using TDD. For each method you should use TDD to **write tests first**, then write the actual code. Work in pairs and alternate: person 1 writes a test, then person 2 makes it pass. Then person 2 writes the next test and person 1 makes that pass.

### Setup

1. Clone this repo
1. Open `index.html` in your browser
1. Alternate writing tests and code in `index.test.js` and `index.js`
1. You can see test results in the console

### `map`

[`Array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) is used to transform each value in an array. It takes a function as an argument, which is called with each item in the array in turn. Whatever that function returns is used as the new value in the array.

```js
[1, 2, 3].map(x => x + 1); // [2, 3, 4]
```

Use TDD to write your own `map` function that behaves like the built-in one. The only difference should be that yours takes the array as the first argument:

```js
map([1, 2, 3], x => x + 1); // [2, 3, 4]
```

There is one passing test and one failing test to get you started.

### `filter`

[`Array.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) is used to remove elements you don't want from an array. It takes a function as an argument, which is called with each item in the array in turn. If the function returns true the element is kept, otherwise it is filtered out.

```js
[1, 2, 3].filter(x => x > 1); // [2, 3]
```

Use TDD to write your own `filter` function that behaves like the built-in one. The only difference should be that yours takes the array as the first argument:

```js
filter([1, 2, 3], x => x > 1); // [2, 3]
```

### `every`

[`Array.every()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) is used to check whether every element in an array meets a certain criteria. It takes a function as an argument, which is called with each item in the array in turn. If the function argument returns false for _any_ of the elements the iteration stops and `false` is immediately returned. If the function argument returns true for _every_ element then `true` is returned.

```js
[1, 2, 3].every(x => x > 0); // true
```

Use TDD to write your own `every` function that behaves like the built-in one. The only difference should be that yours takes the array as the first argument:

```js
every([1, 2, 3], x => x > 0); // true
```

### `some`

[`Array.some()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) is used to check whether at least one element in an array meets a certain criteria. It takes a function as an argument, which is called with each item in the array in turn. If the function argument returns true for _any_ of the elements the iteration stops and `true` is immediately returned. If the function argument returns false for _some_ element then `false` is returned.

```js
[1, 2, 3].some(x => x > 2); // true
```

Use TDD to write your own `some` function that behaves like the built-in one. The only difference should be that yours takes the array as the first argument:

```js
some([1, 2, 3], x => x > 2); // true
```

### `find`

[`Array.find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) is used to get the first element in an array that meets a certain criteria. It takes a function as an argument, which is called with each item in the array in turn. If the function returns true for the element the iteration stops and the element is immediately returned. If the function returns false for every element then `undefined` is returned.

```js
[1, 2, 3].find(x => x > 1); // 2
```

Use TDD to write your own `find` function that behaves like the built-in one. The only difference should be that yours takes the array as the first argument:

```js
find([1, 2, 3], x => x > 1); // 2
```

### `reduce`

[`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) is used to transform an array into a single value. It takes a function and an inital "accumulator" value as arguments. This function is called with the current accumulator value and each item in the array in turn. Whatever you return from the function is used as the accumulator value for the next iteration. After the final element the final accumulator value is returned.

```js
[1, 2, 3].reduce((total, x) => total + x, 0);
// 1st loop (total = 0, x = 1) => 0 + 1; returns new total: 1
// 2nd loop (total = 1, x = 2) => 1 = 2; returns new total: 3
// 3rd loop (total = 3, x = 3) => 3 + 3; returns new total: 6
```

Use TDD to write your own `reduce` function that behaves like the built-in one. The only difference should be that yours takes the array as the first argument:

```js
reduce([1, 2, 3], (total, x) => total + x, 0); // 6
```

### Stretch goal: `flat`

[`Array.flat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) is used to turn nested arrays into "flattened" ones. It takes an optional depth argument to flatten arrays nested more than one level down.

```js
[1, [2, 3]].flat(); // [1, 2, 3]
[1, [2, [3]]].flat(2); // [1, 2, 3]
```

Use TDD to write your own `flat` function that behaves like the built-in one. The only difference should be that yours takes the array as the first argument:

```js
flat([1, [2, 3]]); // [1, 2, 3]
flat([1, [2, [3]]], 2); // [1, 2, 3]
```

**Hint**: recursion or `while` loops will be helpful.
