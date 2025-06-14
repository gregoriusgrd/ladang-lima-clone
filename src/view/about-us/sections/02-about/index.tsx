"use client"

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="font-raleway bg-white px-6 py-16">
      <div className="container mx-auto space-y-20">


        {/* About Company */}
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <Image
            src="/about-us/intro/logo-LSI-400x400-1.png"
            alt="LSI Logo"
            width={300}
            height={300}
            className="mx-auto h-auto max-w-full"
          />

          <div className="max-w-3xl text-center md:text-left">
            <h2 className="mb-4 text-3xl md:text-4xl font-semibold text-gray-900 leading-relaxed">
              About Company
            </h2>
            <p className="leading-relaxed text-gray-600 md:text-lg">
              Ladang Sehat Indonesia is a company that produces cassava flour
              and has the brand “Ladang Lima” which is a pioneer of Gluten-Free
              food in Indonesia. We have a production site in the Pasuruan area
              with an area of 3 hectares located close to the center of cassava
              farmers, at the foot of Mount Bromo. We continue to strive to meet
              the needs of Cassava Flour both for the Indonesian market and
              exports to the global market.
            </p>
          </div>
        </div>

        {/* Our Brand */}
        <div className="flex flex-col items-center gap-8 md:flex-row-reverse">
          <Image
            src="/about-us/intro/logo-ll.png"
            alt="Ladang Lima Logo"
            width={300}
            height={300}
            className="mx-auto h-auto w-full max-w-[300px]"
          />
          <div className="max-w-3xl text-center md:text-left">
            <h2 className="mb-4 text-3xl md:text-4xl font-semibold text-gray-900 leading-relaxed">
              Our Brand
            </h2>
            <p className="leading-relaxed text-gray-600 md:text-lg">
              Our brand name “Ladang Lima” is made up of two words, “Ladang”
              meaning farmland where cassava grows naturally, and “Lima” or five
              in Bahasa Indonesia, denoting the five health benefits that can be
              found in each of our products: Nutrient-rich, no preservatives, no
              artificial flavors, no artificial colors and no artificial
              sweeteners. <br />
              <br />
              Ladang Lima products are manufactured using modern technology,
              high hygiene standards and high-quality raw materials. All
              ingredients are sourced from local Indonesian farmers who grow
              cassava organically. In addition to cassava flour, we also produce
              several derivative products such as healthy vegetable noodles,
              pre-mix flour, all-purpose seasoning flour, gluten-free cookies
              and pasta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
