"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductSwiperSection() {
  const images = [
    {
      src: "/home/product-swiper/swiper-1-1024x618.webp",
      alt: "LLCOM-COOKIES",
    },
    {
      src: "/home/product-swiper/swiper-2-1024x618.webp",
      alt: "LLCOM-FLOUR",
    },
    {
      src: "/home/product-swiper/swiper-3-1024x618.webp",
      alt: "LLCOM-NOODLE",
    },
    {
      src: "/home/product-swiper/swiper-4-1024x618.webp",
      alt: "LLCOM-PASTA",
    },
  ];

  return (
    <section className="bg-white w-screen">
      <div className="max-w-10xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
          loop
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-auto overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1024}
                  height={618}
                  className="w-full h-auto object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
