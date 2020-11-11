const fs = require('fs');
const path = require('path');
const missingHandler = require('./missing');

// filter item to arr lower case
const lowercase = (arr) => {
  return arr.map((v) => v.charAt(0) + v.slice(1).toLowerCase());
};
function filterItems(arr, query) {
  //query would be the data you type in the search. lets say "al"
  return arr.filter(function (element) {
    //represents each element of the array when iterating through the array
    return element.toLowerCase().indexOf(query.toLowerCase()) > -1;
    // In the first iteration of the filter function, this would be the same as:
    // ‘alex’.toLowerCase().indexOf(‘alz’.toLowerCase()) > - 1
    // The indexOf function returns an integer between 0 (inclusive) and the length of the string (exclusive) which represents the first index in the string where the character(s) are found. It will return -1 if it does not find a match. If ‘alex’.toLowerCase().indexOf(‘al’.toLowerCase()) is greater than 1, then the expression evaluates to true and the filter function adds the current element (element) to a new “filtered” array.
  });
}

function autocompHandler(req, res) {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    const namesFile = path.join(__dirname, '..', 'girlnaes.mtxt');
    // const namesFile = path.join(__dirname, "..", "boynamestwo.txt");

    fs.readFile(namesFile, 'utf-8', (error, file) => {
      if (error) {
        console.log(error);
        missingHandler(req, res);
      }

      // const names = file.split("\n");
      const names = file.split(',');
      // console.log("names " + names);
      const result = filterItems(lowercase(names), body);
      // console.log("names " + names);
      console.log('result ' + result);
      res.writeHead(200, { 'content-type': 'text/html' });
      console.log(JSON.stringify(result));
      res.end(JSON.stringify(result));
    });
  });
}
module.exports = autocompHandler;
