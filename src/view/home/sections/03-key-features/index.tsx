import Image from "next/image";

export default function KeyFeaturesSection() {
  return (
    <section className="bg-white px-6 py-20">
        
      {/* Title */}
      <div className="font-koho mb-12 text-center">
        <h1 className="mb-4 text-5xl font-bold text-[#A08152] md:text-7xl">
          100% Cassava
        </h1>
        <p className="text-xl text-[#A08152] md:text-3xl">
          from local farmer Indonesia
        </p>
      </div>

      {/* Main Image */}
      <div className="mb-16 flex justify-center">
        <Image
          src="/home/key-features/main-banner.png"
          alt="Cassava Image"
          width={1000}
          height={500}
          className="h-auto max-w-full"
        />
      </div>

      {/* Features */}
      <div className="font-koho flex flex-wrap justify-center gap-10 text-center font-medium text-[#848B4C]">
        <div className="flex w-[130px] flex-col items-center gap-3">
          <Image
            src="/home/key-features/sub-1.png"
            alt="Source of Fiber"
            width={100}
            height={100}
            className="h-[100px] w-[100px] object-contain"
          />
          <p className="text-sm md:text-base">Source of Fiber</p>
        </div>

        <div className="flex w-[130px] flex-col items-center gap-3">
          <Image
            src="/home/key-features/sub-2.png"
            alt="Artificial Coloring Free"
            width={100}
            height={100}
            className="h-[100px] w-[100px] object-contain"
          />
          <p className="text-sm md:text-base">Artificial Coloring Free</p>
        </div>

        <div className="flex w-[130px] flex-col items-center gap-3">
          <Image
            src="/home/key-features/sub-3.png"
            alt="High Iron & Calcium"
            width={100}
            height={100}
            className="h-[100px] w-[100px] object-contain"
          />
          <p className="text-sm md:text-base">High Iron & Calcium</p>
        </div>

        <div className="flex w-[130px] flex-col items-center gap-3">
          <Image
            src="/home/key-features/sub-4.png"
            alt="Low Glycemic Index"
            width={100}
            height={100}
            className="h-[100px] w-[100px] object-contain"
          />
          <p className="text-sm md:text-base">Low Glycemic Index</p>
        </div>

        <div className="flex w-[130px] flex-col items-center gap-3">
          <Image
            src="/home/key-features/sub-5.png"
            alt="100% Gluten Free"
            width={100}
            height={100}
            className="h-[100px] w-[100px] object-contain"
          />
          <p className="text-sm md:text-base">100% Gluten Free</p>
        </div>
      </div>
    </section>
  );
}
