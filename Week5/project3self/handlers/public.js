const fs = require("fs");
const path = require("path");
const missingHandler = require("./missing");

const types = {
  html: "text/html",
  css: "text/css",
  js: "application/javascript",
  jpg: "image/jpeg",
  ico: "image/x-icon",
};

function publicHandler(req, res) {
  const url = req.url;
  const urlArray = url.split(".");
  const extension = urlArray[1];
  const type = types[extension];
  // public directory is one level above this, so we need the ".."
  const filePath = path.join(__dirname, "..", url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      missingHandler(req, res);
    } else {
      res.writeHead(200, { "content-type": type });
      res.end(file);
    }
  });
}

module.exports = publicHandler;
