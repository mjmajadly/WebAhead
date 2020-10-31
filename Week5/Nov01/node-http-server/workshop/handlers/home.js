// // ******************************************************************************
// // below Modularisation https://github.com/oliverjam/node-http-server#modularisation
// // ******************************************************************************

// workshop/handlers/home.js
function homeHandler(request, response) {
  response.writeHead(200, { "contect-type": "text/html" });
  response.end("<h1>Hello</h1>");
}
module.exports = homeHandler;
