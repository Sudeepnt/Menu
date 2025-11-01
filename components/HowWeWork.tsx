"use client";

import { motion } from "framer-motion";
import { Palette, Target, Zap, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Design Thinking First",
    description:
      "Every build starts with empathy, mapping real user needs before a line of code is written.",
  },
  {
    icon: Target,
    title: "Agent-Native by Default",
    description:
      "Our IPs and co-developed products are not AI add-ons, they are intelligence-first, designed for adaptability.",
  },
  {
    icon: Zap,
    title: "Rapid Evolution",
    description: "Our products get smarter with every interaction.",
  },
  {
    icon: TrendingUp,
    title: "Rapid Prototyping",
    description:
      "We ship testable MVPs in weeks, so you can validate fast and scale smart.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};
export function HowWeWork() {
  return (
    <section className="container py-24">
      <motion.h2
        className="mb-12 text-center text-3xl font-bold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Our Products Work Differently
        </span>
      </motion.h2>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="mb-6 rounded-lg bg-gray-50 p-3">
                <Icon className="h-6 w-6 text-gray-700" strokeWidth={1.5} />
              </div>

              <h3 className="mb-3 text-lg font-semibold text-black">
                {feature.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
