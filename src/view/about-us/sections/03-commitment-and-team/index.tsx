"use client";

import Image from "next/image";
import { FaUsers, FaCookieBite } from "react-icons/fa";

export default function CommitmentAndTeamSection() {
  return (
    <section className="font-raleway flex flex-col md:flex-row">
      {/* Left */}
      <div className="flex flex-col justify-center gap-16 bg-[#8B963B] px-6 pb-16 text-white md:w-1/2">
        
        {/* 1 */}
        <div className="flex flex-col gap-4 px-6">
          <FaUsers className="text-4xl md:text-5xl" />
          <h2 className="text-2xl leading-tight font-bold md:text-3xl">
            Helping Indonesia’s Food Security
          </h2>
          <p className="text-sm leading-relaxed text-white/90 md:text-base">
            As one of the largest cassava producers in the world, Indonesia has
            used cassava as a traditional staple food, usually cooked by boiling
            or frying. But in this modern era, the interest in consuming cassava
            among the younger generation is declining. This inspired us to
            create modern food using cassava as the main ingredient. We proudly
            use our cassava flour to make cookies, pasta, pancake mixes and
            vegetable noodles. One of our main goals is to improve Indonesia’s
            national food security by optimizing one of the local food sources,
            cassava. The more we source food locally, the stronger our food
            security will be and the less dependent we will be on food imports.
          </p>
        </div>

        {/* 2 */}
        <div className="flex flex-col gap-4 px-6">
          <FaCookieBite className="text-4xl md:text-5xl" />
          <h2 className="text-2xl leading-tight font-bold md:text-3xl">
            High-Quality Products
          </h2>
          <p className="text-sm leading-relaxed text-white/90 md:text-base">
            In addition to using the main ingredient of cassava, we also make
            our own various derivative products with the best quality raw
            materials and the best nutritional value. We create healthy and
            wholesome food products without preservatives, artificial colors,
            sweeteners and flavors. We are committed to delivering high quality
            healthy products.
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-wrap md:w-1/2">
        {/* 1 */}
        <div className="relative h-[350px] w-1/2 sm:h-[400px]">
          <Image
            src="/about-us/commitment-and-team/raka-ceo.jpg"
            alt="Foto Raka"
            fill
            className="object-cover object-top"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-8 py-8 text-sm text-white">
            <p className="font-semibold uppercase">A.A. Raka Bagus Vinaya</p>
            <p>Founder, CEO</p>
          </div>
        </div>

        {/* 2 */}
        <div className="relative h-[350px] w-1/2 sm:h-[400px]">
          <Image
            src="/about-us/commitment-and-team/nysa-director.jpeg"
            alt="Foto Nysa"
            fill
            className="object-cover object-top"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-8 py-8 text-sm text-white">
            <p className="font-semibold uppercase">Annisa Pratiwi</p>
            <p>Co-Founder, Commercial Director</p>
          </div>
        </div>

        {/* 3 */}
        <div className="relative h-[350px] w-1/2 sm:h-[400px]">
          <Image
            src="/about-us/commitment-and-team/ucup-factory-superintendent.webp"
            alt="Foto Ucup"
            fill
            className="object-cover object-top"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-8 py-8 text-sm text-white">
            <p className="font-semibold uppercase">Winarto Dwi Setiawan</p>
            <p>Factory Superintendent</p>
          </div>
        </div>

        {/* 4 */}
        <div className="relative h-[350px] w-1/2 sm:h-[400px]">
          <Image
            src="/about-us/commitment-and-team/elionora-research-and-dev.webp"
            alt="Foto Elionora"
            fill
            className="object-cover object-top"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-8 py-8 text-sm text-white">
            <p className="font-semibold uppercase">Elionora</p>
            <p>Research and Development</p>
          </div>
        </div>
      </div>
    </section>
  );
}
