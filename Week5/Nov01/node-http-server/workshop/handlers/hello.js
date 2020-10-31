// // ******************************************************************************
// // below Modularisation https://github.com/oliverjam/node-http-server#modularisation
// // ******************************************************************************

function helloHandler(request, response) {
  response.writeHead(302, { location: "/" });
  response.end();
}

module.exports = helloHandler;
