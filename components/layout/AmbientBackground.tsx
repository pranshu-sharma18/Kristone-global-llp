"use client";

import { useEffect, useRef } from "react";

type WaveLine = {
  baseY: number;
  amp: number;
  amp2: number;
  freq: number;
  freq2: number;
  speed: number;
  speed2: number;
  phase: number;
  phase2: number;
  alpha: number;
  width: number;
};

function createLines(height: number, count: number): WaveLine[] {
  const lines: WaveLine[] = [];
  for (let i = 0; i < count; i++) {
    const t = i / Math.max(count - 1, 1);
    lines.push({
      baseY: height * (0.04 + t * 0.92),
      amp: 10 + Math.random() * 28,
      amp2: 6 + Math.random() * 18,
      freq: 0.0022 + Math.random() * 0.0045,
      freq2: 0.001 + Math.random() * 0.0035,
      speed: 0.35 + Math.random() * 0.85,
      speed2: 0.2 + Math.random() * 0.6,
      phase: Math.random() * Math.PI * 2,
      phase2: Math.random() * Math.PI * 2,
      alpha: 0.18 + Math.random() * 0.35,
      width: 0.7 + Math.random() * 1.4,
    });
  }
  return lines;
}

export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lines: WaveLine[] = [];
    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let time = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(72, Math.max(36, height / 14)));
      lines = createLines(height, count);
    };

    const drawFrame = (staticMode: boolean) => {
      // Deep charcoal base
      ctx.fillStyle = "#0b0b0b";
      ctx.fillRect(0, 0, width, height);

      // Soft gold atmospheric blooms
      const g1 = ctx.createRadialGradient(
        width * 0.18,
        height * 0.12,
        0,
        width * 0.18,
        height * 0.12,
        width * 0.55
      );
      g1.addColorStop(0, "rgba(201, 169, 98, 0.14)");
      g1.addColorStop(1, "rgba(201, 169, 98, 0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      const g2 = ctx.createRadialGradient(
        width * 0.85,
        height * 0.55,
        0,
        width * 0.85,
        height * 0.55,
        width * 0.5
      );
      g2.addColorStop(0, "rgba(223, 200, 138, 0.08)");
      g2.addColorStop(1, "rgba(223, 200, 138, 0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      const g3 = ctx.createRadialGradient(
        width * 0.45,
        height * 0.95,
        0,
        width * 0.45,
        height * 0.95,
        width * 0.45
      );
      g3.addColorStop(0, "rgba(201, 169, 98, 0.07)");
      g3.addColorStop(1, "rgba(201, 169, 98, 0)");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, width, height);

      const step = width < 768 ? 8 : 5;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const warm = i % 3 === 0;
        ctx.beginPath();
        ctx.lineWidth = line.width;
        ctx.strokeStyle = warm
          ? `rgba(201, 169, 98, ${line.alpha})`
          : `rgba(245, 240, 230, ${line.alpha * 0.85})`;

        for (let x = -20; x <= width + 20; x += step) {
          const y =
            line.baseY +
            Math.sin(x * line.freq + time * line.speed + line.phase) * line.amp +
            Math.sin(x * line.freq2 - time * line.speed2 + line.phase2) * line.amp2 +
            Math.sin(x * 0.0015 + time * 0.25 + i * 0.35) * (4 + (i % 5));

          if (x === -20) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Extra chaotic cross-layer (thinner, faster feel)
      if (!staticMode) {
        for (let i = 0; i < lines.length; i += 3) {
          const line = lines[i];
          ctx.beginPath();
          ctx.lineWidth = 0.5;
          ctx.strokeStyle = `rgba(223, 200, 138, ${line.alpha * 0.45})`;
          for (let x = -20; x <= width + 20; x += step + 2) {
            const y =
              line.baseY +
              18 +
              Math.sin(x * line.freq * 1.4 + time * line.speed * 1.35 + line.phase) *
                (line.amp * 0.55) +
              Math.cos(x * line.freq2 + time * 0.7 + line.phase2) * line.amp2 * 0.7;
            if (x === -20) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      }
    };

    const tick = () => {
      time += 0.016;
      drawFrame(false);
      raf = requestAnimationFrame(tick);
    };

    resize();
    drawFrame(reduceMotion);

    const onResize = () => {
      resize();
      if (reduceMotion) drawFrame(true);
    };

    window.addEventListener("resize", onResize);
    if (!reduceMotion) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="site-atmosphere pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <canvas ref={canvasRef} className="wave-canvas absolute inset-0 h-full w-full" />
      <div className="atmosphere-veil" />
    </div>
  );
}
