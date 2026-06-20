<script>
  import { onMount } from "svelte";

  let { intensity = "high", variant = "hero" } = $props();
  let canvas;

  const webGuyColors = ["#30c795", "#4f7cff", "#f0b84b", "#fffdfa"];
  const shapes = ["burst", "ring", "star", "willow"];
  const TAU = Math.PI * 2;
  const presets = {
    high: {
      desktopMaxParticles: 420,
      mobileMaxParticles: 170,
      desktopMaxFireworks: 7,
      mobileMaxFireworks: 3,
      launchChance: 0.16,
      mobileLaunchChance: 0.08,
      particleLife: 92
    },
    medium: {
      desktopMaxParticles: 320,
      mobileMaxParticles: 130,
      desktopMaxFireworks: 5,
      mobileMaxFireworks: 2,
      launchChance: 0.11,
      mobileLaunchChance: 0.055,
      particleLife: 84
    }
  };

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

  onMount(() => {
    const ctx = canvas.getContext("2d", { alpha: true });
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 640px)");
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame;
    let lastFrame = 0;
    let visible = true;
    let fireworks = [];
    let particles = [];

    function settings() {
      return presets[intensity] || presets.medium;
    }

    function activeLimits() {
      const active = settings();
      return {
        maxParticles: mobileQuery.matches ? active.mobileMaxParticles : active.desktopMaxParticles,
        maxFireworks: mobileQuery.matches ? active.mobileMaxFireworks : active.desktopMaxFireworks,
        launchChance: mobileQuery.matches ? active.mobileLaunchChance : active.launchChance,
        particleLife: reduceMotion.matches ? active.particleLife * 1.7 : active.particleLife
      };
    }

    function createParticle(x, y, color, vx, vy, life, radius = 1.8) {
      return {
        x,
        y,
        color,
        vx,
        vy,
        life,
        maxLife: life,
        radius
      };
    }

    function updateParticle(particle) {
      particle.vx *= 0.986;
      particle.vy *= 0.986;
      particle.vy += 0.024;
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life -= 1;
      return particle.life > 0;
    }

    function drawParticle(particle) {
      const alpha = clamp(particle.life / particle.maxLife, 0, 1);
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = mobileQuery.matches ? 6 : 12;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius * (0.7 + alpha * 0.4), 0, TAU);
      ctx.fill();
      ctx.restore();
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
        color: webGuyColors[Math.floor(Math.random() * webGuyColors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        trail: [],
        done: false,
        vx: (targetX - x) / frames,
        vy: (targetY - (height + 16)) / frames
      };
    }

    function updateFirework(firework) {
      firework.trail.push({ x: firework.x, y: firework.y });
      if (firework.trail.length > 9) firework.trail.shift();

      firework.x += firework.vx;
      firework.y += firework.vy;

      if (firework.y <= firework.targetY) {
        firework.done = true;
        explode(firework);
      }
    }

    function drawFirework(firework) {
      if (firework.trail.length > 1) {
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
      }

      ctx.fillStyle = firework.color;
      ctx.shadowColor = firework.color;
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.arc(firework.x, firework.y, 2, 0, TAU);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    function pushParticle(x, y, color, angle, speed, lifeMultiplier = 1, radius = 1.75) {
      const limits = activeLimits();
      particles.push(
        createParticle(
          x,
          y,
          color,
          Math.cos(angle) * speed,
          Math.sin(angle) * speed,
          limits.particleLife * lifeMultiplier,
          radius
        )
      );
    }

    function explode(firework) {
      const limits = activeLimits();
      const count = mobileQuery.matches ? randomBetween(28, 44) : randomBetween(46, 74);

      if (firework.shape === "ring") {
        for (let i = 0; i < count; i += 1) {
          const angle = (i / count) * TAU;
          pushParticle(firework.x, firework.y, firework.color, angle, randomBetween(1.15, 2.15), 1.05);
        }
      } else if (firework.shape === "star") {
        for (let i = 0; i < count; i += 1) {
          const point = i % 10;
          const angle = (point / 10) * TAU + randomBetween(-0.08, 0.08);
          const speed = point % 2 === 0 ? randomBetween(1.85, 2.9) : randomBetween(0.8, 1.5);
          pushParticle(firework.x, firework.y, firework.color, angle, speed, 1);
        }
      } else if (firework.shape === "willow") {
        for (let i = 0; i < count; i += 1) {
          pushParticle(firework.x, firework.y, firework.color, Math.random() * TAU, randomBetween(1.2, 2.65), 1.35, 1.55);
        }
      } else {
        for (let i = 0; i < count; i += 1) {
          pushParticle(firework.x, firework.y, firework.color, Math.random() * TAU, randomBetween(0.75, 2.85), 1);
        }
      }

      if (particles.length > limits.maxParticles) {
        particles.splice(0, particles.length - limits.maxParticles);
      }
    }

    function launchFirework() {
      const limits = activeLimits();
      if (fireworks.length < limits.maxFireworks) {
        fireworks.push(createFirework());
      }
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, mobileQuery.matches ? 1.15 : 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      fireworks = [];
      particles = [];
      draw();
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      const glow = ctx.createRadialGradient(width * 0.7, height * 0.3, 0, width * 0.7, height * 0.3, Math.max(width, height) * 0.74);
      glow.addColorStop(0, "rgba(48, 199, 149, 0.15)");
      glow.addColorStop(0.48, "rgba(79, 124, 255, 0.06)");
      glow.addColorStop(1, "rgba(48, 199, 149, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      for (const firework of fireworks) drawFirework(firework);
      for (const particle of particles) drawParticle(particle);
    }

    function update(time = 0) {
      if (!visible) return;

      const targetFrameTime = mobileQuery.matches ? 66 : 33;
      if (time - lastFrame < targetFrameTime) {
        frame = requestAnimationFrame(update);
        return;
      }
      lastFrame = time;

      const limits = activeLimits();
      const idle = fireworks.length === 0 && particles.length < 24;
      if (idle || Math.random() < limits.launchChance) launchFirework();

      for (const firework of fireworks) updateFirework(firework);
      fireworks = fireworks.filter((firework) => !firework.done);
      particles = particles.filter(updateParticle);

      draw();
      if (!reduceMotion.matches) {
        frame = requestAnimationFrame(update);
      }
    }

    function renderReducedMotion() {
      fireworks = [];
      particles = [];
      for (let i = 0; i < (mobileQuery.matches ? 2 : 4); i += 1) {
        explode({
          x: randomBetween(width * 0.18, width * 0.82),
          y: randomBetween(height * 0.18, height * 0.52),
          color: webGuyColors[i % webGuyColors.length],
          shape: shapes[i % shapes.length]
        });
      }
      draw();
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

    let resizeObserver;
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        start();
      } else {
        cancelAnimationFrame(frame);
      }
    });

    resizeObserver = new ResizeObserver(() => {
      resize();
      start();
    });

    resizeObserver.observe(canvas);
    intersectionObserver.observe(canvas);
    reduceMotion.addEventListener("change", start);
    mobileQuery.addEventListener("change", resize);
    mobileQuery.addEventListener("change", start);
    resize();
    start();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver?.disconnect();
      intersectionObserver.disconnect();
      reduceMotion.removeEventListener("change", start);
      mobileQuery.removeEventListener("change", resize);
      mobileQuery.removeEventListener("change", start);
    };
  });
</script>

<canvas bind:this={canvas} class={`hero-particles hero-fireworks hero-fireworks--${variant} hero-fireworks--${intensity}`} aria-hidden="true"></canvas>
