"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {

    const handleGetStarted = () => {
    const joinUsSection = document.getElementById("join-us-section");
    if (joinUsSection) {
      joinUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-54 pb-12">
      <div className="container mx-auto max-w-6xl px-4 text-center">
     
     
<motion.h1
  className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  We don't add AI.
  <br />
  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
    We build intelligence-first products.
  </span>
</motion.h1>

<motion.p
  className="mb-4 text-xl text-muted-foreground sm:text-1xl"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
  Most products pretend to be intelligent. Ours actually are.
</motion.p>

<motion.p
  className="mb-16 text-md text-muted-foreground"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  While everyone else bolts AI onto old ideas, we create products that are born
  intelligent. Apps, extensions, and tools that adapt, learn, and solve problems
  in ways traditional software never could.  
</motion.p>






        <motion.div
          className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button onClick={handleGetStarted} size="lg" className="gap-2">
            Explore Products
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button  onClick={handleGetStarted} size="lg" variant="outline">
            Start Building
          </Button>
        </motion.div>
      </div>

      {/* Robot Image - Centered with Frame Background */}
      <motion.div
        className="mt-8 flex w-full justify-center px-4 pb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="max-w-5xl w-full rounded-3xl bg-gradient-to-br from-gray-100 to-gray-50 p-4 shadow-lg">
          <Image
            src="/Robot.png"
            alt="AI Robot"
            width={1200}
            height={400}
            className="w-full rounded-2xl object-contain"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
