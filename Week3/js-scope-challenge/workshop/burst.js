
if (randomRange) {
  var getRandomHue = randomRange(0, 360);
}
var el;
var mousedown = false;

document.addEventListener("mousedown", event => {
  const { clientX, clientY } = event;
  mousedown = true;
  el = document.createElement("div");
  size = 1;
  function createBurst(x, y) {
    el.classList.add("burst");

    const hue = getRandomHue();
    el.style.setProperty("--hue", hue);

    const top = y;
    const left = x;
    el.style.setProperty("top", top + "px");
    el.style.setProperty("left", left + "px");

    requestAnimationFrame(grow);

    return el;
  }
  const burst = createBurst(clientX, clientY);
  document.body.appendChild(burst);
});

document.addEventListener("mouseup", event => {
  mousedown = false;
});
var size = 1;

function grow() {
  size += 1;

  el.style.setProperty("transform", `scale(${size})`);
  if (mousedown) {
    // mousedown = false;
    requestAnimationFrame(grow);
  }
}
