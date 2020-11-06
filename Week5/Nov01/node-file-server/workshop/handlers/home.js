// const fs = require("fs");
// const path = require("path");
// const types = {
//   html: "text/html",
//   css: "text/css",
//   js: "application/javascript",
// };

// function homeHandler(request, response) {
//   // public directory is one level above this, so we need the ".."
//   const filePath = path.join(__dirname, "..", "public", "index.html");
//   const urlArray = request.url.split("."); // e.g. "/style.css" -> ["/style", "css"]
//   const extension = urlArray[1]; // e.g. "css"
//   const type = types[extension]; // e.g. "text/css"
//   console.log(filePath);
//   console.log(urlArray);
//   console.log(extension);
//   console.log(type);
//   fs.readFile(filePath, (error, file) => {
//     if (error) {
//       console.log(error);
//       response.writeHead(404, { "content-type": "text/html" });
//       response.end("<h1>Not found</h1>");
//     } else {
//       response.writeHead(200, { "content-type": "text/html" });
//       response.end(file);
//     }
//   });
// }
// module.exports = homeHandler;
const fs = require("fs");
const path = require("path");

function homeHandler(request, response) {
  // public directory is one level above this, so we need the ".."
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1>Not found</h1>");
    } else {
      response.writeHead(200, { "content-type": "text/html" });
      response.end(file);
    }
  });
}
module.exports = homeHandler;
