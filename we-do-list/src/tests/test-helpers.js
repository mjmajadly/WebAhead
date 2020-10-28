function test(name, testFunction) {
  function equal(x, y, message = `Expected ${x} to equal ${y}`) {
    if (x === null) return console.error("null value given")
    if (x === y) {
      console.info("Pass: " + message);
    } else {
      console.error("Fail: " + message);
    }
  }

  function notEqual(x, y, message = `Expected ${x} not to equal ${y}`) {
    if (x !== y) {
      console.info("Pass: " + message);
    } else {
      console.error("Fail: " + message);
    }
  }

  function checkDelete(data, id, message = `Expected ${data} not to have id ${id}`) {
    // console.log(arr)
    // console.log(id)
    let flag = data.some(current => current.id === id)
    // console.log(flag)

    if (flag === false) {
      console.info("Deleted: " + message);
    } else {
      console.error("ItemFound: " + message);
    }
  }
  const assertions = {
    equal,
    notEqual,
    checkDelete
  };

  console.group(name);
  testFunction(assertions);
  console.groupEnd(name);
}
