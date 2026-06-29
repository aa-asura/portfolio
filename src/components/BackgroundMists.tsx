import React, { useEffect, useRef } from 'react';

export default function BackgroundMists() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle definitions
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      fadeSpeed: number;
      pulseSpeed: number;
      pulseFactor: number;
    }

    interface Mist {
      x: number;
      y: number;
      vx: number;
      radius: number;
      alpha: number;
      scaleY: number;
    }

    const particles: Particle[] = [];
    const mists: Mist[] = [];

    // Create subtle floating frost particles
    const particleCount = 45;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: -0.1 - Math.random() * 0.2, // Drifts upwards slowly
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        fadeSpeed: 0.002 + Math.random() * 0.003,
        pulseSpeed: 0.01 + Math.random() * 0.02,
        pulseFactor: Math.random() * Math.PI,
      });
    }

    // Create larger soft drifting mist spots
    const mistCount = 6;
    for (let i = 0; i < mistCount; i++) {
      mists.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.8,
        vx: (Math.random() * 0.05 + 0.02) * (Math.random() > 0.5 ? 1 : -1),
        radius: Math.random() * 250 + 150,
        alpha: Math.random() * 0.06 + 0.02,
        scaleY: Math.random() * 0.4 + 0.3, // flattened horizontally
      });
    }

    // Handle mouse movement parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - window.innerWidth / 2) * 0.03;
      targetMouseY = (e.clientY - window.innerHeight / 2) * 0.03;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Frame rendering loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Draw large ambient mountain mists
      mists.forEach((mist) => {
        mist.x += mist.vx;

        // Wrap around boundaries
        if (mist.x - mist.radius > width) {
          mist.x = -mist.radius;
        } else if (mist.x + mist.radius < 0) {
          mist.x = width + mist.radius;
        }

        // Render squashed radial gradient for fog layers
        ctx.save();
        ctx.translate(mist.x + mouseX * 0.5, mist.y + mouseY * 0.5);
        ctx.scale(1, mist.scaleY);

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, mist.radius);
        gradient.addColorStop(0, `rgba(36, 40, 49, ${mist.alpha})`);
        gradient.addColorStop(0.5, `rgba(13, 14, 17, ${mist.alpha * 0.4})`);
        gradient.addColorStop(1, 'rgba(5, 6, 8, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, mist.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw floating frost particles
      particles.forEach((p) => {
        p.y += p.vy;
        p.x += p.vx;

        // Wrap around edges
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        p.pulseFactor += p.pulseSpeed;
        const currentAlpha = p.alpha + Math.sin(p.pulseFactor) * 0.08;

        ctx.beginPath();
        ctx.arc(p.x + mouseX, p.y + mouseY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226, 241, 255, ${Math.max(0.01, Math.min(currentAlpha, 0.65))})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-85"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
