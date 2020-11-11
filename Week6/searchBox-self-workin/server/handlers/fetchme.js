// import request module
const requester = require('request');
const url = require('url');
const querystring = require('querystring');

// dotenv will read a .env file into your process.env
require('dotenv').config();

const fetchmeHandler = (request, response) => {
  //use the request module to make API call
  const link = url.parse(request.url);
  // link gives me this:
  // Url {
  //   protocol: null,
  //   slashes: null,
  //   auth: null,
  //   host: null,
  //   port: null,
  //   hostname: null,
  //   hash: null,
  //   search: '?name=Ashton',
  //   query: 'name=Ashton',
  //   pathname: '/nameSearch',
  //   path: '/nameSearch?name=Ashton',
  //   href: '/nameSearch?name=Ashton'
  // }
  const search = link.query;
  const obj = querystring.parse(search);
  const name = obj['name'];
  const nameAPIUrl = `https://gender-api.com/get?name=${name}&key=${process.env.API_KEY}`;
  requester.get(nameAPIUrl, (err, res, body) => {
    // check for error AND correct status code AND content type
    const { statusCode, headers } = res;
    const contentType = headers['content-type'];
    if (err || statusCode !== 200) {
      // log the errors on the server
      console.log(`Error ${err}`);
      console.log(`Status Code: ${statusCode}`);
      console.log(`Content Type: ${contentType}`);
      // send a response back to the client
      response.writeHead(500, { 'content-type': 'text/plain' });
      response.end('Sorry, there was a server error');
      return;
    }
    response.writeHead(200, { 'content-type': 'text/html' });
    response.end(body);
  });
};

module.exports = fetchmeHandler;
