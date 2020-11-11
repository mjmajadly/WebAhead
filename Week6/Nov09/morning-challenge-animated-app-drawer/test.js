var posX = -1;

var startPressing = function (e) {
  console.log('Entered pressing');
  posX = e.clientX;
};

var stopPressing = function () {
  posX = -1;
};

var moving = function (e) {
  console.log(posX);
  console.log(e.clientX);
  console.log(e.clientX - posX);
  console.log(posX - e.clientX);
  if (posX > -1 && e.clientX - posX >= 200) {
    document.getElementById('menu-check').checked = true;
    posX = -1;
  } else if (posX > -1 && posX - e.clientX >= 200) {
    document.getElementById('menu-check').checked = false;
    posX = -1;
  }
};

document.addEventListener('mousedown', startPressing);
document.addEventListener('mousemove', moving);
document.addEventListener('mouseup', stopPressing);

document.addEventListener('touchstart', startPressing, false);
document.addEventListener('touchmove', moving, false);
document.addEventListener('touchend', stopPressing, false);
