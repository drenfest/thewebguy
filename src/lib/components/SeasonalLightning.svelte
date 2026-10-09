<script>
  import { onMount } from "svelte";

  onMount(() => {
    const selector = [
      ".hero",
      ".section.effect-dark-grid",
      ".cta-band",
      ".ai-dark-section",
      ".section-presentation--judgment-contrast",
      ".section-presentation--handoff-board",
      ".review-gate-card"
    ].join(",");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const controllers = new Map();
    let halloween = document.documentElement.classList.contains("season-halloween");
    let rescanFrame;

    function random(min, max) {
      return min + Math.random() * (max - min);
    }

    function jaggedPath(start, end, iterations = 6, roughness = 0.18) {
      let points = [start, end];
      for (let iteration = 0; iteration < iterations; iteration += 1) {
        const next = [points[0]];
        for (let index = 0; index < points.length - 1; index += 1) {
          const a = points[index];
          const b = points[index + 1];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const length = Math.max(1, Math.hypot(dx, dy));
          const displacement = (Math.random() - 0.5) * length * roughness;
          next.push({
            x: (a.x + b.x) / 2 + (-dy / length) * displacement,
            y: (a.y + b.y) / 2 + (dx / length) * displacement * 0.16
          });
          next.push(b);
        }
        points = next;
      }
      return points;
    }

    function createStrike(width, height, previousOriginX = null) {
      // Base lateral movement on the shorter dimension so a wide, shallow
      // banner gets a natural bolt instead of a horizontally stretched one.
      const lateralScale = Math.min(width, height * 2.1);
      const minOrigin = width * 0.08;
      const maxOrigin = width * 0.92;
      const requiredSeparation = width * 0.24;
      let originX;
      if (previousOriginX === null) {
        originX = random(minOrigin, maxOrigin);
      } else {
        const candidates = [
          [minOrigin, previousOriginX - requiredSeparation],
          [previousOriginX + requiredSeparation, maxOrigin]
        ].filter(([min, max]) => max > min);
        if (!candidates.length) {
          originX = previousOriginX < width / 2 ? maxOrigin : minOrigin;
        } else {
          const totalRange = candidates.reduce((sum, [min, max]) => sum + (max - min), 0);
          let selection = Math.random() * totalRange;
          const [candidateMin, candidateMax] = candidates.find(([min, max]) => {
            selection -= max - min;
            return selection <= 0;
          }) || candidates[candidates.length - 1];
          originX = random(candidateMin, candidateMax);
        }
      }

      const start = { x: originX, y: -12 };
      const end = {
        x: Math.min(width - 20, Math.max(20, start.x + random(-lateralScale * 0.2, lateralScale * 0.2))),
        y: random(height * 0.7, height * 1.04)
      };
      const trunk = jaggedPath(start, end, 7, 0.34);
      const branches = [];
      const branchCount = Math.max(4, Math.min(10, Math.round(height / 110) + Math.floor(random(0, 3))));

      for (let branchIndex = 0; branchIndex < branchCount; branchIndex += 1) {
        const pointIndex = Math.floor(random(trunk.length * 0.16, trunk.length * 0.78));
        const source = trunk[pointIndex];
        const direction = Math.random() > 0.5 ? 1 : -1;
        const reach = random(lateralScale * 0.07, lateralScale * 0.2);
        const drop = random(height * 0.07, height * 0.2);
        const branchEnd = {
          x: Math.min(width + 20, Math.max(-20, source.x + direction * reach)),
          y: Math.min(height + 10, source.y + drop)
        };
        const branch = jaggedPath(source, branchEnd, 4, 0.42);
        const startProgress = pointIndex / Math.max(1, trunk.length - 1);
        branches.push({ points: branch, startProgress, spread: random(0.2, 0.34), depth: 1 });

        if (Math.random() > 0.58) {
          const twigIndex = Math.floor(branch.length * random(0.42, 0.72));
          const twigSource = branch[twigIndex];
          branches.push({ points: jaggedPath(twigSource, {
            x: twigSource.x - direction * random(reach * 0.22, reach * 0.55),
            y: twigSource.y + random(drop * 0.3, drop * 0.72)
          }, 3, 0.48), startProgress: startProgress + (twigIndex / branch.length) * 0.22, spread: random(0.14, 0.24), depth: 2 });
        }
      }

      return { trunk, branches };
    }

    function strokePath(ctx, points, progress = 1, startWidth = 1, endWidth = 0.35, widthScale = 1) {
      const clampedProgress = Math.max(0, Math.min(1, progress));
      if (clampedProgress <= 0 || points.length < 2) return;
      const exactIndex = clampedProgress * (points.length - 1);
      const wholeIndex = Math.floor(exactIndex);
      const remainder = exactIndex - wholeIndex;
      const visibleSegments = wholeIndex + (remainder > 0 ? 1 : 0);

      for (let index = 0; index < visibleSegments; index += 1) {
        const a = points[index];
        const b = points[index + 1];
        const segmentProgress = index / Math.max(1, points.length - 2);
        const segmentEnd = index === wholeIndex && remainder > 0
          ? { x: a.x + (b.x - a.x) * remainder, y: a.y + (b.y - a.y) * remainder }
          : b;
        // Keep the energized channel substantial near the source, then taper
        // more decisively as the bolt divides into its outermost filaments.
        const taperProgress = Math.pow(segmentProgress, 1.55);
        ctx.lineWidth = (startWidth + (endWidth - startWidth) * taperProgress) * widthScale;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(segmentEnd.x, segmentEnd.y);
        ctx.stroke();
      }
    }

    function drawStrike(controller, strike, alpha, travel = 1) {
      const { ctx, width, height } = controller;
      ctx.clearRect(0, 0, width, height);

      const glowRadius = Math.min(Math.max(width, height) * 0.58, height * 1.45);
      const skyGlow = ctx.createRadialGradient(
        strike.trunk[0].x, 0, 0,
        strike.trunk[0].x, height * 0.22, glowRadius
      );
      skyGlow.addColorStop(0, `rgba(206, 222, 255, ${alpha * 0.2})`);
      skyGlow.addColorStop(0.38, `rgba(107, 151, 235, ${alpha * 0.075})`);
      skyGlow.addColorStop(1, "rgba(72, 110, 190, 0)");
      ctx.fillStyle = skyGlow;
      ctx.fillRect(0, 0, width, height);

      const passes = [
        { scale: 2.8, color: `rgba(118, 163, 255, ${alpha * 0.085})`, blur: 34 },
        { scale: 1.65, color: `rgba(184, 209, 255, ${alpha * 0.2})`, blur: 18 },
        { scale: 1, color: `rgba(248, 251, 255, ${alpha * 0.88})`, blur: 5 }
      ];

      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      for (const pass of passes) {
        ctx.strokeStyle = pass.color;
        ctx.shadowBlur = pass.blur;
        ctx.shadowColor = `rgba(150, 190, 255, ${alpha * 0.68})`;
        strokePath(ctx, strike.trunk, travel, 8.2, 0.95, pass.scale);
        for (const branch of strike.branches) {
          const branchTravel = (travel - branch.startProgress) / branch.spread;
          const startWidth = branch.depth === 1 ? 4.1 : 1.9;
          const endWidth = branch.depth === 1 ? 0.42 : 0.16;
          strokePath(ctx, branch.points, branchTravel, startWidth, endWidth, pass.scale);
        }
      }
      ctx.shadowBlur = 0;
    }

    function clear(controller) {
      controller.generation += 1;
      cancelAnimationFrame(controller.frame);
      window.clearTimeout(controller.timer);
      controller.ctx.clearRect(0, 0, controller.width, controller.height);
    }

    function schedule(controller, immediate = false) {
      clear(controller);
      if (!halloween || reduceMotion.matches || !controller.visible) return;
      const generation = controller.generation;
      controller.timer = window.setTimeout(() => {
        if (generation === controller.generation) strike(controller);
      }, immediate ? random(250, 900) : random(4200, 9800));
    }

    function strike(controller) {
      if (!halloween || reduceMotion.matches || !controller.visible) return;
      // Synchronize the drawing buffer immediately before each strike. This
      // prevents a bolt created for a content-visibility placeholder from
      // being scaled into the host's resolved dimensions.
      resize(controller);
      const generation = ++controller.generation;
      const previousOriginX = controller.lastOriginX;
      const bolt = createStrike(controller.width, controller.height, controller.lastOriginX);
      controller.lastOriginX = bolt.trunk[0].x;
      controller.strikeSequence += 1;
      controller.canvas.dataset.strikeSequence = String(controller.strikeSequence);
      controller.canvas.dataset.previousStrikeOrigin = previousOriginX === null ? "" : String(Math.round(previousOriginX));
      controller.canvas.dataset.strikeOrigin = String(Math.round(controller.lastOriginX));
      const startedAt = performance.now();

      function animate(now) {
        if (generation !== controller.generation) return;
        const elapsed = now - startedAt;
        let alpha = 0;
        let travel = 1;
        if (elapsed < 520) {
          const linearTravel = elapsed / 520;
          travel = 1 - Math.pow(1 - linearTravel, 2.4);
          alpha = Math.min(1, 0.28 + linearTravel * 0.82);
        } else if (elapsed < 620) {
          alpha = 0.28;
        } else if (elapsed < 720) {
          alpha = 0.88;
        } else if (elapsed < 1250) {
          alpha = 0.72 * (1 - (elapsed - 720) / 530);
        }

        drawStrike(controller, bolt, Math.max(0, alpha), travel);
        if (elapsed < 1250) {
          controller.frame = requestAnimationFrame(animate);
        } else {
          controller.ctx.clearRect(0, 0, controller.width, controller.height);
          schedule(controller);
        }
      }

      controller.frame = requestAnimationFrame(animate);
    }

    function resize(controller) {
      const rect = controller.host.getBoundingClientRect();
      controller.width = Math.max(1, rect.width);
      controller.height = Math.max(1, rect.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      controller.canvas.width = Math.round(controller.width * dpr);
      controller.canvas.height = Math.round(controller.height * dpr);
      controller.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      controller.ctx.clearRect(0, 0, controller.width, controller.height);
    }

    function attach(host) {
      if (controllers.has(host)) return;
      const canvas = document.createElement("canvas");
      canvas.className = "seasonal-lightning-canvas";
      canvas.setAttribute("aria-hidden", "true");
      host.classList.add("seasonal-lightning-host");
      host.append(canvas);
      const ctx = canvas.getContext("2d", { alpha: true });
      const controller = { host, canvas, ctx, width: 1, height: 1, visible: false, frame: 0, timer: 0, generation: 0, lastOriginX: null, strikeSequence: 0 };
      controller.resizeObserver = new ResizeObserver(() => resize(controller));
      controller.intersectionObserver = new IntersectionObserver(([entry]) => {
        controller.visible = entry.isIntersecting;
        schedule(controller, entry.isIntersecting);
      }, { rootMargin: "120px" });
      controller.resizeObserver.observe(host);
      controller.intersectionObserver.observe(host);
      controllers.set(host, controller);
      resize(controller);
    }

    function scan() {
      document.querySelectorAll(selector).forEach(attach);
      for (const [host, controller] of controllers) {
        if (!host.isConnected) {
          clear(controller);
          controller.resizeObserver.disconnect();
          controller.intersectionObserver.disconnect();
          controllers.delete(host);
        }
      }
    }

    function queueScan() {
      cancelAnimationFrame(rescanFrame);
      rescanFrame = requestAnimationFrame(scan);
    }

    function handleSeasonChange(event) {
      halloween = event.detail?.halloween ?? new Date().getMonth() === 9;
      controllers.forEach((controller) => schedule(controller, halloween));
    }

    function handleMotionChange() {
      controllers.forEach((controller) => schedule(controller, !reduceMotion.matches));
    }

    const mutationObserver = new MutationObserver(queueScan);
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    document.addEventListener("seasonchange", handleSeasonChange);
    reduceMotion.addEventListener("change", handleMotionChange);
    scan();

    return () => {
      cancelAnimationFrame(rescanFrame);
      mutationObserver.disconnect();
      document.removeEventListener("seasonchange", handleSeasonChange);
      reduceMotion.removeEventListener("change", handleMotionChange);
      for (const [host, controller] of controllers) {
        clear(controller);
        controller.resizeObserver.disconnect();
        controller.intersectionObserver.disconnect();
        controller.canvas.remove();
        host.classList.remove("seasonal-lightning-host");
      }
      controllers.clear();
    };
  });
</script>
