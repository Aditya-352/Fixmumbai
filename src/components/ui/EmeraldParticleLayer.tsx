'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  opacityDelta: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
  swayOffset: number;
  swaySpeed: number;
}

interface AuroraLobe {
  baseX: number; // 0-1
  baseY: number; // 0-1
  radius: number;
  colorCenter: string;
  colorMid: string;
  colorOuter: string;
  baseOpacity: number;
  speedX: number;
  speedY: number;
  phase: number;
}

const PARTICLE_COLORS = [
  'rgba(16,185,129,',   // emerald #10B981
  'rgba(5,150,105,',    // deep green #059669
  'rgba(167,243,208,',  // mint #A7F3D0
  'rgba(52,211,153,',   // medium emerald #34D399
  'rgba(110,231,183,',  // pale mint #6EE7B7
  'rgba(236,253,245,',  // pale green #ECFDF5
];

function createParticle(w: number, h: number): Particle {
  const color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.32,
    vy: -Math.random() * 0.35 - 0.08, // gentle upward drift
    radius: Math.random() * 1.8 + 0.5,
    opacity: Math.random() * 0.35 + 0.08,
    opacityDelta: (Math.random() - 0.5) * 0.003,
    color,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: Math.random() * 0.015 + 0.006,
    swayOffset: Math.random() * Math.PI * 2,
    swaySpeed: Math.random() * 0.0015 + 0.0008,
  };
}

export default function EmeraldParticleLayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // 1. Accessibility: Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Detect touch-only devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

    // Set particle counts: 36 on desktop, 14 on mobile
    const isMobile = window.innerWidth < 768;
    const particleCount = prefersReducedMotion ? 0 : isMobile ? 14 : 36;

    // Responsive Canvas Dimensions with DPR scaling for crisp rendering
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Initialize particles
    const particles: Particle[] = Array.from({ length: particleCount }, () =>
      createParticle(width, height)
    );

    // Aurora lobes (slow moving undulating waves over 15-30s)
    const auroraLobes: AuroraLobe[] = [
      {
        baseX: 0.18,
        baseY: 0.22,
        radius: 460,
        colorCenter: 'rgba(16,185,129,',   // #10B981
        colorMid: 'rgba(167,243,208,',     // #A7F3D0
        colorOuter: 'rgba(236,253,245,0)', // #ECFDF5
        baseOpacity: 0.09,
        speedX: 0.00028,
        speedY: 0.00032,
        phase: 0,
      },
      {
        baseX: 0.82,
        baseY: 0.35,
        radius: 420,
        colorCenter: 'rgba(5,150,105,',    // #059669 deep green
        colorMid: 'rgba(52,211,153,',      // #34D399
        colorOuter: 'rgba(16,185,129,0)',
        baseOpacity: 0.075,
        speedX: 0.00022,
        speedY: 0.00026,
        phase: Math.PI * 0.7,
      },
      {
        baseX: 0.45,
        baseY: 0.80,
        radius: 480,
        colorCenter: 'rgba(167,243,208,',  // mint
        colorMid: 'rgba(16,185,129,',      // emerald
        colorOuter: 'rgba(236,253,245,0)',
        baseOpacity: 0.08,
        speedX: 0.00025,
        speedY: 0.00020,
        phase: Math.PI * 1.4,
      },
      {
        baseX: 0.15,
        baseY: 0.75,
        radius: 360,
        colorCenter: 'rgba(16,185,129,',
        colorMid: 'rgba(5,150,105,',
        colorOuter: 'rgba(167,243,208,0)',
        baseOpacity: 0.06,
        speedX: 0.00030,
        speedY: 0.00024,
        phase: Math.PI * 0.3,
      },
    ];

    // Cursor Glow State (LERP interpolation for smooth trailing effect)
    const cursor = {
      targetX: width * 0.5,
      targetY: height * 0.3,
      currentX: width * 0.5,
      currentY: height * 0.3,
      opacity: 0,
      targetOpacity: 0,
      radius: 190, // ~380px wide glow
      isMoving: false,
      lastMoveTime: 0,
    };

    // Pointer events without causing any React re-renders
    const handleMouseMove = (e: MouseEvent) => {
      if (isTouchDevice) return;
      cursor.targetX = e.clientX;
      cursor.targetY = e.clientY;
      cursor.targetOpacity = 1;
      cursor.isMoving = true;
      cursor.lastMoveTime = performance.now();
    };

    const handleMouseLeave = () => {
      cursor.targetOpacity = 0;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      if (isTouchDevice) return;
      cursor.targetX = e.clientX;
      cursor.targetY = e.clientY;
      cursor.targetOpacity = 1;
    };

    if (!isTouchDevice) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
      document.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    }

    // Animation Loop
    let animId = 0;
    let startTime = performance.now();

    function render(time: number) {
      if (!ctx) return;
      const elapsed = time - startTime;
      ctx.clearRect(0, 0, width, height);

      // ── 1. SLOW-MOVING EMERALD AURORA FIELDS & AMBIENT BLOOMS ──
      for (let i = 0; i < auroraLobes.length; i++) {
        const lobe = auroraLobes[i];
        const tX = prefersReducedMotion ? 0 : Math.sin(time * lobe.speedX + lobe.phase);
        const tY = prefersReducedMotion ? 0 : Math.cos(time * lobe.speedY + lobe.phase);
        const pulse = prefersReducedMotion ? 1 : 1 + Math.sin(time * 0.0004 + lobe.phase) * 0.15;

        const gx = (lobe.baseX + tX * 0.07) * width;
        const gy = (lobe.baseY + tY * 0.06) * height;
        const gradRad = lobe.radius * pulse;
        const currentOpacity = lobe.baseOpacity * pulse;

        const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, gradRad);
        grad.addColorStop(0, `${lobe.colorCenter}${currentOpacity})`);
        grad.addColorStop(0.45, `${lobe.colorMid}${currentOpacity * 0.5})`);
        grad.addColorStop(1, lobe.colorOuter);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(gx, gy, gradRad, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── 2. CURSOR-FOLLOWING EMERALD GLOW (SMOOTH INTERPOLATED LERP) ──
      if (!isTouchDevice && !prefersReducedMotion) {
        cursor.currentX += (cursor.targetX - cursor.currentX) * 0.075;
        cursor.currentY += (cursor.targetY - cursor.currentY) * 0.075;
        cursor.opacity += (cursor.targetOpacity - cursor.opacity) * 0.06;

        // Subtle breathing when stationary
        const isStationary = time - cursor.lastMoveTime > 300;
        const breath = isStationary ? Math.sin(time * 0.002) * 12 : 0;
        const currentRadius = cursor.radius + breath;

        if (cursor.opacity > 0.005) {
          const cGrad = ctx.createRadialGradient(
            cursor.currentX,
            cursor.currentY,
            0,
            cursor.currentX,
            cursor.currentY,
            currentRadius
          );
          // Very soft diffuse emerald/mint gradient
          const glowAlpha = 0.095 * cursor.opacity;
          cGrad.addColorStop(0, `rgba(16,185,129,${glowAlpha})`);
          cGrad.addColorStop(0.35, `rgba(52,211,153,${glowAlpha * 0.6})`);
          cGrad.addColorStop(0.70, `rgba(167,243,208,${glowAlpha * 0.25})`);
          cGrad.addColorStop(1, 'rgba(16,185,129,0)');

          ctx.fillStyle = cGrad;
          ctx.beginPath();
          ctx.arc(cursor.currentX, cursor.currentY, currentRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // ── 3. FLOATING PARTICLES & OPTIONAL FAINT CONNECTING TRAILS ──
      if (!prefersReducedMotion && particles.length > 0) {
        // Draw faint connecting lines between a few nearby particles
        ctx.lineWidth = 0.6;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.hypot(dx, dy);
            if (dist < 85) {
              const lineAlpha = (1 - dist / 85) * 0.065;
              ctx.strokeStyle = `rgba(16,185,129,${lineAlpha})`;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }

        // Draw and update each particle
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Update position with subtle organic sway
          p.x += p.vx + Math.sin(time * p.swaySpeed + p.swayOffset) * 0.25;
          p.y += p.vy;
          p.pulse += p.pulseSpeed;
          p.opacity += p.opacityDelta;

          // Wrap around canvas boundaries smoothly
          if (p.y < -15) {
            p.y = height + 15;
            p.x = Math.random() * width;
          }
          if (p.x < -15) p.x = width + 15;
          if (p.x > width + 15) p.x = -15;

          // Clamp opacity between bounds
          if (p.opacity > 0.42 || p.opacity < 0.04) {
            p.opacityDelta *= -1;
          }

          // Dynamic pulsed radius
          const pulsedR = Math.max(0.4, p.radius + Math.sin(p.pulse) * 0.35);

          // Outer subtle aura
          const haloGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulsedR * 3.2);
          haloGrad.addColorStop(0, `${p.color}${p.opacity * 0.9})`);
          haloGrad.addColorStop(0.5, `${p.color}${p.opacity * 0.3})`);
          haloGrad.addColorStop(1, `${p.color}0)`);
          ctx.fillStyle = haloGrad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, pulsedR * 3.2, 0, Math.PI * 2);
          ctx.fill();

          // Sharp bright core
          ctx.fillStyle = `${p.color}${Math.min(p.opacity * 1.6, 0.65)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, pulsedR * 0.75, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    }

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      if (!isTouchDevice) {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mouseenter', handleMouseEnter);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        display: 'block',
      }}
    />
  );
}
