"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const TextHoverEffect = ({
  text,
  duration,
  className,
  viewBox,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
  viewBox?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  const rafRef = useRef<number | null>(null);

  // Dynamically calculate viewBox width so words like "Xpertdental" fit comfortably without clipping
  const calculatedViewBox = viewBox || `0 0 ${Math.max(480, text.length * 48)} 110`;
  const dashLength = 1200;

  const updatePosition = useCallback((clientX: number, clientY: number) => {
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = Math.max(0, Math.min(100, ((clientX - svgRect.left) / svgRect.width) * 100));
      const cyPercentage = Math.max(0, Math.min(100, ((clientY - svgRect.top) / svgRect.height) * 100));
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, []);

  useEffect(() => {
    if (hovered && cursor.x !== 0) {
      updatePosition(cursor.x, cursor.y);
    }
  }, [cursor, hovered, updatePosition]);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      const clientX = e.touches[0].clientX;
      const clientY = e.touches[0].clientY;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setCursor({ x: clientX, y: clientY });
      });
    }
  };

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox={calculatedViewBox}
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => {
        setHovered(true);
        setCursor({ x: e.clientX, y: e.clientY });
      }}
      onTouchStart={(e) => {
        setHovered(true);
        if (e.touches[0]) {
          setCursor({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        }
      }}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setHovered(false)}
      className={cn("select-none uppercase cursor-pointer block max-w-full", className)}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#f5d4bf" />
          <stop offset="50%" stopColor="#e78a53" />
          <stop offset="75%" stopColor="#d87943" />
          <stop offset="100%" stopColor="#964a21" />
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="30%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0.1, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>

      {/* Base readable text - always legible and high contrast */}
      <text
        x="50%"
        y="62%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="1"
        style={{
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontSize: "56px",
          fontWeight: 800,
          letterSpacing: "0.08em",
        }}
        className="fill-gray-900/5 dark:fill-white/5 stroke-gray-300 dark:stroke-[#333333] transition-colors"
      >
        {text}
      </text>

      {/* Animated accent stroke */}
      <motion.text
        x="50%"
        y="62%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="1.2"
        style={{
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontSize: "56px",
          fontWeight: 800,
          letterSpacing: "0.08em",
        }}
        className="fill-transparent stroke-[#d87943] dark:stroke-[#e78a53]"
        initial={{ strokeDashoffset: dashLength, strokeDasharray: dashLength }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: dashLength,
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>

      {/* Interactive hover shimmer text */}
      <text
        x="50%"
        y="62%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="1.2"
        mask="url(#textMask)"
        style={{
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontSize: "56px",
          fontWeight: 800,
          letterSpacing: "0.08em",
        }}
        className="fill-white/20 dark:fill-white/20 transition-opacity"
      >
        {text}
      </text>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        background: `
          radial-gradient(ellipse 60% 40% at 50% 100%, rgba(231, 138, 83, 0.12), transparent 70%),
          radial-gradient(circle at 10% 20%, rgba(95, 135, 135, 0.08), transparent 40%),
          radial-gradient(circle at 90% 80%, rgba(216, 121, 67, 0.08), transparent 40%)
        `,
      }}
    />
  );
};
