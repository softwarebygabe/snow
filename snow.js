const CANVAS_ID = 'snow';
const MATH = Math;

function canvasResize(canvas) {
  canvas.height = canvas.offsetHeight;
  canvas.width = canvas.offsetWidth;
}

function setWindowResize(window, canvas) {
  window.onresize = function () {
    canvasResize(canvas);
  }
}

function Flake(canvas, ctx) {
  const random = MATH.random();
  const distance = .05 + .95 * random;
  this.x = 1.5 * canvas.width * MATH.random() - .5 * canvas.width;
  this.y = -9;
  this.velX = 2* 2 * distance * (MATH.random() / 2 + .5);
  this.velY = 2* (4 + 2 * MATH.random()) * distance;
  this.radius = MATH.pow(5 * random, 2) / 5;
  // movement function
  this.update = function () {
    const t = this;
    t.x += t.velX;
    t.y += t.velY;
    ctx.beginPath();
    ctx.arc(t.x, t.y, t.radius, 0, 2 * MATH.PI, !1);
    ctx.fillStyle = "#FFF";
    ctx.shadowBlur=2;
    ctx.shadowColor="#ddd";
    ctx.fill()
  }
}

function addSnowFlakes(canvas, ctx, flakeArray) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  flake = new Flake(canvas, ctx);
  flakeArray.push(flake);
  for (let b = 0; b < flakeArray.length; b++) {
    if (flakeArray[b].y > canvas.height) {
      flakeArray.splice(b, 1);
    } else {
      flakeArray[b].update();
    }
  }
}

function addSnow() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.id = CANVAS_ID;
  document.body.appendChild(canvas);
  
  const flakeArray = [];

  // canvas styles
  canvas.style.pointerEvents = "none";
  canvas.style.position = "fixed";
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.zIndex = "90001";

  canvasResize(canvas);
  setWindowResize(window, canvas);

  setInterval(function() {
    addSnowFlakes(canvas, ctx, flakeArray);
  }, 32);
};

addSnow();
