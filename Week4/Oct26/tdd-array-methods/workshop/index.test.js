// testing map()

test("map() should return an array with the same number of elements", t => {
  const result = map([1], () => {});
  t.equal(result.length, 1);
});

test("map() should transform each element of the array using the fn argument", t => {
  const result = map([1], x => x + 1);
  t.equal(result[0], 2);
});

test("map() should transform each element of the array using the fn argument", t => {
  const result = map([1], "stringg");
  t.equal(result, 2);
});

test("map() should transform each element of the array using the fn argument", t => {
  const result = map(1, x => x + 1);
  t.equal(result, 2);
});

test("map() should transform each element of the array using the fn argument", t => {
  const result = map([1,2,3], x => x + 1);
  t.equal(result[0], 2);
  t.equal(result[1], 3);
  t.equal(result[2], 4);
});

// test("map() should transform each element of the array using the fn argument", t => {
//   const result = map([1,"train",3], x => x + 1);
//   t.equal(result[0], 2);
//   t.equal(result[1], 3);
//   t.equal(result[2], 4);
// });


test("filter() removes elements i dont want", t => {
  const result = filter([1, 2, 3], x => x>1);
  t.equal(result[0], 2);
  t.equal(result[1], 3);
});

test("every() should remove the elemnts i dont want", t => {
  var result = every([1, 2, 3], x => x>1);
  t.equal(result, false);
  result = every([1, 2, 3], x => x>0);
  t.equal(result, true);

});
test("some() should remove the elemnts i dont want", t => {
  var result = some([1, 2, 3], x => x>1);
  t.equal(result, true);
  result = some([1, 2, 3], x => x>0);
  t.equal(result, true);
  result = some([1, 2, 3], x => x>5);
  t.equal(result, false);
});

test("find() should remove the elemnts i dont want", t => {
  var result = find([1, 2, 3], x => x>2);
  t.equal(result, 3);
  result = find([1, 2, 3], x => x>0);
  t.equal(result, 1);
  result = find([1, 2, 3], x => x>5);
  t.equal(result, undefined);

});

 // 6
 test("reduce() should remove the elemnts i dont want", t => {
  var result = reduce([2, 3, 4], (total, x) => total + x, 0);
  t.equal(result, 9);
});

test("reduce() should remove the elemnts i dont want", t => {
  var result = reduce([ "m", "a", "r", "i", "o"], (total, x) => total + x, "");
  t.equal(result, "mario");
});

// test("reduce() should remove the elemnts i dont want", t => {
//   var result = reduce(["mario"], (total, x) => total + x, "");
//   t.equal(result.name, "mario");
// });