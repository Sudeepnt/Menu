"use client";

import { motion } from "framer-motion";
import { Users, Rocket, Building2 } from "lucide-react";
import { Card } from "./ui/card";

const items = [
  {
    icon: Users,
    title: "Everyday Users",
    description:
      "Apps and extensions that feel simple, and get smarter every time you use them.",
  },
  {
    icon: Rocket,
    title: "Founders & Creators",
    description:
      "Got a bold idea? We turn it into an AI-native MVP in weeks, not years, ready for market, ready for scale.",
  },
  {
    icon: Building2,
    title: "Businesses & Organization",
    description:
      "Partner with us to create spin-out products and new IPs designed for adoption and long-term value.",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function WhoWeBuildFor() {
  return (
    <section className="container py-0">
    
        <motion.h2
        className="mb-12 text-center text-3xl font-bold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Who We Build For
        </span>
      </motion.h2>



      <motion.div
        className="grid gap-6 md:grid-cols-3 pb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full p-6 text-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="flex justify-center">
                  <div className="rounded-lg bg-gray-50 p-3">
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
