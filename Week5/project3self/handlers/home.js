const fs = require("fs");
const path = require("path");
const missingHandler = require("./missing");

function homeHandler(req, res) {
  // public directory is one level above this, so we need the ".."
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      missingHandler(req, res);
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(file);
    }
  });
}
module.exports = homeHandler;
