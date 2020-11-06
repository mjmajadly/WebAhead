const homeHandler = require("./handlers/home");
const publicHandler = require("./handlers/public");
const missingHandler = require("./handlers/missing");
const autocompHandler = require("./handlers/autocom");

function router(req, res) {
  const url = req.url;
  const method = req.method;
  if (method === "GET") {
    if (url === "/") {
      homeHandler(req, res);
    } else if (url.includes("public")) {
      publicHandler(req, res);
    } else {
      missingHandler(req, res);
    }
  }
  if (method === "POST") {
    if (url === "/") {
      autocompHandler(req, res);
    }
  }
}
module.exports = router;
