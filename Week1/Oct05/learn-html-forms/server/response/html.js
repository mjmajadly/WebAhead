const html = String.raw;
const css = require("./styles");

module.exports = function success({ event, expectedKeys }) {
  const submitted = event.queryStringParameters;
  const missing = expectedKeys.filter(k => !Object.keys(submitted).includes(k));
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Results | Learn HTML Forms</title>
        <style>
          ${css}
        </style>
      </head>
      <body>
        <h1>
          Results
        </h1>
        <div class="grid">
          <section>
            <h2>Submitted</h2>
            <div class="results">
              ${Object.entries(submitted)
                .map(([key, value]) => {
                  return html`
                    <div>
                      ${key}=${value}
                    </div>
                  `;
                })
                .join("")}
            </div>
            <div class="emoji">${!missing.length ? "🤩" : ""}</div>
          </section>
          <section>
            <h2>Missing</h2>
            <div class="results missing">
              ${missing
                .map(key => {
                  return html`
                    <div>
                      ${key}
                    </div>
                  `;
                })
                .join("")}
            </div>
            <div class="emoji">${missing.length ? "😭" : ""}</div>
          </section>
        </div>
      </body>
    </html>
  `;
};
