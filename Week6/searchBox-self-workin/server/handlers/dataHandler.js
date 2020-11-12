const fs = require('fs');
const path = require('path');
const missingHandler = require('./missingHandler');

function dataHandler(req, res) {
  const filePath = path.join(__dirname, '..', 'data.json');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      res.statusCode = 404;
      missingHandler(req, res);
    } else {
      res.setHeader('content-type', 'application/json');
      res.end(file);
    }
  });
}
module.exports = dataHandler;
