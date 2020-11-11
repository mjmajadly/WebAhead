// import path & fs
const fs = require('fs');
const path = require('path');

module.exports = (request, response) => {
  //use path & fs to return bear one
  // bonus challenge: think about what status codes to send back in case of errors...

  const img = path.join(__dirname, '..', 'woods', 'bear_one.jpg');
  fs.readFile(img, (error, file) => {
    if (error) {
      response.writeHead(404, { 'content-type': 'text/html' });
      response.end('<h1>not found</h1>');
    } else {
      response.writeHead(200, { 'content-type': 'image/jpeg' });
      response.end(file);
    }
  });
};
