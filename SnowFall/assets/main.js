var canvas = document.getElementById('snowfall');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Snowflake() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.size = Math.random() * 6;
  this.speed = Math.random() * 4;


  this.update = function() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = 0;
      this.x = Math.random() * canvas.width;
    }
  };

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  };
}

var snowflakes = [];
for (var i = 0; i < 200; i++) {
  snowflakes.push(new Snowflake());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < snowflakes.length; i++) {
    snowflakes[i].update();
    snowflakes[i].draw();
  }
  requestAnimationFrame(animate);
}

animate();

