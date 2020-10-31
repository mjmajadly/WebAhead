// // ******************************************************************************
// // below Request method https://github.com/oliverjam/node-http-server#request-method
// // ******************************************************************************

const router = require("./router");
const http = require("http");
const PORT = 3000;

const server = http.createServer(router);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

// // ******************************************************************************
// // below Modularisation https://github.com/oliverjam/node-http-server#modularisation
// // ******************************************************************************
// const router = require("./router");
// const http = require("http");
// const PORT = 3000;

// const server = http.createServer(router);

// server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

// // // ******************************************************************************
// // // below Missing resources https://github.com/oliverjam/node-http-server#missing-resources
// // // ******************************************************************************
// const http = require("http");
// const { userInfo } = require("os");
// const PORT = 3000;

// const server = http.createServer((request, response) => {
//   const url = request.url;
//   if (url === "/") {
//     response.writeHead(200, { "content-type": "text/html" });
//     response.end("<h1>Hello</h1>");
//   } else if (url === "/goodbye") {
//     response.writeHead(200, { "content-type": "text/html" });
//     response.end("<h1>Goodbye</h1>");
//   } else if (url === "/hello") {
//     response.writeHead(302, { location: "/" });
//     response.end();
//   } else {
//     response.writeHead(404, { "content-type": "text/html" });
//     response.end("<h1>404 Not Found</h1>");
//   }
// });

// server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

// // // ******************************************************************************
// // // below Redirects  https://github.com/oliverjam/node-http-server#redirects
// // // ******************************************************************************
// const http = require("http");
// const { userInfo } = require("os");
// const PORT = 3000;

// const server = http.createServer((request, response) => {
//   const url = request.url;
//   if (url === "/") {
//     response.writeHead(200, { "content-type": "text/html" });
//     response.end("<h1>Hello</h1>");
//   } else if (url === "/goodbye") {
//     response.writeHead(200, { "content-type": "text/html" });
//     response.end("<h1>Goodbye</h1>");
//   } else if (url === "/hello") {
//     response.writeHead(302, { location: "/" });
//     response.end();
//   }
// });

// server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

// // // ******************************************************************************
// // // below Routing  https://github.com/oliverjam/node-http-server#routing
// // // ******************************************************************************
// const http = require("http");
// const PORT = 3000;

// const server = http.createServer((request, response) => {
//   const url = request.url;
//   if (url === "/") {
//     response.writeHead(200, { "content-type": "text/html" });
//     response.end("<h1>Hello</h1>");
//   } else if (url === "/goodbye") {
//     response.writeHead(200, { "content-type": "text/html" });
//     response.end("<h1>Goodbye</h1>");
//   }
// });

// server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

// // ******************************************************************************
// // below for everythin up to https://github.com/oliverjam/node-http-server#routing
// // ******************************************************************************
// const http = require("http");
// const PORT = 3000;

// //The handler will be passed two arguments:
// // an object representing the incoming request, and
// // an object representing the response that will eventually be sent.
// // We can use the end method on the response object to tell Node to send the response

// // HTTP responses need a few different things:

// // A status code (e.g. 200 for success or 404 for not found)-->   response.statusCode = 200;
// // Headers to provide info about the response --> response.setHeader("content-type", "text/plain");
// // A body (the response data itself) -->  response.end(JSON.stringify({ message: "Hello" }));

// const server = http.createServer((request, response) => {
//   //   response.statusCode = 200;
//   //   response.setHeader("contect-type", "text/plain");
//   // Node has a method for setting the status code and all the headers at once: response.writeHead.
//   console.log(request.method, request.url);
//   response.writeHead(200, { "content-type": "text/html" });
//   //   response.end(JSON.stringify({ message: "hello" }));
//   response.end("<h1>Hello</h1>");
// });

// server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
