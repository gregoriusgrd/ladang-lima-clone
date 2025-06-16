"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import NavbarDark from "@/components/navbar-dark";

export default function HeroSection() {
  return (
    <section className="font-raleway">
      <div className="">
        <div className="relative aspect-[16/5] bg-[url(/home/factory-banner/banner.webp)] bg-cover bg-center">
          <h1 className="absolute inset-0 flex items-center justify-center text-center text-4xl text-white md:text-7xl">
            CONTACT US
          </h1>
        </div>

        <nav className="absolute top-0 left-0 z-50 w-full bg-transparent">
          <Navbar />
        </nav>
      </div>
    </section>
  );
}
