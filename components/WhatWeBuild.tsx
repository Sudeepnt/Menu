"use client";

import { motion } from "framer-motion";
import { Flame, Handshake } from "lucide-react";
import { Card } from "./ui/card";

const items = [
  {
    icon: Flame,
    title: "AI-Native Product Portfolio",
    description:
      "We design and ship AI-native products that people love using. Every product starts with a real problem, then grows into an intelligent solution that continuously learns.",
  },
  {
    icon: Handshake,
    title: "Co-Creation With Founders",
    description:
      "We don't consult. We co-own. When we build together, we share the vision, the risks, and the upside.",
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

export function WhatWeBuild() {
  return (
    <section className="container py-24">
      <motion.h2
        className="mb-12 text-center text-3xl font-bold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          What We Build
        </span>
      </motion.h2>

      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-3">
                  <div className="rounded-lg bg-gray-50 p-3 w-fit">
                    <Icon className="h-6 w-6 text-gray-700" strokeWidth={1.5} />
                  </div>
                </div>
                 <h3 className="mb-0 text-lg font-semibold text-black">
                  {item.title}
                </h3>

               <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
