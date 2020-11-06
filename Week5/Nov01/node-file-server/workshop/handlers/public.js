const fs = require("fs");
const path = require("path");

const types = {
  html: "text/html",
  css: "text/css",
  js: "application/javascript",
  jpg: "image/jpeg",
  ico: "image/x-icon",
};
function publicHandler(request, response) {
  const urlLink = request.url; // /public/network.jpg
  const urlArray = request.url.split("."); // e.g. "/style.css" -> ["/style", "css"]
  const extension = urlArray[1]; // e.g. "css"
  const type = types[extension]; // e.g. "text/css"
  console.log(urlLink);
  console.log(urlArray);
  console.log(extension);
  console.log(type);

  // const filePath = path.join(__dirname, "..", "public", "index.html");
  const filePath = path.join(__dirname, "..", urlLink);

  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1>Not found</h1>");
    } else {
      response.writeHead(200, { "content-type": type });
      response.end(file);
    }
  });
}

module.exports = publicHandler;
