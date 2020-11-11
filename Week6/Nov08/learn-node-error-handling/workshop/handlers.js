const fs = require('fs');
const templates = require('./templates');
const model = require('./model');

function home(request, response) {
  response.writeHead(200, { 'content-type': 'text/html' });
  const html = templates.home();
  response.end(html);
}
// // ********************************************************************************
// // Error-handling https://github.com/oliverjam/learn-node-error-handling#challenge
// // ********************************************************************************
function tryCatch(request, response) {
  try {
    response.writeHead(200, { 'content-type': 'text/html' });
    const html = templates.tryCatch();
    response.end(html);
  } catch (error) {
    console.error('\nThis is ERRORRR\n' + error);
    response.writeHead(500, { 'content-type': 'text/html' });
    response.end(`<h1>Internal Server  Lujain Error</h1>`);
  }
}
// // ********************************************************************************
// // Error-first callbacks https://github.com/oliverjam/learn-node-error-handling#challenge-1
// // ********************************************************************************
function callback(request, response) {
  fs.readFile('incorrect-path.html', (error, file) => {
    if (error) {
      console.error('\nThis is ERRORRR\n' + error);
      response.writeHead(500, { 'content-type': 'text/html' });
      response.end(`<h1>Internal Server Error</h1>`);
    } else {
      response.writeHead(200, { 'content-type': 'text/html' });
      response.end(file);
    }
  });
}
// // // ********************************************************************************
// // // Bonus: unhandled Node exceptions github.com/oliverjam/learn-node-error-handling#bonus-unhandled-node-exceptions
// // // ********************************************************************************
// https: function rejection(request, response) {
//   model.getPosts().then((posts) => {
//     response.writeHead(200, { 'content-type': 'text/html' });
//     const html = templates.rejection(posts);
//     response.end(html);
//   });
// }

// // ********************************************************************************
// // Promise rejection https://github.com/oliverjam/learn-node-error-handling#challenge-2
// // ********************************************************************************
function rejection(request, response) {
  model
    .getPosts()
    .then((posts) => {
      response.writeHead(200, { 'content-type': 'text/html' });
      const html = templates.rejection(posts);
      response.end(html);
    })
    .catch((error) => {
      console.error('\nThis is ERRORRR\n' + error);
      response.writeHead(404, { 'content-type': 'text/html' });
      response.end(`<h1>Posts not found :(</h1>`);
    });
}

function missing(request, response) {
  response.writeHead(404, { 'content-type': 'text/html' });
  const html = templates.missing();
  response.end(html);
}

module.exports = { home, tryCatch, callback, rejection, missing };
