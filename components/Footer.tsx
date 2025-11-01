"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const handleGetStarted = () => {
    const joinUsSection = document.getElementById("join-us-section");
    if (joinUsSection) {
      joinUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <Image
                src="/Logo.png"
                alt="Crodal Logo"
                width={120}
                height={40}
                priority
                className="h-auto w-auto"
              />
            </div>
            <p className="mb-4 text-muted-foreground">
              Building intelligence-first products that actually work.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-start md:items-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 text-lg font-semibold">Get in touch</h4>
            <a href="mailto:crodal.ai@gmail.com">
              <Button className="gap-2">
                crodal.ai@gmail.com
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </motion.div>

        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Crodal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
