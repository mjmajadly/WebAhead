const fs = require('fs');
const path = require('path');
const missingHandler = require('./missingHandler');

const types = {
  html: 'text/html',
  css: 'text/css',
  js: 'application/javascript',
  jpg: 'image/jpeg',
  ico: 'image/x-icon',
};

function publicHandler(req, res) {
  const { url } = req;
  const urlArray = url.split('.');
  const extension = urlArray[1];
  const type = types[extension];

  const filePath = path.join(__dirname, '..', '..', url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      missingHandler(req, res);
    } else {
      res.writeHead(200, { 'content-type': type });
      res.end(file);
    }
  });
}

module.exports = publicHandler;
