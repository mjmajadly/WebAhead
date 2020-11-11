var posX = -1;

var startPressing = function (e) {
  console.log('testing1');
  posX = e.clientX;
  // console.log(posX);
};

var stopPressing = function () {
  console.log('testing2');

  posX = -1;
};

var moving = function (e) {
  // console.log(posX);
  // console.log(e.clientX);
  // console.log(e.clientX - posX);
  // console.log(posX - e.clientX);
  if (posX > -10 && e.clientX - posX >= 10) {
    document.getElementById('menu-check').checked = true;
    posX = -1;
    console.log('testing4');
  } else if (posX > -10 && posX - e.clientX < 5) {
    document.getElementById('menu-check').checked = false;
    console.log('testing5');
    posX = -1;
  }
};

document.addEventListener('mousedown', startPressing);
document.addEventListener('mousemove', moving);
document.addEventListener('mouseup', stopPressing);

document.addEventListener('touchstart', startPressing, false);
document.addEventListener('touchmove', moving, false);
document.addEventListener('touchend', stopPressing, false);
