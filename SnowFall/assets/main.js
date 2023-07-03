const c = document.getElementById('snowfall');
const ctx = c.getContext('2d');
const snowflakes = [];

c.width = innerWidth;
c.height = innerHeight;

class Snowflake {
  constructor() {
    this.x = Math.random() * c.width;
    this.y = Math.random() * c.height;
    this.size = Math.random() * 6;
    this.speed = Math.random() * 4;
  }
  update() {
    this.y = (this.y >= c.height) ? 0 : this.y + this.speed;
    this.x = (this.y === 0) ? Math.random() * c.width : this.x;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }
}

for (let i = 0; i < 200; i++) snowflakes.push(new Snowflake());

(function animate() {
  ctx.clearRect(0, 0, c.width, c.height);
  snowflakes.forEach(s => s.update());
  requestAnimationFrame(animate);
})();
