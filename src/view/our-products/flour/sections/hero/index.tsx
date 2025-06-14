"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import NavbarDark from "@/components/navbar-dark";

export default function HeroSection() {
  return (
    <section className="font-raleway">
      <div className="">
        {/* Navbar */}
        <div>
          <Image
            src="/our-products/hero/Our-Product-Banner.webp"
            alt="Ladang Lima Flour"
            width={1920}
            height={1080}
            className="w-full h-auto max-h-full object-contain"
            priority
          />
        </div>

        <nav className="absolute top-0 left-0 z-50 w-full bg-transparent">
          <Navbar />
        </nav>
      </div>
    </section>
  );
}
