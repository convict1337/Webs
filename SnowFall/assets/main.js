const c = document.getElementById('snowfall'), ctx = c.getContext('2d'), snow = [];
c.width = innerWidth;
c.height = innerHeight;

for (let i = 200; i--;) snow.push({x: Math.random() * c.width, y: Math.random() * c.height, s: Math.random() * 6, v: Math.random() * 4});

(function a() {
    ctx.clearRect(0, 0, c.width, c.height);
    snow.forEach(f => {f.y = f.y >= c.height ? 0 : f.y + f.v; f.x = f.y ? f.x : Math.random() * c.width; ctx.beginPath(); ctx.arc(f.x, f.y, f.s, 0, Math.PI * 2); ctx.fillStyle = 'white'; ctx.fill();});
    requestAnimationFrame(a);
})();
