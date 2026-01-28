"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AnimationShowcase() {
  // State to track which box was clicked to trigger its animation
  const [clickedBox, setClickedBox] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedBox(index);
    // Reset after animation duration (approx 1s) to allow re-clicking
    setTimeout(() => setClickedBox(null), 1000);
  };

  const animations = [
    {
      id: 1,
      name: "Scale Pulse",
      initial: { scale: 1 },
      animate: { scale: [1, 1.2, 0.9, 1.05, 1] },
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    {
      id: 2,
      name: "Rotate 360",
      initial: { rotate: 0 },
      animate: { rotate: 360 },
      transition: { duration: 0.6, ease: "circOut" },
    },
    {
      id: 3,
      name: "Flip Horizontal",
      initial: { rotateY: 0 },
      animate: { rotateY: 180 },
      transition: { duration: 0.6 },
    },
    {
      id: 4,
      name: "Shake",
      initial: { x: 0 },
      animate: { x: [-10, 10, -10, 10, 0] },
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
    {
      id: 5,
      name: "Bounce",
      initial: { y: 0 },
      animate: { y: -30 },
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 10,
        repeat: 1,
        repeatType: "reverse",
      },
    },
    {
      id: 6,
      name: "Rubber Band",
      initial: { scale: 1 },
      animate: { scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1], scaleY: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1] },
      transition: { duration: 0.8 },
    },
    {
      id: 7,
      name: "Wobble",
      initial: { rotate: 0 },
      animate: { rotate: [-5, 5, -3, 3, -1, 1, 0] },
      transition: { duration: 0.5 },
    },
    {
      id: 8,
      name: "Background Flash",
      initial: { backgroundColor: "rgba(255, 255, 255, 0.1)" },
      animate: { backgroundColor: ["rgba(255, 255, 255, 0.1)", "#3b82f6", "rgba(255, 255, 255, 0.1)"] },
      transition: { duration: 0.5 },
    },
    {
      id: 9,
      name: "Squeeze",
      initial: { scale: 1 },
      animate: { scaleX: [1, 1.3, 0.8, 1], scaleY: [1, 0.8, 1.3, 1] },
      transition: { duration: 0.5 },
    },
    {
      id: 10,
      name: "Skew",
      initial: { skew: 0 },
      animate: { skew: [-20, 20, -10, 10, 0] },
      transition: { duration: 0.6 },
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-light tracking-tight mb-2">Animation Options</h1>
          <p className="text-neutral-400">Select an animation box to preview the effect.</p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {animations.map((anim) => (
            <motion.div
              key={anim.id}
              className="aspect-square bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-neutral-600 transition-colors relative overflow-hidden group"
              onClick={() => handleClick(anim.id)}
              animate={clickedBox === anim.id ? anim.animate : anim.initial}
              transition={anim.transition as any}
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-4xl font-bold text-neutral-700 group-hover:text-neutral-500 transition-colors">
                {anim.id.toString().padStart(2, "0")}
              </span>
              <p className="absolute bottom-4 text-xs text-neutral-500 uppercase tracking-wider font-medium">
                {anim.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
