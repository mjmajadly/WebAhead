// testing map()

test("map() should return an array with the same number of elements", t => {
  const result = map([1], () => {});
  t.equal(result.length, 1);
});

test("map() should transform each element of the array using the fn argument", t => {
  const result = map([1], x => x + 1);
  t.equal(result[0], 2);
});
