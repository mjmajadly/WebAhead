// // ******************************************************************************
// // below Request method https://github.com/oliverjam/node-http-server#request-method
// // ******************************************************************************

const homeHandler = require("./handlers/home");
const goodbyeHandler = require("./handlers/goodbye");
const missingHandler = require("./handlers/missing");
const helloHandler = require("./handlers/hello");
const submitHandler = require("./handlers/submit");

function router(request, response) {
  const url = request.url;
  const method = request.method;

  if (url === "/") {
    homeHandler(request, response);
  } else if (url === "/goodbye") {
    goodbyeHandler(request, response);
  } else if (url === "/hello") {
    helloHandler(request, response);
  } else if (method === "POST" && url === "/submit") {
    submitHandler(request, response);
  } else {
    missingHandler(request, response);
  }
}
module.exports = router;

// // // ******************************************************************************
// // // below Modularisation https://github.com/oliverjam/node-http-server#modularisation
// // // ******************************************************************************

// const homeHandler = require("./handlers/home");
// const goodbyeHandler = require("./handlers/goodbye");
// const missingHandler = require("./handlers/missing");
// const helloHandler = require("./handlers/hello");

// function router(request, response) {
//   const url = request.url;
//   if (url === "/") {
//     homeHandler(request, response);
//   } else if (url === "/goodbye") {
//     goodbyeHandler(request, response);
//   } else if (url === "/hello") {
//     helloHandler(request, response);
//   } else {
//     missingHandler(request, response);
//   }
// }
// module.exports = router;
