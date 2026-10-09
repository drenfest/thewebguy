<script>
  import { onMount } from "svelte";

  let { intensity = "high", variant = "hero" } = $props();
  let canvas;
  let halloweenSeason = $state(false);

  const intensityPresets = {
    low: {
      desktopCount: 34,
      tabletCount: 26,
      mobileCount: 16,
      maxDistance: 116,
      lineAlpha: 0.11,
      nodeAlpha: 0.34,
      speed: 0.9,
      pointerRadius: 180,
      pointerForce: 0.012,
      glowAlpha: 0.08
    },
    medium: {
      desktopCount: 46,
      tabletCount: 34,
      mobileCount: 20,
      maxDistance: 132,
      lineAlpha: 0.15,
      nodeAlpha: 0.42,
      speed: 1.05,
      pointerRadius: 220,
      pointerForce: 0.018,
      glowAlpha: 0.12
    },
    high: {
      desktopCount: 58,
      tabletCount: 42,
      mobileCount: 24,
      maxDistance: 148,
      lineAlpha: 0.18,
      nodeAlpha: 0.5,
      speed: 1.2,
      pointerRadius: 250,
      pointerForce: 0.024,
      glowAlpha: 0.16
    }
  };

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  onMount(() => {
    const ctx = canvas.getContext("2d", { alpha: true });
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 640px)");
    let frame;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes = [];
    let visible = true;
    let pointer = { x: 0, y: 0, active: false };
    let pointerListenersActive = false;
    let lastMobileFrame = 0;
    halloweenSeason = new Date().getMonth() === 9;

    function settings() {
      return intensityPresets[intensity] || intensityPresets.medium;
    }

    function particleCount() {
      const activeSettings = settings();
      if (halloweenSeason) {
        if (reduceMotion.matches) return mobileQuery.matches ? 7 : 12;
        if (mobileQuery.matches) return 9;
        if (window.innerWidth < 1024) return 14;
        return 19;
      }
      if (reduceMotion.matches) return mobileQuery.matches ? 18 : 28;
      if (mobileQuery.matches) return activeSettings.mobileCount;
      if (window.innerWidth < 1024) return activeSettings.tabletCount;
      return activeSettings.desktopCount;
    }

    function resetNodes() {
      const activeSettings = settings();
      nodes = Array.from({ length: particleCount() }, () => {
        const baseX = Math.random() * width;
        const baseY = Math.random() * height;
        const travelAngle = Math.random() * Math.PI * 2;
        const travelSpeed = (0.16 + Math.random() * 0.18) * activeSettings.speed * (halloweenSeason ? 1.14 : 1);
        const cruiseVx = Math.cos(travelAngle) * travelSpeed;
        const cruiseVy = Math.sin(travelAngle) * travelSpeed;
        return {
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          vx: cruiseVx,
          vy: cruiseVy,
          cruiseVx,
          cruiseVy,
          r: 1.1 + Math.random() * 1.9,
          pulse: Math.random() * Math.PI * 2,
          drift: 12 + Math.random() * 20,
          wanderRate: 0.0003 + Math.random() * 0.00034,
          wanderStrength: 0.028 + Math.random() * 0.052,
          pumpkinSize: 7 + Math.random() * 7,
          pumpkinTilt: (Math.random() - 0.5) * 0.38,
          pumpkinFace: Math.floor(Math.random() * 3),
          pumpkinHue: 22 + Math.random() * 14
        };
      });
    }

    function drawJackOLantern(node, glow, time) {
      const size = node.pumpkinSize;
      ctx.save();
      ctx.translate(node.x, node.y);
      ctx.rotate(node.pumpkinTilt + Math.sin(time * node.wanderRate + node.pulse) * 0.09);
      ctx.globalAlpha = clamp(glow + 0.22, 0.48, 0.92);
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(255, 128, 28, 0.34)";

      ctx.fillStyle = "#4f8a45";
      ctx.fillRect(-1.2, -size * 0.82, 2.4, size * 0.32);

      ctx.fillStyle = `hsl(${node.pumpkinHue} 88% 52%)`;
      ctx.beginPath();
      ctx.ellipse(0, 0, size, size * 0.72, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "rgba(118, 48, 10, 0.42)";
      ctx.lineWidth = Math.max(0.7, size * 0.08);
      for (const offset of [-0.45, 0.45]) {
        ctx.beginPath();
        ctx.ellipse(offset * size, 0, size * 0.42, size * 0.69, 0, -Math.PI / 2, Math.PI / 2);
        ctx.stroke();
      }

      ctx.shadowBlur = 4;
      ctx.fillStyle = "rgba(255, 239, 134, 0.94)";
      const eyeY = -size * 0.13;
      for (const eyeX of [-size * 0.34, size * 0.34]) {
        ctx.beginPath();
        ctx.moveTo(eyeX - size * 0.13, eyeY + size * 0.1);
        ctx.lineTo(eyeX, eyeY - size * 0.14);
        ctx.lineTo(eyeX + size * 0.13, eyeY + size * 0.1);
        ctx.closePath();
        ctx.fill();
      }

      ctx.beginPath();
      if (node.pumpkinFace === 0) {
        ctx.moveTo(-size * 0.48, size * 0.2);
        ctx.lineTo(-size * 0.18, size * 0.42);
        ctx.lineTo(0, size * 0.26);
        ctx.lineTo(size * 0.18, size * 0.42);
        ctx.lineTo(size * 0.48, size * 0.2);
        ctx.lineTo(size * 0.32, size * 0.48);
        ctx.lineTo(-size * 0.32, size * 0.48);
      } else if (node.pumpkinFace === 1) {
        ctx.arc(0, size * 0.26, size * 0.38, 0.12, Math.PI - 0.12);
        ctx.lineTo(-size * 0.34, size * 0.22);
      } else {
        ctx.moveTo(-size * 0.42, size * 0.24);
        ctx.quadraticCurveTo(0, size * 0.58, size * 0.42, size * 0.24);
        ctx.quadraticCurveTo(0, size * 0.4, -size * 0.42, size * 0.24);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const previousWidth = width;
      const previousHeight = height;
      const nextWidth = Math.max(1, rect.width);
      const nextHeight = Math.max(1, rect.height);
      const sizeChanged = Math.abs(nextWidth - previousWidth) > 0.5 || Math.abs(nextHeight - previousHeight) > 0.5;
      const nextDpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const resolutionChanged = nextDpr !== dpr;

      width = nextWidth;
      height = nextHeight;
      dpr = nextDpr;
      if (sizeChanged || resolutionChanged || !canvas.width || !canvas.height) {
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      const requiredCount = particleCount();
      if (!nodes.length || nodes.length !== requiredCount) {
        resetNodes();
      } else if (sizeChanged && previousWidth > 0 && previousHeight > 0) {
        const scaleX = width / previousWidth;
        const scaleY = height / previousHeight;
        for (const node of nodes) {
          node.x *= scaleX;
          node.y *= scaleY;
          node.baseX *= scaleX;
          node.baseY *= scaleY;
        }
      }

      draw(0);
    }

    function pointerInfluence(node) {
      if (!pointer.active || mobileQuery.matches) return 0;

      const activeSettings = settings();
      const dx = pointer.x - node.x;
      const dy = pointer.y - node.y;
      const distance = Math.hypot(dx, dy);

      return Math.max(0, 1 - distance / activeSettings.pointerRadius);
    }

    function draw(time = 0) {
      const activeSettings = settings();
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createRadialGradient(width * 0.74, height * 0.42, 0, width * 0.74, height * 0.42, Math.max(width, height) * 0.72);
      gradient.addColorStop(0, "rgba(48, 199, 149, 0.18)");
      gradient.addColorStop(0.45, "rgba(79, 124, 255, 0.07)");
      gradient.addColorStop(1, "rgba(48, 199, 149, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      if (pointer.active && !mobileQuery.matches) {
        const pointerGlow = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, activeSettings.pointerRadius * 1.08);
        pointerGlow.addColorStop(0, `rgba(48, 199, 149, ${activeSettings.glowAlpha})`);
        pointerGlow.addColorStop(0.48, "rgba(79, 124, 255, 0.055)");
        pointerGlow.addColorStop(1, "rgba(48, 199, 149, 0)");
        ctx.fillStyle = pointerGlow;
        ctx.fillRect(0, 0, width, height);
      }

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];

        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);
          const maxDistance = mobileQuery.matches ? 96 : activeSettings.maxDistance;

          if (distance < maxDistance) {
            const influence = Math.max(pointerInfluence(a), pointerInfluence(b));
            const alpha = activeSettings.lineAlpha * (1 - distance / maxDistance) + influence * 0.08;
            ctx.strokeStyle = halloweenSeason
              ? `rgba(255, 126, 35, ${alpha * 0.72})`
              : `rgba(48, 199, 149, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.shadowBlur = influence > 0.16 ? 10 * influence : 0;
            ctx.shadowColor = "rgba(48, 199, 149, 0.38)";
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      ctx.shadowBlur = 0;
      for (const node of nodes) {
        const influence = pointerInfluence(node);
        const glow = activeSettings.nodeAlpha + Math.sin(time * 0.001 + node.pulse) * 0.08 + influence * 0.36;
        const radius = node.r + influence * 2.7;

        if (influence > 0.1) {
          const nodeGlow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 18 + influence * 18);
          nodeGlow.addColorStop(0, `rgba(48, 199, 149, ${0.2 * influence})`);
          nodeGlow.addColorStop(1, "rgba(48, 199, 149, 0)");
          ctx.fillStyle = nodeGlow;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 18 + influence * 18, 0, Math.PI * 2);
          ctx.fill();
        }

        if (halloweenSeason) {
          drawJackOLantern(node, glow, time);
        } else {
          ctx.fillStyle = `rgba(240, 184, 75, ${glow})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function update(time) {
      if (!visible) return;

      const isMobile = mobileQuery.matches;
      if (isMobile && time - lastMobileFrame < 82) {
        frame = requestAnimationFrame(update);
        return;
      }
      if (isMobile) lastMobileFrame = time;

      for (const node of nodes) {
        if (isMobile) {
          const driftTime = time * node.wanderRate + node.pulse;
          node.x = node.baseX
            + Math.cos(driftTime) * node.drift
            + Math.sin(driftTime * 1.7) * node.drift * 0.24;
          node.y = node.baseY
            + Math.sin(driftTime * 0.82) * node.drift
            + Math.cos(driftTime * 1.36) * node.drift * 0.2;
        } else if (!reduceMotion.matches) {
          const wanderTime = time * node.wanderRate + node.pulse;
          node.x += node.vx + Math.cos(wanderTime) * node.wanderStrength;
          node.y += node.vy + Math.sin(wanderTime * 0.88) * node.wanderStrength;
        }

        if (!isMobile && pointer.active) {
          const dx = pointer.x - node.x;
          const dy = pointer.y - node.y;
          const distance = Math.max(1, Math.hypot(dx, dy));
          const activeSettings = settings();
          if (distance < activeSettings.pointerRadius) {
            const push = (1 - distance / activeSettings.pointerRadius) * activeSettings.pointerForce;
            node.vx -= (dx / distance) * push;
            node.vy -= (dy / distance) * push;
            node.vx = clamp(node.vx, -0.56, 0.56);
            node.vy = clamp(node.vy, -0.56, 0.56);
          }
        }

        if (!isMobile) {
          node.vx += (node.cruiseVx - node.vx) * 0.012;
          node.vy += (node.cruiseVy - node.vy) * 0.012;
        }

        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;
      }

      draw(time);
      if (!reduceMotion.matches) {
        frame = requestAnimationFrame(update);
      }
    }

    function start() {
      cancelAnimationFrame(frame);
      if (reduceMotion.matches) {
        draw(0);
        return;
      }
      frame = requestAnimationFrame(update);
    }

    function handlePointerMove(event) {
      if (mobileQuery.matches || event.pointerType === "touch") return;

      const rect = canvas.getBoundingClientRect();
      pointer = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true
      };

      const hero = canvas.closest(".hero");
      if (hero) {
        hero.style.setProperty("--hero-pointer-x", `${clamp((pointer.x / width) * 100, 0, 100)}%`);
        hero.style.setProperty("--hero-pointer-y", `${clamp((pointer.y / height) * 100, 0, 100)}%`);
      }
    }

    function handlePointerLeave() {
      pointer.active = false;
    }

    function syncPointerListeners() {
      const shouldListen = !mobileQuery.matches;
      if (shouldListen === pointerListenersActive) return;

      pointerListenersActive = shouldListen;
      if (shouldListen) {
        window.addEventListener("pointermove", handlePointerMove, { passive: true });
        window.addEventListener("pointerleave", handlePointerLeave, { passive: true });
      } else {
        pointer.active = false;
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerleave", handlePointerLeave);
      }
    }

    function handleSeasonChange(event) {
      const nextHalloweenSeason = event.detail?.halloween ?? new Date().getMonth() === 9;
      if (nextHalloweenSeason === halloweenSeason) return;
      halloweenSeason = nextHalloweenSeason;
      resetNodes();
      start();
    }

    let startup;
    let startupMode = "timeout";
    let mounted = true;
    let resizeObserver;
    let intersectionObserver;

    function boot() {
      if (!mounted || resizeObserver) return;

      resizeObserver = new ResizeObserver(resize);
      intersectionObserver = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible) {
          start();
        } else {
          cancelAnimationFrame(frame);
        }
      });

      resizeObserver.observe(canvas);
      intersectionObserver.observe(canvas);
      syncPointerListeners();
      reduceMotion.addEventListener("change", start);
      mobileQuery.addEventListener("change", resize);
      mobileQuery.addEventListener("change", syncPointerListeners);
      document.addEventListener("seasonchange", handleSeasonChange);
      resize();
      start();
    }

    if ("requestIdleCallback" in window) {
      startupMode = "idle";
      startup = window.requestIdleCallback(boot, { timeout: 1400 });
    } else {
      startup = window.setTimeout(boot, 900);
    }

    return () => {
      mounted = false;
      if (!resizeObserver && startup) {
        if (startupMode === "idle") {
          window.cancelIdleCallback(startup);
        } else {
          window.clearTimeout(startup);
        }
      }
      cancelAnimationFrame(frame);
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      reduceMotion.removeEventListener("change", start);
      mobileQuery.removeEventListener("change", resize);
      mobileQuery.removeEventListener("change", syncPointerListeners);
      document.removeEventListener("seasonchange", handleSeasonChange);
    };
  });
</script>

<canvas bind:this={canvas} class={`hero-particles hero-particles--${variant} hero-particles--${intensity}`} class:hero-particles--halloween={halloweenSeason} aria-hidden="true"></canvas>
