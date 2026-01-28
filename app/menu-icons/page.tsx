"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function MenuIconsPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 flex justify-center py-20">

            <div className="flex flex-col gap-16">
                {icons.map((item, i) => (
                    <div key={i} className="flex items-center gap-8 group">
                        <span className="text-xl font-bold text-slate-300 font-mono">
                            {i < 9 ? `0${i + 1}` : i + 1}
                        </span>
                        <div className="relative p-2 cursor-pointer hover:bg-slate-50 rounded-lg transition-colors">
                            <item.Component />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*                                  THE ICONS                                 */
/* -------------------------------------------------------------------------- */

const Line = ({ ...props }) => (
    <motion.span className="absolute h-[2px] w-8 bg-slate-900 rounded-full" {...props} />
);

// 01. The Classic Pivot
const IconPivot = () => {
    const [active, setActive] = useState(false);
    return (
        <motion.button className="relative h-6 w-8 outline-none" onClick={() => setActive(!active)} animate={active ? "open" : "closed"}>
            <Line style={{ top: "0%" }} variants={{ closed: { rotate: 0, top: "0%" }, open: { rotate: 45, top: "50%" } }} />
            <Line style={{ top: "50%", marginTop: "-1px" }} variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} />
            <Line style={{ bottom: "0%" }} variants={{ closed: { rotate: 0, bottom: "0%" }, open: { rotate: -45, top: "50%" } }} />
        </motion.button>
    );
};

// 02. The Elastic Spring
const IconElastic = () => {
    const [active, setActive] = useState(false);
    return (
        <motion.button className="relative h-6 w-8 outline-none" onClick={() => setActive(!active)} animate={active ? "open" : "closed"}>
            <Line style={{ top: "0%" }} variants={{ closed: { rotate: 0, top: "0%" }, open: { rotate: 45, top: "50%" } }} transition={{ type: "spring", stiffness: 260, damping: 20 }} />
            <Line style={{ top: "50%", marginTop: "-1px" }} variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} />
            <Line style={{ bottom: "0%" }} variants={{ closed: { rotate: 0, bottom: "0%" }, open: { rotate: -45, top: "50%" } }} transition={{ type: "spring", stiffness: 260, damping: 20 }} />
        </motion.button>
    );
};

// 03. The Fade Out
const IconFade = () => {
    const [active, setActive] = useState(false);
    return (
        <motion.button className="relative h-6 w-8 outline-none flex flex-col justify-between" onClick={() => setActive(!active)} animate={active ? "open" : "closed"}>
            <motion.div className="h-[2px] w-8 bg-slate-900 rounded-full origin-left" variants={{ closed: { rotate: 0, width: "100%" }, open: { rotate: 45, width: "110%" } }} />
            <motion.div className="h-[2px] w-8 bg-slate-900 rounded-full" variants={{ closed: { opacity: 1, x: 0 }, open: { opacity: 0, x: -20 } }} />
            <motion.div className="h-[2px] w-8 bg-slate-900 rounded-full origin-left" variants={{ closed: { rotate: 0, width: "100%" }, open: { rotate: -45, width: "110%" } }} />
        </motion.button>
    );
};

// 04. The Arrow Morph
const IconArrow = () => {
    const [active, setActive] = useState(false);
    return (
        <motion.button className="relative h-6 w-8 outline-none flex flex-col justify-between" onClick={() => setActive(!active)} animate={active ? "open" : "closed"}>
            <motion.div className="h-[2px] w-8 bg-slate-900 rounded-full origin-left" variants={{ closed: { rotate: 0, x: 0 }, open: { rotate: -45, x: 2, w: "60%" } }} />
            <motion.div className="h-[2px] w-8 bg-slate-900 rounded-full" variants={{ closed: { x: 0 }, open: { x: 4 } }} />
            <motion.div className="h-[2px] w-8 bg-slate-900 rounded-full origin-left" variants={{ closed: { rotate: 0, x: 0 }, open: { rotate: 45, x: 2 } }} />
        </motion.button>
    );
};

// 05. The Turn (Simple Rotation)
const IconTurn = () => {
    const [active, setActive] = useState(false);
    return (
        <motion.button className="relative h-8 w-8 outline-none flex flex-col justify-center items-center gap-1.5" onClick={() => setActive(!active)} animate={active ? "open" : "closed"}>
            <motion.div className="h-[2px] w-8 bg-slate-900 rounded-full" variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 4 } }} />
            <motion.div className="h-[2px] w-8 bg-slate-900 rounded-full" variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -4 } }} />
        </motion.button>
    );
};

// 06. The Stagger (Split Out)
const IconStagger = () => {
    const [active, setActive] = useState(false);
    return (
        <motion.button className="relative h-6 w-8 outline-none overflow-hidden" onClick={() => setActive(!active)} animate={active ? "open" : "closed"}>
            <Line style={{ top: "0%" }} variants={{ closed: { x: 0 }, open: { x: 30 } }} transition={{ delay: 0.1 }} />
            <Line style={{ top: "50%", marginTop: "-1px" }} variants={{ closed: { x: 0 }, open: { x: -30 } }} />
            <Line style={{ bottom: "0%" }} variants={{ closed: { x: 0 }, open: { x: 30 } }} transition={{ delay: 0.1 }} />

            {/* The X that appears */}
            <motion.span className="absolute h-[2px] w-8 bg-slate-900 top-1/2 -mt-[1px]" variants={{ closed: { rotate: 0, scale: 0 }, open: { rotate: 45, scale: 1 } }} />
            <motion.span className="absolute h-[2px] w-8 bg-slate-900 top-1/2 -mt-[1px]" variants={{ closed: { rotate: 0, scale: 0 }, open: { rotate: -45, scale: 1 } }} />
        </motion.button>
    );
};

// 07. The Squash (Stretch Effect)
const IconSquash = () => {
    const [active, setActive] = useState(false);
    return (
        <motion.button className="relative h-4 w-8 outline-none flex flex-col justify-between items-center" onClick={() => setActive(!active)} animate={active ? "open" : "closed"}>
            <motion.div className="h-[2px] w-8 bg-slate-900" variants={{ closed: { y: 0 }, open: { y: 7, rotate: 45 } }} />
            <motion.div className="h-[2px] w-8 bg-slate-900" variants={{ closed: { y: 0 }, open: { y: -7, rotate: -45 } }} />
        </motion.button>
    );
};

// 08. The Grid to X
const IconGrid = () => {
    const [active, setActive] = useState(false);
    return (
        <motion.button className="relative h-6 w-6 grid grid-cols-2 gap-1" onClick={() => setActive(!active)} animate={active ? "open" : "closed"} style={{ rotate: active ? 90 : 0 }}>
            <motion.div className="w-2.5 h-2.5 bg-slate-900 rounded-full" variants={{ open: { borderRadius: 0, width: "140%", x: 2, y: 2, rotate: 45 } }} />
            <motion.div className="w-2.5 h-2.5 bg-slate-900 rounded-full" variants={{ open: { opacity: 0 } }} />
            <motion.div className="w-2.5 h-2.5 bg-slate-900 rounded-full" variants={{ open: { opacity: 0 } }} />
            <motion.div className="w-2.5 h-2.5 bg-slate-900 rounded-full" variants={{ open: { borderRadius: 0, width: "140%", x: -10, y: -10, rotate: -45 } }} />
        </motion.button>
    );
};

// 09. The Minimal (Short Lines)
const IconMinimal = () => {
    const [active, setActive] = useState(false);
    return (
        <motion.button className="relative h-6 w-10 flex flex-col gap-1.5 items-end justify-center" onClick={() => setActive(!active)} animate={active ? "open" : "closed"}>
            <motion.div className="h-[2px] w-10 bg-slate-900" variants={{ closed: { width: "100%", rotate: 0, y: 0 }, open: { width: "100%", rotate: 45, y: 8 } }} />
            <motion.div className="h-[2px] w-6 bg-slate-900" variants={{ closed: { opacity: 1, x: 0 }, open: { opacity: 0, x: 20 } }} />
            <motion.div className="h-[2px] w-8 bg-slate-900" variants={{ closed: { width: "80%", rotate: 0, y: 0 }, open: { width: "100%", rotate: -45, y: -8 } }} />
        </motion.button>
    );
};

// 10. The Steps (Cascading)
const IconSteps = () => {
    const [active, setActive] = useState(false);
    return (
        <motion.button className="relative h-6 w-8 flex flex-col justify-between" onClick={() => setActive(!active)} animate={active ? "open" : "closed"}>
            <motion.div className="h-[2px] w-8 bg-slate-900 origin-right" variants={{ closed: { rotate: 0 }, open: { rotate: -45, y: 2 } }} />
            <motion.div className="h-[2px] w-8 bg-slate-900" variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} />
            <motion.div className="h-[2px] w-8 bg-slate-900 origin-right" variants={{ closed: { rotate: 0 }, open: { rotate: 45, y: -2 } }} />
        </motion.button>
    );
};


const icons = [
    { Component: IconPivot },
    { Component: IconElastic },
    { Component: IconFade },
    { Component: IconArrow },
    { Component: IconTurn },
    { Component: IconStagger },
    { Component: IconSquash },
    { Component: IconGrid },
    { Component: IconMinimal },
    { Component: IconSteps },
];
