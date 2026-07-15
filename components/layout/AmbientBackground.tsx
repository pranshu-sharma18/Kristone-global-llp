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
      baseY: height * (0.06 + t * 0.88),
      amp: 8 + Math.random() * 18,
      amp2: 4 + Math.random() * 10,
      freq: 0.002 + Math.random() * 0.0035,
      freq2: 0.0009 + Math.random() * 0.0025,
      speed: 0.22 + Math.random() * 0.45,
      speed2: 0.12 + Math.random() * 0.35,
      phase: Math.random() * Math.PI * 2,
      phase2: Math.random() * Math.PI * 2,
      // Keep lines soft so content stays primary
      alpha: 0.05 + Math.random() * 0.08,
      width: 0.5 + Math.random() * 0.7,
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
      // Fewer lines = less visual noise behind copy
      const count = Math.round(Math.min(28, Math.max(16, height / 36)));
      lines = createLines(height, count);
    };

    const drawFrame = () => {
      ctx.fillStyle = "#0c0c0c";
      ctx.fillRect(0, 0, width, height);

      const g1 = ctx.createRadialGradient(
        width * 0.2,
        height * 0.15,
        0,
        width * 0.2,
        height * 0.15,
        width * 0.5
      );
      g1.addColorStop(0, "rgba(201, 169, 98, 0.06)");
      g1.addColorStop(1, "rgba(201, 169, 98, 0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      const g2 = ctx.createRadialGradient(
        width * 0.82,
        height * 0.7,
        0,
        width * 0.82,
        height * 0.7,
        width * 0.45
      );
      g2.addColorStop(0, "rgba(223, 200, 138, 0.04)");
      g2.addColorStop(1, "rgba(223, 200, 138, 0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      const step = width < 768 ? 10 : 7;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const warm = i % 4 === 0;
        ctx.beginPath();
        ctx.lineWidth = line.width;
        ctx.strokeStyle = warm
          ? `rgba(201, 169, 98, ${line.alpha})`
          : `rgba(220, 215, 205, ${line.alpha * 0.7})`;

        for (let x = -20; x <= width + 20; x += step) {
          const y =
            line.baseY +
            Math.sin(x * line.freq + time * line.speed + line.phase) * line.amp +
            Math.sin(x * line.freq2 - time * line.speed2 + line.phase2) * line.amp2;

          if (x === -20) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };

    const tick = () => {
      time += 0.012;
      drawFrame();
      raf = requestAnimationFrame(tick);
    };

    resize();
    drawFrame();

    const onResize = () => {
      resize();
      drawFrame();
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
