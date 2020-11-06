const router = (req, res) => {
  const url = req.url;
  const method = req.method;
  const auth = req.headers.authorization;
  if (method === "GET") {
    if (url === "/") {
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("hello");
    } else if (url === "/elephant") {
      res.writeHead(404, { "content-type": "text/html" });
      res.end("<h1>Not Found</h1>");
    } else if (url === "/blog") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(["cat", "dog", "bird"]));
    }
  }
  if (method === "POST") {
    console.log("test");
    if (url === "/blog" && auth === "123") {
      console.log("test22");
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        if (body == "") {
          console.log("test33");
          res.writeHead(302, { location: "/blog" });
          res.end();
        } else {
          console.log("test44");
          res.end(body);
        }
      });
      res.on("error", (error) => {
        res.writeHead(500, { "content-type": "text/html" });
        res.end("<h1>Server error</h1>");
      });
    }
  }
};

module.exports = router;
