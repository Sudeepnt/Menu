"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";

export function Navbar() {
  const handleGetStarted = () => {
    const joinUsSection = document.getElementById("join-us-section");
    if (joinUsSection) {
      joinUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex h-16 items-center justify-center">
        <div className="w-full max-w-7xl flex h-16 items-center justify-center gap-auto px-4 md:px-8">
          <Image
            src="/Logo.png"
            alt="Crodal Logo"
            width={120}
            height={40}
            priority
            className="h-auto w-auto"
          />
          <div className="ml-auto">
            <Button onClick={handleGetStarted}>Get Started</Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
