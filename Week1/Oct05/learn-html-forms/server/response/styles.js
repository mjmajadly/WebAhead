const css = String.raw;

module.exports = css`
  body {
    --hue: 220;
    max-width: 70rem;
    margin: 0 auto;
    padding: 3rem;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: hsl(var(--hue), 20%, 15%);
    color: hsl(var(--hue), 20%, 90%);
  }
  h1,
  h2 {
    margin: 0;
    margin-top: 2em;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1.25rem;
  }
  h1 {
    margin-top: 0;
    font-size: 1rem;
    font-weight: 900;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    gap: 3rem;
  }
  .results {
    margin: 1rem 0;
    border-radius: 0.25rem;
    border-top: 1px solid hsl(var(--hue), 30%, 35%);
    box-shadow: 0 4px 4px hsla(var(--hue), 20%, 10%, 0.4);
    padding: 1rem 0;
    font-family: monaco, consolas, monospace;
    font-size: 1.25rem;
    background-color: hsl(var(--hue), 30%, 25%);
    overflow-x: auto;
  }
  .results > * {
    padding: 0.5rem 1.5rem;
  }
  .missing {
    --hue: 0;
  }
  .emoji {
    font-size: 6rem;
    text-align: center;
    margin-top: 4rem;
  }
`;
