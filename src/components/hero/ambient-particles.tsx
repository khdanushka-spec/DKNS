"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

/**
 * A sparse field of soft-glow points behind the ecosystem node graph —
 * ambient ATMOSPHERE, not another interactive layer. Drifts continuously and
 * parallaxes gently toward the pointer (lerp, not push-repulsion, so it
 * never competes visually with EcosystemCanvas's node interactions).
 */
export function AmbientParticles({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const visibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmall = window.matchMedia("(max-width: 768px)").matches;
    const rootStyles = getComputedStyle(document.documentElement);

    function hexToRgb(hex: string) {
      const clean = hex.replace("#", "");
      const bigint = parseInt(clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean, 16);
      return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
    }

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];

    function seed() {
      const count = isSmall ? 40 : 90;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
        r: Math.random() * 1.4 + 0.6,
      }));
    }

    function resize() {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const io = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting;
    });
    io.observe(container);

    function onPointerMove(e: PointerEvent) {
      const rect = container!.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
    window.addEventListener("pointermove", onPointerMove);

    const primary = rootStyles.getPropertyValue("--primary").trim() || "#34d399";
    const rgb = hexToRgb(primary.startsWith("#") ? primary : "#34d399");

    function drawStatic() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.35)`;
        ctx.fill();
      });
    }

    if (reducedMotion) {
      drawStatic();
      return () => {
        ro.disconnect();
        io.disconnect();
        window.removeEventListener("pointermove", onPointerMove);
      };
    }

    let raf = 0;
    function draw() {
      if (!ctx) return;
      if (!visibleRef.current) {
        raf = requestAnimationFrame(draw);
        return;
      }
      ctx.clearRect(0, 0, width, height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const hasMouse = mx > 0 || my > 0;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        let dx = 0;
        let dy = 0;
        if (hasMouse) {
          dx = (mx - p.x) * 0.012;
          dy = (my - p.y) * 0.012;
        }

        ctx.beginPath();
        ctx.arc(p.x + dx, p.y + dy, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3)`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
