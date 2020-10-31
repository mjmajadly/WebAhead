// // ******************************************************************************
// // below Dynamic responses https://github.com/oliverjam/node-http-server#dynamic-responses
// // ******************************************************************************

function submitHandler(request, response) {
  let body = "";
  request.on("data", (chunk) => {
    body += chunk;
  });
  request.on("end", () => {
    console.log(body);
    // This body is form-encoded (technically x-www-form-urlencoded, the default encoding for HTML form submissions). We need to parse it before we can use it:

    const data = new URLSearchParams(body);
    const name = data.get("name");
    const email = data.get("email");
    console.log(data); // object
    console.log(name); // oli
    console.log(email); // emailadress

    response.writeHead(200, { "content-type": "text/html" });
    response.end(`<h1>Hello ${name}</h1>`);
  });
  //took fron answers
  request.on("error", (error) => {
    response.writeHead(500, { "content-type": "text/html" });
    response.end("<h1>Server error</h1>");
  });
}

module.exports = submitHandler;

// // // ******************************************************************************
// // // below Error-handling https://github.com/oliverjam/node-http-server#error-handling
// // // ******************************************************************************

// function submitHandler(request, response) {
//   let body = "";
//   request.on("data", (chunk) => {
//     body += chunk;
//   });
//   request.on("end", () => {
//     console.log(body);
//     // This body is form-encoded (technically x-www-form-urlencoded, the default encoding for HTML form submissions). We need to parse it before we can use it:

//     const data = new URLSearchParams(body);
//     const name = data.get("name");
//     const email = data.get("email");
//     console.log(data); // object
//     console.log(name); // oli
//     console.log(email); // emailadress

//     response.writeHead(200, { "content-type": "text/html" });
//     response.end("<h1>Thank you for submitting</h1>");
//   });
//   //took fron answers
//   request.on("error", (error) => {
//     response.writeHead(500, { "content-type": "text/html" });
//     response.end("<h1>Server error</h1>");
//   });
// }

// module.exports = submitHandler;

//   // // ******************************************************************************
// // // below Request body https://github.com/oliverjam/node-http-server#request-body
// // // ******************************************************************************

// function submitHandler(request, response) {
//     let body = "";
//     request.on("data", (chunk) => {
//       body += chunk;
//     });
//     request.on("end", () => {
//       console.log(body);
//       // This body is form-encoded (technically x-www-form-urlencoded, the default encoding for HTML form submissions). We need to parse it before we can use it:

//       const data = new URLSearchParams(body);
//       const name = data.get("name");
//       const email = data.get("email");
//       console.log(data); // object
//       console.log(name); // oli
//       console.log(email); // emailadress

//       response.writeHead(200, { "content-type": "text/html" });
//       response.end("<h1>Thank you for submitting</h1>");
//     });
//   }

//   module.exports = submitHandler;

// // // ******************************************************************************
// // // below Request method https://github.com/oliverjam/node-http-server#request-method
// // // ******************************************************************************

// function submitHandler(request, response) {
//     response.writeHead(200, { "content-type": "text/html" });
//     response.end("<h1>Thank you for submitting</h1>");
//   }

//   module.exports = submitHandler;
