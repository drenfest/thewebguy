(() => {
  const colors = ["#30c795", "#4f7cff", "#f0b84b", "#fffdfa"];
  const shapes = ["burst", "ring", "star", "willow"];
  const tau = Math.PI * 2;

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  function withAlpha(hex, alpha) {
    const value = hex.replace("#", "");
    const red = Number.parseInt(value.slice(0, 2), 16);
    const green = Number.parseInt(value.slice(2, 4), 16);
    const blue = Number.parseInt(value.slice(4, 6), 16);
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  function initFireworks(canvas) {
    if (canvas.dataset.fireworksActive === "true") return;
    canvas.dataset.fireworksActive = "true";

    const ctx = canvas.getContext("2d", { alpha: true });
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 640px)");
    let width = 0;
    let height = 0;
    let frame;
    let lastFrame = 0;
    let visible = true;
    let fireworks = [];
    let particles = [];

    function limits() {
      return {
        maxParticles: mobileQuery.matches ? 170 : 420,
        maxFireworks: mobileQuery.matches ? 3 : 7,
        launchChance: mobileQuery.matches ? 0.08 : 0.16,
        particleLife: reduceMotion.matches ? 156 : 92
      };
    }

    function particle(x, y, color, vx, vy, life, radius = 1.8) {
      return { x, y, color, vx, vy, life, maxLife: life, radius };
    }

    function pushParticle(x, y, color, angle, speed, lifeMultiplier = 1, radius = 1.75) {
      const active = limits();
      particles.push(particle(x, y, color, Math.cos(angle) * speed, Math.sin(angle) * speed, active.particleLife * lifeMultiplier, radius));
    }

    function explode(firework) {
      const active = limits();
      const count = mobileQuery.matches ? randomBetween(28, 44) : randomBetween(46, 74);

      for (let i = 0; i < count; i += 1) {
        if (firework.shape === "ring") {
          pushParticle(firework.x, firework.y, firework.color, (i / count) * tau, randomBetween(1.15, 2.15), 1.05);
        } else if (firework.shape === "star") {
          const point = i % 10;
          pushParticle(firework.x, firework.y, firework.color, (point / 10) * tau + randomBetween(-0.08, 0.08), point % 2 === 0 ? randomBetween(1.85, 2.9) : randomBetween(0.8, 1.5));
        } else {
          pushParticle(firework.x, firework.y, firework.color, Math.random() * tau, randomBetween(0.75, firework.shape === "willow" ? 2.65 : 2.85), firework.shape === "willow" ? 1.35 : 1, firework.shape === "willow" ? 1.55 : 1.75);
        }
      }

      if (particles.length > active.maxParticles) {
        particles.splice(0, particles.length - active.maxParticles);
      }
    }

    function createFirework() {
      const tubeCount = mobileQuery.matches ? 4 : 7;
      const tube = Math.floor(Math.random() * tubeCount);
      const x = ((tube + 0.5) * width) / tubeCount + randomBetween(-width * 0.035, width * 0.035);
      const targetX = clamp(x + randomBetween(-width * 0.12, width * 0.12), width * 0.08, width * 0.92);
      const targetY = randomBetween(height * 0.16, height * 0.56);
      const frames = randomBetween(38, 62);
      return {
        x,
        y: height + 16,
        targetX,
        targetY,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        trail: [],
        done: false,
        vx: (targetX - x) / frames,
        vy: (targetY - (height + 16)) / frames
      };
    }

    function drawParticle(activeParticle) {
      const alpha = clamp(activeParticle.life / activeParticle.maxLife, 0, 1);
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.shadowColor = activeParticle.color;
      ctx.shadowBlur = mobileQuery.matches ? 6 : 12;
      ctx.fillStyle = activeParticle.color;
      ctx.beginPath();
      ctx.arc(activeParticle.x, activeParticle.y, activeParticle.radius * (0.7 + alpha * 0.4), 0, tau);
      ctx.fill();
      ctx.restore();
    }

    function drawFirework(firework) {
      for (let i = 1; i < firework.trail.length; i += 1) {
        const previous = firework.trail[i - 1];
        const point = firework.trail[i];
        ctx.strokeStyle = withAlpha(firework.color, (i / firework.trail.length) * 0.58);
        ctx.lineWidth = 1.35;
        ctx.beginPath();
        ctx.moveTo(previous.x, previous.y);
        ctx.lineTo(point.x, point.y);
        ctx.stroke();
      }

      ctx.fillStyle = firework.color;
      ctx.shadowColor = firework.color;
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.arc(firework.x, firework.y, 2, 0, tau);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const glow = ctx.createRadialGradient(width * 0.7, height * 0.3, 0, width * 0.7, height * 0.3, Math.max(width, height) * 0.74);
      glow.addColorStop(0, "rgba(48, 199, 149, 0.15)");
      glow.addColorStop(0.48, "rgba(79, 124, 255, 0.06)");
      glow.addColorStop(1, "rgba(48, 199, 149, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
      fireworks.forEach(drawFirework);
      particles.forEach(drawParticle);
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, mobileQuery.matches ? 1.15 : 1.5);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      fireworks = [];
      particles = [];
      draw();
    }

    function renderReducedMotion() {
      fireworks = [];
      particles = [];
      for (let i = 0; i < (mobileQuery.matches ? 2 : 4); i += 1) {
        explode({
          x: randomBetween(width * 0.18, width * 0.82),
          y: randomBetween(height * 0.18, height * 0.52),
          color: colors[i % colors.length],
          shape: shapes[i % shapes.length]
        });
      }
      draw();
    }

    function updateParticle(activeParticle) {
      activeParticle.vx *= 0.986;
      activeParticle.vy *= 0.986;
      activeParticle.vy += 0.024;
      activeParticle.x += activeParticle.vx;
      activeParticle.y += activeParticle.vy;
      activeParticle.life -= 1;
      return activeParticle.life > 0;
    }

    function update(time = 0) {
      if (!visible) return;
      const targetFrameTime = mobileQuery.matches ? 66 : 33;
      if (time - lastFrame < targetFrameTime) {
        frame = requestAnimationFrame(update);
        return;
      }
      lastFrame = time;

      const active = limits();
      if ((fireworks.length === 0 && particles.length < 24) || Math.random() < active.launchChance) {
        if (fireworks.length < active.maxFireworks) fireworks.push(createFirework());
      }

      for (const firework of fireworks) {
        firework.trail.push({ x: firework.x, y: firework.y });
        if (firework.trail.length > 9) firework.trail.shift();
        firework.x += firework.vx;
        firework.y += firework.vy;
        if (firework.y <= firework.targetY) {
          firework.done = true;
          explode(firework);
        }
      }

      fireworks = fireworks.filter((firework) => !firework.done);
      particles = particles.filter(updateParticle);
      draw();
      frame = requestAnimationFrame(update);
    }

    function start() {
      cancelAnimationFrame(frame);
      lastFrame = 0;
      if (reduceMotion.matches) {
        renderReducedMotion();
        return;
      }
      frame = requestAnimationFrame(update);
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
      start();
    });
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else cancelAnimationFrame(frame);
    });

    resizeObserver.observe(canvas);
    intersectionObserver.observe(canvas);
    reduceMotion.addEventListener("change", start);
    mobileQuery.addEventListener("change", resize);
    mobileQuery.addEventListener("change", start);
    resize();
    start();
  }

  document.querySelectorAll("canvas[data-standalone-fireworks]").forEach(initFireworks);
})();
