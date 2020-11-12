const fs = require('fs');
const path = require('path');
const missingHandler = require('./missingHandler');

function homeHandler(request, res) {
  const filePath = path.join(__dirname, '..', '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) => {
    res.setHeader('content-type', 'text/html');
    if (error) {
      res.statusCode = 404;
      missingHandler(req, res);
    } else {
      res.end(file);
    }
  });
}
module.exports = homeHandler;
