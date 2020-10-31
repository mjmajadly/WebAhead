let data = [
  {
    country: "China",
    pop: 1409517397,
  },
  {
    country: "India",
    pop: 1339180127,
  },
  {
    country: "USA",
    pop: 324459463,
  },
  {
    country: "Indonesia",
    pop: 263991379,
  },
];
// console.log(data);
let value22 = data.reduce(function (accumulator, value) {
  accumulator[value.country] = value.pop;
  return accumulator;
}, {});

console.log(value22);
let arr = [];
let result = Object.keys(value22).map(function (key) {
  // Using Number() to convert key to number type
  // Using obj[key] to retrieve key value
  return {
    country: key,
    pop: value22[key],
  };
});

console.log(result);

var arrsum = [
  [1, 2, 3],
  [1, 2, 3],
  [4, 5, 6],
];
let newval = 0;
let total = 0;
for (i = 0; i < arrsum.length; i++) {
  let summ = arrsum[i].reduce(function (accumulator, value) {
    // console.log("acc: " + accumulator);
    // console.log("val: " + value);

    newval = accumulator + value;
    // console.log(newval);
    return newval;
  }, 0);
  total += summ;
  console.log(total);
  //   summ = 0;
  //   accumulator = 0;
}
