const handlers = require("./handlers");

function router(request, response) {
  const url = request.url;
  if (url === "/") {
    handlers.home(request, response);
  } else if (url === "/try-catch") {
    handlers.tryCatch(request, response);
  } else if (url === "/callback") {
    handlers.callback(request, response);
  } else if (url === "/rejection") {
    handlers.rejection(request, response);
  } else {
    handlers.missing(request, response);
  }
}

module.exports = router;
