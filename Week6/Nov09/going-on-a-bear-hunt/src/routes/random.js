// import request module
const request = require('request');
const url = require('url');
const querystring = require('querystring');
const api_key = 'OiRmKWWUtNcSOtfRmlVDgYzuRKHSZPsz';
const randomGifAPIUrl = `http://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=bear`;

module.exports = (req, response) => {
  // search giphy for a bear and return image
  request(randomGifAPIUrl, function (err, res, body) {
    const data = JSON.parse(body);
    const imgHtml = `<img src=${data.image_original_url} />`;
    response.writeHead(200, { 'content-type': 'image/gif' });
    response.end(imgHtml);
  });
};
