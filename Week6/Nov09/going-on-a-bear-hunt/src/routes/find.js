// import path & url & fs & querystring
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const path = require('path');

module.exports = (request, response) => {
  const link = url.parse(request.url);
  const search = link.query;
  const obj = querystring.parse(search);
  const num = obj['bear'];

  const img = path.join(__dirname, '..', 'woods', `bear_${num}.jpg`);
  fs.readFile(img, (error, file) => {
    if (error) {
      response.writeHead(500, { 'content-type': 'text/html' });
      response.end('<h1>not found</h1>');
    } else {
      response.writeHead(200, { 'content-type': 'image/jpeg' });
      response.end(file);
    }
  });
  // use querystring to get the search argument and return the correct bear
};
