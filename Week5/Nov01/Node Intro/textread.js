// const fs = require("fs");

// fs.readFile("blah.txt", "utf8", function (err, data) {
//   if (err) console.log("error", err);
//   // else console.log("works");
// });

//code works
var fs = require("fs");
fs.readFile("blah.txt", "utf8", function (err, data) {
  fs.writeFile("writeMe.txt", data, function (err, result) {
    if (err) console.log("error", err);
  });
});
