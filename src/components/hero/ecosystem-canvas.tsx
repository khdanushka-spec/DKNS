"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export type EcosystemNode = {
  id: string;
  label: string;
};

type Point = { x: number; y: number };

/**
 * Shared canvas node-network engine. Decorative mode (Hero) just drifts and
 * pulses; interactive mode (Digital Operating System section) additionally
 * accepts clicks and reports the selected node id. A single hand-built 2D
 * canvas replaces a WebGL/Three.js scene here — see HANDOVER.md for why.
 */
export function EcosystemCanvas({
  nodes,
  edges,
  interactive = false,
  selectedId = null,
  onSelect,
  className,
}: {
  nodes: EcosystemNode[];
  edges: [string, string][];
  interactive?: boolean;
  selectedId?: string | null;
  onSelect?: (id: string | null) => void;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<Point>({ x: -9999, y: -9999 });
  const offsetsRef = useRef<Map<string, Point>>(new Map());
  const selectedRef = useRef<string | null>(selectedId);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const hoverRef = useRef<string | null>(null);

  useEffect(() => {
    selectedRef.current = selectedId;
  }, [selectedId]);

  const basePosition = useCallback(
    (index: number, total: number, w: number, h: number): Point => {
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.36;
      const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
      return { x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius };
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rootStyles = getComputedStyle(document.documentElement);
    const primary = rootStyles.getPropertyValue("--primary").trim() || "#0c3d2b";
    const accent = rootStyles.getPropertyValue("--accent").trim() || "#b89257";
    const fgMuted = rootStyles.getPropertyValue("--fg-muted").trim() || "#4a564f";

    let width = 0;
    let height = 0;
    let dpr = 1;

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
    }
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    function hexToRgb(hex: string) {
      const clean = hex.replace("#", "");
      const bigint = parseInt(clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean, 16);
      return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
    }
    const primaryRgb = hexToRgb(primary.startsWith("#") ? primary : "#0c3d2b");
    const accentRgb = hexToRgb(accent.startsWith("#") ? accent : "#b89257");

    function onPointerMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
    function onPointerLeave() {
      mouseRef.current = { x: -9999, y: -9999 };
    }
    function onClick(e: MouseEvent) {
      if (!interactive) return;
      const rect = canvas!.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      let closest: { id: string; dist: number } | null = null;
      nodes.forEach((node, i) => {
        const base = basePosition(i, nodes.length, width, height);
        const off = offsetsRef.current.get(node.id) ?? { x: 0, y: 0 };
        const dx = px - (base.x + off.x);
        const dy = py - (base.y + off.y);
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 46 && (!closest || dist < closest.dist)) closest = { id: node.id, dist };
      });
      onSelect?.(closest ? (closest as { id: string }).id : null);
    }

    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);
    canvas.addEventListener("click", onClick);

    let raf = 0;
    let t = 0;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const positions = new Map<string, Point>();
      nodes.forEach((node, i) => {
        const base = basePosition(i, nodes.length, width, height);
        const drift = reducedMotion
          ? { x: 0, y: 0 }
          : { x: Math.sin(t * 0.6 + i * 1.3) * 6, y: Math.cos(t * 0.5 + i * 1.7) * 6 };

        const mouse = mouseRef.current;
        const dx = mouse.x - (base.x + drift.x);
        const dy = mouse.y - (base.y + drift.y);
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = 140;
        let pushX = 0;
        let pushY = 0;
        if (dist < influence) {
          const strength = (1 - dist / influence) * 14;
          pushX = (-dx / (dist || 1)) * strength;
          pushY = (-dy / (dist || 1)) * strength;
        }

        const prev = offsetsRef.current.get(node.id) ?? { x: 0, y: 0 };
        const targetX = drift.x + pushX;
        const targetY = drift.y + pushY;
        const eased = { x: prev.x + (targetX - prev.x) * 0.08, y: prev.y + (targetY - prev.y) * 0.08 };
        offsetsRef.current.set(node.id, eased);

        positions.set(node.id, { x: base.x + eased.x, y: base.y + eased.y });
      });

      // edges
      edges.forEach(([a, b], idx) => {
        const pa = positions.get(a);
        const pb = positions.get(b);
        if (!pa || !pb) return;
        const midX = (pa.x + pb.x) / 2;
        const midY = (pa.y + pb.y) / 2;
        const dx = pb.x - pa.x;
        const dy = pb.y - pa.y;
        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        const perpX = -dy / len;
        const perpY = dx / len;
        const bow = Math.sin(idx * 1.7) * 22;
        const cx = midX + perpX * bow;
        const cy = midY + perpY * bow;

        const isConnectedToSelected = interactive && selectedRef.current && (a === selectedRef.current || b === selectedRef.current);
        const isConnectedToHover = a === hoverRef.current || b === hoverRef.current;
        const active = isConnectedToSelected || isConnectedToHover;

        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.quadraticCurveTo(cx, cy, pb.x, pb.y);
        ctx.strokeStyle = active
          ? `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.55)`
          : `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.14)`;
        ctx.lineWidth = active ? 1.6 : 1;
        ctx.stroke();

        if (!reducedMotion) {
          const pulseT = (t * 0.25 + idx * 0.37) % 1;
          const pt = quadPoint(pa, { x: cx, y: cy }, pb, pulseT);
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, active ? 2.4 : 1.6, 0, Math.PI * 2);
          ctx.fillStyle = active
            ? `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, 0.9)`
            : `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.4)`;
          ctx.fill();
        }
      });

      // nodes
      nodes.forEach((node) => {
        const p = positions.get(node.id);
        if (!p) return;
        const isSelected = interactive && selectedRef.current === node.id;
        const isHover = hoverRef.current === node.id;
        const r = isSelected ? 8 : isHover ? 7 : 5.5;

        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 4);
        const glowColor = isSelected ? accentRgb : primaryRgb;
        glow.addColorStop(0, `rgba(${glowColor.r}, ${glowColor.g}, ${glowColor.b}, 0.35)`);
        glow.addColorStop(1, `rgba(${glowColor.r}, ${glowColor.g}, ${glowColor.b}, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = isSelected
          ? `rgb(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b})`
          : `rgb(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b})`;
        ctx.fill();

        ctx.font = `500 12px var(--font-body, sans-serif)`;
        ctx.fillStyle = fgMuted.startsWith("#") ? fgMuted : "#4a564f";
        ctx.textAlign = "center";
        ctx.fillText(node.label, p.x, p.y + r + 18);
      });

      if (!reducedMotion) t += 0.016;
      raf = requestAnimationFrame(draw);
    }
    draw();

    function onHoverCheck(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      let found: string | null = null;
      nodes.forEach((node, i) => {
        const base = basePosition(i, nodes.length, width, height);
        const off = offsetsRef.current.get(node.id) ?? { x: 0, y: 0 };
        const dx = px - (base.x + off.x);
        const dy = py - (base.y + off.y);
        if (Math.sqrt(dx * dx + dy * dy) < 46) found = node.id;
      });
      hoverRef.current = found;
      setHoverId(found);
      canvas!.style.cursor = interactive && found ? "pointer" : "default";
    }
    canvas.addEventListener("pointermove", onHoverCheck);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      canvas.removeEventListener("click", onClick);
      canvas.removeEventListener("pointermove", onHoverCheck);
    };
  }, [nodes, edges, interactive, onSelect, basePosition]);

  return (
    <div ref={containerRef} className={className} aria-hidden={!interactive}>
      <canvas ref={canvasRef} className={interactive ? "cursor-pointer" : ""} />
      {interactive && hoverId && (
        <span className="sr-only">Selected: {nodes.find((n) => n.id === hoverId)?.label}</span>
      )}
    </div>
  );
}

function quadPoint(p0: Point, p1: Point, p2: Point, t: number): Point {
  const x = (1 - t) * (1 - t) * p0.x + 2 * (1 - t) * t * p1.x + t * t * p2.x;
  const y = (1 - t) * (1 - t) * p0.y + 2 * (1 - t) * t * p1.y + t * t * p2.y;
  return { x, y };
}
