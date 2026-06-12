<script>
  import { onMount } from "svelte";

  let { intensity = "high", variant = "hero" } = $props();
  let canvas;

  const intensityPresets = {
    low: {
      desktopCount: 48,
      tabletCount: 34,
      mobileCount: 22,
      maxDistance: 116,
      lineAlpha: 0.11,
      nodeAlpha: 0.34,
      speed: 0.7,
      pointerRadius: 180,
      pointerForce: 0.012,
      glowAlpha: 0.08
    },
    medium: {
      desktopCount: 68,
      tabletCount: 46,
      mobileCount: 28,
      maxDistance: 132,
      lineAlpha: 0.15,
      nodeAlpha: 0.42,
      speed: 0.88,
      pointerRadius: 220,
      pointerForce: 0.018,
      glowAlpha: 0.12
    },
    high: {
      desktopCount: 86,
      tabletCount: 58,
      mobileCount: 32,
      maxDistance: 148,
      lineAlpha: 0.18,
      nodeAlpha: 0.5,
      speed: 1,
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
    let scrollDrift = 0;

    function settings() {
      return intensityPresets[intensity] || intensityPresets.medium;
    }

    function particleCount() {
      const activeSettings = settings();
      if (reduceMotion.matches) return mobileQuery.matches ? 18 : 28;
      if (mobileQuery.matches) return activeSettings.mobileCount;
      if (window.innerWidth < 1024) return activeSettings.tabletCount;
      return activeSettings.desktopCount;
    }

    function resetNodes() {
      const activeSettings = settings();
      nodes = Array.from({ length: particleCount() }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2 * activeSettings.speed,
        vy: (Math.random() - 0.5) * 0.2 * activeSettings.speed,
        r: 1.1 + Math.random() * 1.9,
        pulse: Math.random() * Math.PI * 2
      }));
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      resetNodes();
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
            ctx.strokeStyle = `rgba(48, 199, 149, ${alpha})`;
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

        ctx.fillStyle = `rgba(240, 184, 75, ${glow})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function update(time) {
      if (!visible) return;

      for (const node of nodes) {
        if (!reduceMotion.matches) {
          node.x += node.vx;
          node.y += node.vy + scrollDrift;
        }

        if (!mobileQuery.matches && pointer.active) {
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

        node.vx *= 0.998;
        node.vy *= 0.998;

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

    function handleScroll() {
      if (mobileQuery.matches && !reduceMotion.matches) {
        scrollDrift = Math.sin(window.scrollY * 0.006) * 0.03;
      }
    }

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        start();
      } else {
        cancelAnimationFrame(frame);
      }
    });

    resizeObserver.observe(canvas);
    intersectionObserver.observe(canvas);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    reduceMotion.addEventListener("change", start);
    mobileQuery.addEventListener("change", resize);
    resize();
    start();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("scroll", handleScroll);
      reduceMotion.removeEventListener("change", start);
      mobileQuery.removeEventListener("change", resize);
    };
  });
</script>

<canvas bind:this={canvas} class={`hero-particles hero-particles--${variant} hero-particles--${intensity}`} aria-hidden="true"></canvas>
