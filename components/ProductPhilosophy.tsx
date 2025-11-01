"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";

const principles = [
  {
    title: "Start With Intelligence",
    description:
      "We do not ask how do we add AI. We ask what would an intelligent product do.",
  },
  {
    title: "Ship Fast, Learn Faster",
    description: "Launch early, gather real user data, iterate relentlessly.",
  },
  {
    title: "Own the Vision",
    description:
      "We build products we believe in, not features someone else requested.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function ProductPhilosophy() {
  return (
    <section className="container py-24">
  <motion.h2
  className="mb-12 text-center text-3xl font-bold tracking-tight"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
    Our Product Philosophy
  </span>
</motion.h2>


      <motion.div
        className="grid gap-6 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {principles.map((principle, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            
               <h3 className="mb-0 text-lg font-semibold text-black">
                  {principle.title}
                </h3>

               <p className="text-sm leading-relaxed text-muted-foreground">
                {principle.description}
              </p>

            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
