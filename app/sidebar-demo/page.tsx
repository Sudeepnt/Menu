"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Settings, Clock, Layers } from "lucide-react";

export default function SidebarDemo() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedAnim, setSelectedAnim] = useState<number>(1);

    // Controls for "breaking down" the animation
    const [speedMultiplier, setSpeedMultiplier] = useState(1);
    const [staggerDelay, setStaggerDelay] = useState(0.1);

    // Staggered content variants
    const contentVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4 * speedMultiplier }
        }
    };

    const getContainerTransition = (baseTransition: any) => {
        const duration = (baseTransition.duration || 0.5) * speedMultiplier;

        return {
            ...baseTransition,
            duration: duration,
            staggerChildren: staggerDelay * speedMultiplier,
            delayChildren: (baseTransition.delayChildren || 0.2) * speedMultiplier,
            ...(baseTransition.type === 'spring' ? {
                stiffness: baseTransition.stiffness ? baseTransition.stiffness / speedMultiplier : undefined,
                damping: baseTransition.damping ? baseTransition.damping * Math.sqrt(speedMultiplier) : undefined
            } : {})
        };
    };

    const animations = [
        // --- Original 1-13 ---
        { id: 1, name: "Smart Slide", description: "Smooth iOS-style slide", container: { initial: { x: "100%" }, animate: { x: "0%" }, exit: { x: "100%" }, baseTransition: { type: "spring", stiffness: 300, damping: 30 } } },
        { id: 2, name: "Mask Reveal", description: "Sharp clipping mask", container: { initial: { clipPath: "inset(0 0 0 100%)" }, animate: { clipPath: "inset(0 0 0 0%)" }, exit: { clipPath: "inset(0 0 0 100%)" }, baseTransition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } },
        { id: 3, name: "3D Perspective", description: "Door opening effect", container: { initial: { rotateY: 90, transformOrigin: "right", opacity: 0 }, animate: { rotateY: 0, opacity: 1 }, exit: { rotateY: 90, opacity: 0 }, baseTransition: { duration: 0.6, ease: "circOut" } } },
        { id: 4, name: "Blur Fade", description: "Soft blur + scale", container: { initial: { opacity: 0, filter: "blur(20px)", scale: 0.95 }, animate: { opacity: 1, filter: "blur(0px)", scale: 1 }, exit: { opacity: 0, filter: "blur(20px)", scale: 0.95 }, baseTransition: { duration: 0.4, ease: "easeOut" } } },
        { id: 5, name: "Parallax Slide", description: "Diff speed sidebar/content", container: { initial: { x: "100%" }, animate: { x: "0%" }, exit: { x: "100%" }, baseTransition: { type: "tween", ease: "circOut", duration: 0.5 } } },
        { id: 6, name: "Circular Expand", description: "Expands from point", container: { initial: { clipPath: "circle(0% at 100% 50%)" }, animate: { clipPath: "circle(150% at 100% 50%)" }, exit: { clipPath: "circle(0% at 100% 50%)" }, baseTransition: { duration: 0.7, ease: "easeInOut" } } },
        { id: 7, name: "Elastic Snap", description: "High energy spring", container: { initial: { x: "120%" }, animate: { x: "0%" }, exit: { x: "120%" }, baseTransition: { type: "spring", stiffness: 400, damping: 25 } } },
        { id: 8, name: "Slide Up", description: "Diagonal movement", container: { initial: { x: "100%", y: "100%" }, animate: { x: "0%", y: "0%" }, exit: { x: "100%", y: "100%" }, baseTransition: { type: "spring", damping: 30 } } },
        { id: 9, name: "Fold Out", description: "Unfolds like paper", container: { initial: { scaleX: 0, transformOrigin: "right" }, animate: { scaleX: 1 }, exit: { scaleX: 0 }, baseTransition: { duration: 0.5, ease: "easeInOut" } } },
        { id: 10, name: "Glitch Slide", description: "Fast stepped movement", container: { initial: { x: "100%" }, animate: { x: ["100%", "50%", "25%", "80%", "0%"] }, exit: { x: "100%" }, baseTransition: { times: [0, 0.2, 0.4, 0.6, 1], duration: 0.4 } } },
        { id: 11, name: "Pivot Top", description: "Swings from top-right", container: { initial: { rotate: -90, transformOrigin: "top right", opacity: 0 }, animate: { rotate: 0, opacity: 1 }, exit: { rotate: -90, opacity: 0 }, baseTransition: { type: "spring", damping: 20 } } },
        { id: 12, name: "Zoom Out In", description: "Starts huge, shrinks in", container: { initial: { scale: 2, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 2, opacity: 0 }, baseTransition: { duration: 0.5, ease: "circOut" } } },
        { id: 13, name: "Flip Vertical", description: "Rotates over X axis", container: { initial: { rotateX: 90, transformOrigin: "top", opacity: 0 }, animate: { rotateX: 0, opacity: 1 }, exit: { rotateX: 90, opacity: 0 }, baseTransition: { duration: 0.6, ease: "backOut" } } },

        // --- Fixed 14-20 ---
        { id: 14, name: "Spiral In (Fixed)", description: "Rotates and scales in", container: { initial: { x: "100%", opacity: 0, rotate: 90 }, animate: { x: "0%", opacity: 1, rotate: 0 }, exit: { x: "100%", opacity: 0, rotate: 90 }, baseTransition: { type: "spring", damping: 20, stiffness: 100 } } },
        { id: 15, name: "Dramatic Drop (Fixed)", description: "Falls from top", container: { initial: { y: "-100%" }, animate: { y: "0%" }, exit: { y: "-100%" }, baseTransition: { type: "spring", mass: 1, damping: 20, stiffness: 120 } } },
        { id: 16, name: "Cyber Punk", description: "Flashy stepped opacity", container: { initial: { x: "100%", opacity: 0 }, animate: { x: "0%", opacity: 1 }, exit: { x: "100%" }, baseTransition: { duration: 0.4 } } },
        { id: 17, name: "Rolling Paper", description: "Unfurls from right", container: { initial: { width: 0, opacity: 0 }, animate: { width: 320, opacity: 1 }, exit: { width: 0, opacity: 0 }, baseTransition: { duration: 0.5, ease: "easeInOut" } } },
        { id: 18, name: "Corner Morph", description: "Circle to rect morph", container: { initial: { borderBottomLeftRadius: "100%", clipPath: "circle(10% at 100% 0%)" }, animate: { borderBottomLeftRadius: "0%", clipPath: "circle(150% at 100% 0%)" }, exit: { borderBottomLeftRadius: "100%", clipPath: "circle(10% at 100% 0%)" }, baseTransition: { duration: 0.7, ease: "easeInOut" } } },
        { id: 19, name: "Swing Hinge (Fixed)", description: "Door hinge effect", container: { initial: { rotateY: 90, transformOrigin: "right", x: "10%" }, animate: { rotateY: 0, x: "0%" }, exit: { rotateY: 90, x: "10%" }, baseTransition: { type: "spring", damping: 15, stiffness: 100 } } },
        { id: 20, name: "Ghost Fade (Fixed)", description: "Slow blur fade", container: { initial: { opacity: 0, filter: "blur(10px)" }, animate: { opacity: 1, filter: "blur(0px)" }, exit: { opacity: 0, filter: "blur(10px)" }, baseTransition: { duration: 0.8, ease: "easeOut" } } },

        // --- 21-30 ---
        { id: 21, name: "Drawer Slide", description: "Slides out from 'under'", container: { initial: { zIndex: -1, x: "50%", scale: 0.9, opacity: 0 }, animate: { zIndex: 50, x: "0%", scale: 1, opacity: 1 }, exit: { zIndex: -1, x: "50%", scale: 0.9, opacity: 0 }, baseTransition: { duration: 0.5, ease: "easeInOut" } } },
        { id: 22, name: "Tv Switch", description: "Old TV turn-on effect", container: { initial: { scaleY: 0.01, scaleX: 0, opacity: 0 }, animate: { scaleY: 1, scaleX: 1, opacity: 1 }, exit: { scaleY: 0.01, scaleX: 0, opacity: 0 }, baseTransition: { duration: 0.5, ease: "circIn" } } },
        { id: 23, name: "Curtain Reveal", description: "Scales width from center", container: { initial: { scaleX: 0, transformOrigin: "center" }, animate: { scaleX: 1 }, exit: { scaleX: 0 }, baseTransition: { duration: 0.5, ease: "easeInOut" } } },
        { id: 24, name: "Card Flip", description: "Flips like a card", container: { initial: { rotateY: 180, opacity: 0, transformOrigin: "center" }, animate: { rotateY: 0, opacity: 1 }, exit: { rotateY: 180, opacity: 0 }, baseTransition: { duration: 0.6, ease: "backOut" } } },
        { id: 25, name: "Liquid Morph", description: "Blobby morph effect", container: { initial: { borderTopLeftRadius: "50%", borderBottomLeftRadius: "50%", width: "5rem", x: "100%" }, animate: { borderTopLeftRadius: "0%", borderBottomLeftRadius: "0%", width: "24rem", x: "0%" }, exit: { borderTopLeftRadius: "50%", borderBottomLeftRadius: "50%", width: "5rem", x: "100%" }, baseTransition: { type: "spring", damping: 15, stiffness: 120 } } },
        { id: 26, name: "Venetian Blinds", description: "Slices in (Mask)", container: { initial: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }, animate: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }, exit: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }, baseTransition: { duration: 0.6, ease: "easeInOut" } } },
        { id: 27, name: "Overshoot", description: "Slides past then settles", container: { initial: { x: "100%" }, animate: { x: "0%" }, exit: { x: "100%" }, baseTransition: { type: "spring", stiffness: 200, damping: 12 } } },
        { id: 28, name: "Rotate Corner", description: "Pivots from bottom right", container: { initial: { rotate: 45, transformOrigin: "bottom right", y: "50%", opacity: 0 }, animate: { rotate: 0, y: "0%", opacity: 1 }, exit: { rotate: 45, y: "50%", opacity: 0 }, baseTransition: { type: "spring", stiffness: 150, damping: 20 } } },
        { id: 29, name: "Fade Up Scale", description: "Subtle professional", container: { initial: { y: 50, opacity: 0, scale: 0.95 }, animate: { y: 0, opacity: 1, scale: 1 }, exit: { y: 50, opacity: 0, scale: 0.95 }, baseTransition: { duration: 0.4, ease: "easeOut" } } },
        { id: 30, name: "Squeeze Out", description: "Compresses then snaps", container: { initial: { scaleX: 0.1, transformOrigin: "right", opacity: 0 }, animate: { scaleX: 1, opacity: 1 }, exit: { scaleX: 0.1, opacity: 0 }, baseTransition: { type: "spring", stiffness: 300, damping: 18 } } },

        // --- New 31-40 ---
        {
            id: 31,
            name: "Newspaper Spin",
            description: "Spins and scales in",
            container: {
                initial: { scale: 0, rotate: 720, opacity: 0 },
                animate: { scale: 1, rotate: 0, opacity: 1 },
                exit: { scale: 0, rotate: 720, opacity: 0 },
                baseTransition: { duration: 0.7, ease: "circOut" }
            }
        },
        {
            id: 32,
            name: "Push Up",
            description: "Simple rise from bottom",
            container: {
                initial: { y: "100%" },
                animate: { y: "0%" },
                exit: { y: "100%" },
                baseTransition: { type: "spring", damping: 25, stiffness: 200 }
            }
        },
        {
            id: 33,
            name: "Soft Zoom",
            description: "Elegant smooth zoom",
            container: {
                initial: { scale: 1.1, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 1.1, opacity: 0 },
                baseTransition: { duration: 0.6, ease: "easeOut" }
            }
        },
        {
            id: 34,
            name: "Fold Down",
            description: "Drops down like a blind",
            container: {
                initial: { scaleY: 0, transformOrigin: "top" },
                animate: { scaleY: 1 },
                exit: { scaleY: 0 },
                baseTransition: { duration: 0.5, ease: "easeInOut" }
            }
        },
        {
            id: 35,
            name: "Sign Post",
            description: "Swings from top hinge",
            container: {
                initial: { rotateX: -90, transformOrigin: "top", opacity: 0 },
                animate: { rotateX: 0, opacity: 1 },
                exit: { rotateX: -90, opacity: 0 },
                baseTransition: { type: "spring", damping: 12, stiffness: 100 }
            }
        },
        {
            id: 36,
            name: "Bounce Left",
            description: "Heavier bounce entrance",
            container: {
                initial: { x: "100%" },
                animate: { x: "0%" },
                exit: { x: "100%" },
                baseTransition: { type: "spring", bounce: 0.5, duration: 0.8 }
            }
        },
        {
            id: 37,
            name: "Fade Slide",
            description: "Short distance elegant slide",
            container: {
                initial: { x: 80, opacity: 0 },
                animate: { x: 0, opacity: 1 },
                exit: { x: 80, opacity: 0 },
                baseTransition: { duration: 0.5, ease: "easeOut" }
            }
        },
        {
            id: 38,
            name: "Corner Expand",
            description: "Grows from bottom corner",
            container: {
                initial: { clipPath: "circle(0% at 100% 100%)" },
                animate: { clipPath: "circle(150% at 100% 100%)" },
                exit: { clipPath: "circle(0% at 100% 100%)" },
                baseTransition: { duration: 0.7, ease: "easeInOut" }
            }
        },
        {
            id: 39,
            name: "Elastic Height",
            description: "Stretches vertically",
            container: {
                initial: { height: 0, opacity: 0 },
                animate: { height: "100%", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                baseTransition: { type: "spring", stiffness: 150, damping: 15 }
            }
        },
        {
            id: 40,
            name: "Flip Diagonal",
            description: "3D rotate from corner",
            container: {
                initial: { rotate3d: [1, 1, 0, 90], opacity: 0, transformOrigin: "bottom right" }, // array for string format support in some versions, but object better
                animate: { rotate3d: [1, 1, 0, 0], opacity: 1 },
                exit: { rotate3d: [1, 1, 0, 90], opacity: 0 },
                // Actual fix for motion prop:
                // rotate3d isn't a direct value in all versions. using style prop or simpler rotates is safer.
                // Let's use rotateX and rotateY combined for diagonal feel

            }
        }
    ];

    // Re-fixing 40 to be standard framer motion props
    animations[39] = {
        id: 40,
        name: "Flip Diagonal",
        description: "3D Flip from corner",
        container: {
            initial: { rotateX: 45, rotateY: 45, opacity: 0, scale: 0.8 },
            animate: { rotateX: 0, rotateY: 0, opacity: 1, scale: 1 },
            exit: { rotateX: 45, rotateY: 45, opacity: 0, scale: 0.8 },
            baseTransition: { duration: 0.6, ease: "backOut" }
        }
    };


    const currentAnim = animations.find((a) => a.id === selectedAnim) || animations[0];

    return (
        <div className="min-h-screen bg-white text-neutral-900 font-sans overflow-x-hidden relative">
            <div className="max-w-7xl mx-auto p-8 pb-32">
                <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-3xl font-light mb-2">Sidebar Animation Breakdown v5</h1>
                        <p className="text-neutral-500 max-w-lg">
                            Theme: <span className="font-semibold text-teal-800">Clean White & Dark Teal</span> <br />
                            Total: <span className="font-semibold text-teal-800">40 Animations</span>
                        </p>
                    </div>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="px-6 py-3 bg-teal-900 text-white rounded-full font-medium hover:bg-teal-800 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transform duration-200"
                    >
                        <Menu size={20} />
                        Open Demo
                    </button>
                </header>

                {/* Controls */}
                <div className="mb-12 p-6 bg-neutral-50 rounded-2xl border border-neutral-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-6 text-teal-900 font-medium">
                        <Settings size={18} />
                        <span>Animation Breakdown Controls</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Speed Control */}
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <label className="flex items-center gap-2 text-neutral-600">
                                    <Clock size={16} /> Speed
                                </label>
                                <span className="font-mono text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                                    {speedMultiplier === 1 ? "Normal" : speedMultiplier < 1 ? "Normal" : "Slow Motion"} (x{speedMultiplier})
                                </span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                step="1"
                                value={speedMultiplier}
                                onChange={(e) => setSpeedMultiplier(Number(e.target.value))}
                                className="w-full accent-teal-700 h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        {/* Stagger Control */}
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <label className="flex items-center gap-2 text-neutral-600">
                                    <Layers size={16} /> Component Stagger
                                </label>
                                <span className="font-mono text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                                    {staggerDelay}s
                                </span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="0.5"
                                step="0.05"
                                value={staggerDelay}
                                onChange={(e) => setStaggerDelay(Number(e.target.value))}
                                className="w-full accent-teal-700 h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {animations.map((anim) => (
                        <button
                            key={anim.id}
                            onClick={() => {
                                setSelectedAnim(anim.id);
                                setIsOpen(true);
                            }}
                            className={`p-4 rounded-xl border text-left transition-all h-full flex flex-col justify-between group relative overflow-hidden ${selectedAnim === anim.id
                                    ? "bg-white border-teal-500 ring-2 ring-teal-500/20 shadow-md"
                                    : "bg-white border-neutral-200 hover:border-teal-300 hover:shadow-lg hover:-translate-y-1"
                                }`}
                        >
                            <div>
                                <span className={`text-xs font-mono block mb-2 ${selectedAnim === anim.id ? 'text-teal-700 font-bold' : 'text-neutral-400'}`}>
                                    {anim.id.toString().padStart(2, "0")}
                                </span>
                                <span className="font-medium text-sm block mb-1 text-neutral-800">{anim.name}</span>
                                <span className="text-xs text-neutral-500 leading-tight block opacity-90">
                                    {anim.description}
                                </span>
                            </div>

                            <div className="mt-4 pt-4 border-t border-dashed border-neutral-100 flex justify-end">
                                <div className={`w-8 h-1 rounded-full ${selectedAnim === anim.id ? 'bg-teal-500' : 'bg-neutral-200 group-hover:bg-teal-200'} transition-colors`} />
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Sidebar Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[60]"
                        />

                        <motion.div
                            key={currentAnim.id}
                            className="fixed right-0 top-0 bottom-0 z-[70] shadow-2xl overflow-hidden text-white bg-teal-950 border-l border-teal-800"
                            initial={currentAnim.container.initial}
                            animate={currentAnim.container.animate}
                            exit={currentAnim.container.exit}
                            transition={getContainerTransition(currentAnim.container.baseTransition)}
                            style={currentAnim.name === "Rolling Paper" || currentAnim.name === "Corner Morph" || currentAnim.name === "Liquid Morph" ? {} : { width: "24rem" }}
                        >
                            <div className="h-full flex flex-col p-8 bg-teal-950 relative">
                                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                                {/* Close Button - Staggers in */}
                                <motion.div variants={contentVariants} className="flex justify-between items-center mb-10 relative z-10">
                                    <h2 className="text-xl font-light tracking-wide text-teal-50">Menu</h2>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 hover:bg-teal-900 rounded-full transition-colors text-teal-200 hover:text-white"
                                    >
                                        <X size={20} />
                                    </button>
                                </motion.div>

                                {/* Content Blocks - Stagger in one by one */}
                                <motion.div variants={contentVariants} className="w-full h-40 bg-teal-900 rounded-xl mb-8 relative overflow-hidden group border border-teal-800/50 shadow-inner">
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-800/20 to-teal-900/80" />
                                    <div className="absolute bottom-4 left-4 text-teal-100 text-sm font-medium tracking-wide">Featured Collection</div>
                                </motion.div>

                                <motion.div variants={contentVariants} className="space-y-3 flex-1">
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <div key={item} className="flex items-center gap-4 p-3 hover:bg-teal-900/50 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-teal-800/30 group">
                                            <div className="w-8 h-8 rounded-full bg-teal-900 flex items-center justify-center text-xs font-mono text-teal-500 group-hover:text-teal-200 transition-colors border border-teal-800">
                                                {item}
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <div className="h-2 w-32 bg-teal-900 rounded-full group-hover:bg-teal-800 transition-colors" />
                                                <div className="h-1.5 w-20 bg-teal-900/50 rounded-full" />
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>

                                <motion.div variants={contentVariants} className="pt-8 border-t border-teal-900 mt-auto">
                                    <div className="flex items-center justify-between text-xs text-teal-500 mb-2">
                                        <span>Active Effect</span>
                                        <span>{speedMultiplier}x Speed</span>
                                    </div>
                                    <div className="bg-teal-900/50 p-3 rounded border border-teal-800 text-xs font-mono text-teal-100 flex justify-between items-center">
                                        <span>{currentAnim.name}</span>
                                        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
