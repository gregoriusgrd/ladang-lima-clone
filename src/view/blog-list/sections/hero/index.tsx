"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";

export default function HeroSection() {
  return (
    <section className="relative font-raleway">
      <nav className="absolute top-0 left-0 z-50 w-full bg-transparent">
        <Navbar />
      </nav>

      <div className="aspect-[16/5] bg-[url(/blog-list/banner-blog-list-1920x600.webp)] bg-cover bg-center">
        <h1 className="flex h-full items-center justify-center text-center text-4xl text-white md:text-7xl">
          BLOG LIST
        </h1>
      </div>
    </section>
  );
}
