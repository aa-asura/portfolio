import React, { useState, useRef, MouseEvent } from 'react';

interface InteractiveCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  id?: string;
  key?: React.Key;
}

export default function InteractiveCard({ children, className = '', onClick, id }: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x coordinate within element
    const y = e.clientY - rect.top;  // y coordinate within element

    // Calculate normalized position from -0.5 to 0.5
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;

    // Constrain maximum tilt angle (e.g. 10 degrees max)
    const maxTilt = 8;
    setRotate({
      x: -normalizedY * maxTilt,
      y: normalizedX * maxTilt,
    });

    // Spotlight position as percentages
    setSpotlight({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative rounded-xl border transition-all duration-300 overflow-hidden cursor-pointer ${
        isHovered
          ? 'border-mountain-cyan/35 bg-mountain-slate/25 shadow-[0_15px_30px_-15px_rgba(6,182,212,0.15)]'
          : 'border-mountain-ice/5 bg-mountain-obsidian/30'
      } ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: isHovered ? 'none' : 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(220px circle at ${spotlight.x}% ${spotlight.y}%, rgba(6, 182, 212, 0.08), transparent 75%)`,
        }}
      />

      {/* Gloss Refraction Stripe */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 bg-gradient-to-tr from-transparent via-mountain-ice/3 to-transparent -translate-x-full"
        style={{
          opacity: isHovered ? 0.4 : 0,
          transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
          transition: isHovered ? 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
        }}
      />

      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
