function layout(content) {
  return `
    <doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Error-handling workshop</title>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;
}

function home() {
  return layout(`<h1>Hello world</h1>`);
}

function tryCatch() {
  return layot(`<h1>Gonna error</h1>`);
}

function rejection() {
  return layout(`<h1>Gonna reject</h1>`);
}

function missing() {
  return layout(`<h1>Not found</h1>`);
}

module.exports = { home, tryCatch, rejection, missing };
