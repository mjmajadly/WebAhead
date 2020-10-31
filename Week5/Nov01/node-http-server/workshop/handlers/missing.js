// // ******************************************************************************
// // below Modularisation https://github.com/oliverjam/node-http-server#modularisation
// // ******************************************************************************

function missingHandler(request, response) {
  response.writeHead(404, { "content-type": "text/html" });
  response.end("<h1>404 Not Found, Check Link</h1>");
}
module.exports = missingHandler;
