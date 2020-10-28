// function map(array) {
//   return array;
// }

// map([1], x => x + 1);

function map(array, dosomething) {
  if (typeof dosomething !== "function") return console.error("not an function")
  if (!Array.isArray(array)) return console.error("not an array")
  const newarr = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      return console.error("you have a string dumdum")
    }

    const element = array[i];
    const result = dosomething(element);
    newarr.push(result);
  }
  return newarr;
}


function filter(array, dosomething) {
  if (typeof dosomething !== "function") return console.error("not an function")
  if (!Array.isArray(array)) return console.error("not an array")
  const newarr = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const result = dosomething(element);
    // console.log(result);

    if (result === true) {
      newarr.push(element);
    }
  }
  return newarr;
}


function every(array, dosomething) {
  if (typeof dosomething !== "function") return console.error("not an function")
  if (!Array.isArray(array)) return console.error("not an array")
  const newarr = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const result = dosomething(element);
    // console.log(result);
    if (result === false) {
      console.error("false")
      return false;
    }
  }
  console.log("true")
  return true;
}

function some(array, dosomething) {
  if (typeof dosomething !== "function") return console.error("not an function")
  if (!Array.isArray(array)) return console.error("not an array")
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const result = dosomething(element);
    // console.log(result);
    if (result === true) {
      console.log("true")
      return true;
    }
  }
  console.log("false")
  return false;
}

function find(array, dosomething) {
  if (typeof dosomething !== "function") return console.error("not an function")
  if (!Array.isArray(array)) return console.error("not an array")
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const result = dosomething(element);
    // console.log(result);
    if (result === true) {
      return element;
    }
  }
  // console.log("false")
  return undefined;
}

function reduce(array, dosomething, inc) {
  var newInc = inc;
  if (typeof dosomething !== "function") return console.error("not an function")
  if (!Array.isArray(array)) return console.error("not an array")
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    newInc = dosomething(newInc, element); 
    console.log(newInc)
    }
  // console.log("false")
  return newInc;
}

