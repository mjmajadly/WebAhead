// testing map()

test("map() should return an array with the same number of elements", t => {
  const result = map([1], () => {});
  t.equal(result.length, 1);
});

test("map() should apply function argument array elements", t => {
  const result = map([1], x => x + 1);
  const expected = [2];
  t.equal(result[0], expected[0], "Array item should have 1 added to it");
});

test("map() should apply function argument to every array element", t => {
  const result = map([1, 2, 3], x => x + 1);
  t.equal(result[0], 2);
  t.equal(result[1], 3);
  t.equal(result[2], 4);
});

test("map() should pass item index in to function argument", t => {
  const result = map(["hello", "world"], (word, index) => `${word}-${index}`);
  t.equal(result[0], "hello-0");
  t.equal(result[1], "world-1");
});

// testing filter()

test("filter() should return an array with the same elements if they all pass the test", t => {
  const result = filter([1], () => true);
  t.equal(result[0], 1);
});

test("filter() should remove elements that don't pass the test from the array", t => {
  const result = filter([1, 100], x => x > 10);
  t.equal(result[0], 100);
});

// testing every()

test("every() should return true if every element passes the test", t => {
  const result = every([100, 200], x => x > 10);
  t.equal(result, true);
});

test("every() should return false if any element fails the test", t => {
  const result = every([1, 100], x => x > 10);
  t.equal(result, false);
});

// testing some()

test("some() should return true if any element passes the test", t => {
  const result = some([100, 200], x => x > 10);
  t.equal(result, true);
});

test("some() should return false if every element fails the test", t => {
  const result = some([1, 2], x => x > 10);
  t.equal(result, false);
});

// testing find()

test("find() should return the first element that passes the test", t => {
  const result = find([100, 200], x => x > 10);
  t.equal(result, 100);
});

test("find() should return the undefined if no element passes the test", t => {
  const result = find([1, 2], x => x > 10);
  t.equal(result, undefined);
});

// testing reduce()

test("reduce() should call the fn for each element and use the return value as the new accumulator", t => {
  const result = reduce([1, 2, 3], (total, x) => total + x, 0);
  t.equal(result, 6);
});

test("reduce() should use the first element of array if no accumulator passed", t => {
  const result = reduce([1, 2, 3], (total, x) => total + x);
  t.equal(result, 6);
});

// testing flat()

test("flat() should turn a nested array into a single-level array", t => {
  const result = flat([1, [2, 3]]);
  t.equal(result[0], 1);
  t.equal(result[1], 2);
  t.equal(result[2], 3);
});

test("flat() should flatten nested arrays 2 levels deep", t => {
  const result = flat([1, [2, [3]]], 2);
  t.equal(result[0], 1);
  t.equal(result[1], 2);
  t.equal(result[2], 3);
});
