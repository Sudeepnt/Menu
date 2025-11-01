"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhatWeBuild } from "@/components/WhatWeBuild";
import { ProductPhilosophy } from "@/components/ProductPhilosophy";
import { HowWeWork } from "@/components/HowWeWork";
import { WhoWeBuildFor } from "@/components/WhoWeBuildFor";
import { Footer } from "@/components/Footer";
import { JoinUsBuildingFuture } from "@/components/JoinUsBuildingFuture";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="w-full max-w-7xl">
        <Hero />
        <WhoWeBuildFor />
        <WhatWeBuild />
        <HowWeWork />
        <ProductPhilosophy />
        <JoinUsBuildingFuture />
        <Footer />
      </div>
    </div>
  );
}
