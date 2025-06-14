"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";

export default function HeroSection() {
  return (
    <section className="relative h-[600px] overflow-hidden font-raleway">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <Navbar />
      </nav>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        
        {/* Left */}
        <div className="bg-[#8B963B] text-white flex flex-col justify-center px-6 md:px-16">
          <div className="max-w-xl space-y-8">
            <h1 className="text-5xl md:text-8xl font-medium">
              Ladang <br /> Sehat <br /> Indonesia
            </h1>
            <p className="text-base md:text-2xl text-white">
              We reach beyond established trends and apply new creative solutions.
              Right place for achieving top results.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="relative h-full w-full">
          <Image
            src="/about-us/hero/banner.webp"
            alt="Factory"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
