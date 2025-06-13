"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Navbar from "./navbar";

export default function HeroSlider() {
  const slides = [
    {
      heading: "GOODNESS FROM THE NATURE",
      bgUrl: "/home/hero/banner-1.jpeg",
    },
    {
      heading: "EASY TASTY HEALTHY GLUTEN-FREE",
      bgUrl: "/home/hero/banner-2.webp",
    },
    {
      heading: "FROM LOCAL TO GLOBAL",
      bgUrl: "/home/hero/banner-3.webp",
    },
  ];

  return (
    <section className="relative h-[900px] w-full overflow-hidden">
      <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <Navbar />
      </nav>

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        loop
        className="h-full cursor-grab active:cursor-grabbing"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex h-full w-full items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bgUrl})` }}
            >
              <h2 className="animate-fade-in text-4xl font-bold text-white md:text-6xl">
                {slide.heading}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
